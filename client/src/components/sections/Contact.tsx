import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { content } from "@/content/it";
import { Button } from "@/components/ui/button";
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
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
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
    <section id="contact" className="py-24 bg-gradient-to-t from-black to-background relative">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-display text-white mb-4"
          >
            {content.contact.title}
          </motion.h2>
          <p className="text-muted-foreground text-lg">{content.contact.subtitle}</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card/50 border border-white/10 rounded-2xl p-6 md:p-10 backdrop-blur-sm shadow-2xl"
        >
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
              <div className="h-16 w-16 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mb-4">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">Grazie!</h3>
              <p className="text-muted-foreground text-lg max-w-md">
                {content.contact.form.success}
              </p>
              <Button 
                variant="outline" 
                className="mt-6"
                onClick={() => {
                  setIsSuccess(false);
                  form.reset();
                }}
              >
                Invia un'altra richiesta
              </Button>
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
                          <Input placeholder="Mario Rossi" {...field} className="bg-background/50 border-white/10 text-white placeholder:text-muted-foreground/50 focus:border-primary/50" />
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
                          <Input placeholder="mario@azienda.com" {...field} className="bg-background/50 border-white/10 text-white placeholder:text-muted-foreground/50 focus:border-primary/50" />
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
                          <Input placeholder="+39 333 1234567" {...field} className="bg-background/50 border-white/10 text-white placeholder:text-muted-foreground/50 focus:border-primary/50" />
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
                          <Input placeholder="Studio Legale, E-commerce, ecc." {...field} className="bg-background/50 border-white/10 text-white placeholder:text-muted-foreground/50 focus:border-primary/50" />
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
                          className="min-h-[120px] bg-background/50 border-white/10 text-white placeholder:text-muted-foreground/50 focus:border-primary/50 resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full h-12 text-lg bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Invio in corso...
                    </>
                  ) : (
                    content.contact.form.submit
                  )}
                </Button>
              </form>
            </Form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
