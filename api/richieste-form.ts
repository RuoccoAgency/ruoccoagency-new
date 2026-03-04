import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

const supabase = createClient(supabaseUrl, supabaseServiceKey);

export default async function handler(req: any, res: any) {
    if (req.method !== 'POST') {
        return res.status(405).json({ ok: false, error: 'Method Not Allowed' });
    }

    try {
        const { nomeECognome, email, telefono, tipoAttivita, messaggio } = req.body;

        // Server-side Validation
        if (!nomeECognome || !email || !messaggio) {
            return res.status(400).json({
                ok: false,
                error: 'Missing required fields'
            });
        }

        const { error } = await supabase
            .from('richieste_form')
            .insert([
                {
                    "nome e cognome": nomeECognome,
                    "email": email,
                    "telefono": telefono || null,
                    "Tipo di attività": tipoAttivita || null,
                    "Messaggio": messaggio
                }
            ]);

        if (error) {
            console.error('SUPABASE_INSERT_ERROR', error);
            return res.status(500).json({ ok: false, error: error.message });
        }

        return res.status(200).json({ ok: true });
    } catch (error: any) {
        console.error('Serverless function error:', error);
        return res.status(500).json({ ok: false, error: error.message || 'Internal Server Error' });
    }
}
