import type { Express } from "express";
import { type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema } from "@shared/schema";

import { supabase } from "@/lib/supabase";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<void> {
  app.post("/api/richieste-form", async (req, res) => {
    try {
      const { name, email, phone, type, message } = req.body;

      // Validation
      if (!name || !email || !message) {
        return res.status(400).json({
          success: false,
          error: "I campi Nome, Email e Messaggio sono obbligatori."
        });
      }

      const { error } = await supabase
        .from("Richieste Form")
        .insert([
          {
            "nome e cognome": name,
            "email": email,
            "cell": phone || null,
            "settore": type,
            "Tipo di attività": type, // Mapping 'type' to both columns as requested in context
            "Messaggio": message
          }
        ]);

      if (error) {
        console.error("Supabase error details:", error);
        throw error;
      }

      res.status(200).json({ success: true });
    } catch (error: any) {
      console.error("Contact form error:", error);
      res.status(500).json({
        success: false,
        error: error.message || "Si è verificato un errore durante l'invio."
      });
    }
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertLeadSchema.parse(req.body);
      const lead = await storage.createLead(data);
      res.json(lead);
    } catch (error) {
      res.status(400).json({ message: "Invalid form data" });
    }
  });
}
