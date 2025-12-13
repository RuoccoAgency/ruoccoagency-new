import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { content } from "@/content/it";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Il nome deve essere di almeno 2 caratteri"),
  email: z.string().email("Email non valida"),
  phone: z.string().optional(),
  type: z.string().min(2, "Specificare il tipo di attività"),
  message: z.string().min(10, "Il messaggio deve essere di almeno 10 caratteri"),
});

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      type: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", values);
    
    // In a real app, this would be:
    // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(values) });
    // TODO: Save to Supabase
    // TODO: Send email to ruoccoagency@gmail.com

    setIsSubmitting(false);
    setIsSuccess(true);
    toast({
      title: "Richiesta inviata!",
      description: content.contact.form.success,
    });
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-background z-0" />
      
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold font-display text-white mb-6"
          >
            {content.contact.title}
          </motion.h2>
          <p className="text-muted-foreground text-xl">{content.contact.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* WhatsApp / Direct Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 p-8 rounded-3xl bg-gradient-brand text-white flex flex-col justify-between shadow-[0_0_30px_rgba(124,58,237,0.2)]"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Parla con noi</h3>
              <p className="text-white/90 mb-8">Preferisci una risposta immediata? Scrivici su WhatsApp.</p>
            </div>
            
            <MagneticButton
              className="w-full bg-white text-primary font-bold h-14 rounded-xl flex items-center justify-center gap-3 hover:bg-white/90 transition-colors"
              onClick={() => window.open("https://wa.me/393806413543", "_blank")}
            >
              <MessageCircle className="h-6 w-6" />
              {content.contact.form.whatsapp}
            </MagneticButton>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-card/50 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm shadow-2xl"
          >
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                <div className="h-20 w-20 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mb-2">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="text-3xl font-bold text-white">Grazie!</h3>
                <p className="text-muted-foreground text-lg max-w-md">
                  {content.contact.form.success}
                </p>
                <MagneticButton 
                  className="mt-6 px-8 py-3 rounded-full border border-white/10 hover:bg-white/5 text-white transition-colors"
                  onClick={() => {
                    setIsSuccess(false);
                    form.reset();
                  }}
                >
                  Invia un'altra richiesta
                </MagneticButton>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">{content.contact.form.name}</FormLabel>
                          <FormControl>
                            <Input placeholder="Mario Rossi" {...field} className="h-12 bg-background/50 border-white/10 text-white placeholder:text-muted-foreground/50 focus:border-primary/50 focus:ring-primary/20 rounded-xl" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">{content.contact.form.email}</FormLabel>
                          <FormControl>
                            <Input placeholder="mario@azienda.com" {...field} className="h-12 bg-background/50 border-white/10 text-white placeholder:text-muted-foreground/50 focus:border-primary/50 focus:ring-primary/20 rounded-xl" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">{content.contact.form.phone}</FormLabel>
                          <FormControl>
                            <Input placeholder="+39 333 1234567" {...field} className="h-12 bg-background/50 border-white/10 text-white placeholder:text-muted-foreground/50 focus:border-primary/50 focus:ring-primary/20 rounded-xl" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="type"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">{content.contact.form.type}</FormLabel>
                          <FormControl>
                            <Input placeholder="Studio Legale, E-commerce, ecc." {...field} className="h-12 bg-background/50 border-white/10 text-white placeholder:text-muted-foreground/50 focus:border-primary/50 focus:ring-primary/20 rounded-xl" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">{content.contact.form.message}</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Descrivi brevemente di cosa hai bisogno..." 
                            className="min-h-[140px] bg-background/50 border-white/10 text-white placeholder:text-muted-foreground/50 focus:border-primary/50 focus:ring-primary/20 resize-none rounded-xl p-4" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <MagneticButton 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full h-14 text-lg bg-white text-black font-bold rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Invio in corso...
                      </>
                    ) : (
                      content.contact.form.submit
                    )}
                  </MagneticButton>
                </form>
              </Form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
