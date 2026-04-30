import { useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useLanguage } from "@/hooks/useLanguage";
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
import { CheckCircle2, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  const { content, language } = useLanguage();

  const formSchema = useMemo(() => z.object({
    name: z.string().min(2, content.contact.form.validation.name),
    email: z.string().email(content.contact.form.validation.email),
    phone: z.string().optional(),
    type: z.string().min(2, content.contact.form.validation.type),
    message: z.string().min(10, content.contact.form.validation.message),
  }), [content]);

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

    try {
      const response = await fetch("/api/richieste-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nomeECognome: values.name,
          email: values.email,
          telefono: values.phone,
          tipoAttivita: values.type,
          messaggio: values.message,
        }),
      });

      if (!response.ok) throw new Error("Submission failed");

      setIsSuccess(true);
      toast({
        title: content.contact.form.thanks,
        description: content.contact.form.success,
      });
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: language === "it" ? "Errore" : "Error",
        description: content.contact.form.error,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-t from-black to-background relative">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">

        <div className="text-center mb-16">
          <Reveal width="100%">
            <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">
              {content.contact.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1} width="100%">
            <p className="text-muted-foreground text-lg">{content.contact.subtitle}</p>
          </Reveal>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative bg-card/50 border border-white/10 rounded-2xl p-6 md:p-10 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:bg-white/[0.07] shadow-2xl"
        >
          {/* Decorative Elements */}
          <div className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="h-16 w-16 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mb-4"
              >
                <CheckCircle2 className="h-8 w-8" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white">{content.contact.form.thanks}</h3>
              <p className="text-muted-foreground text-lg max-w-md">
                {content.contact.form.success}
              </p>
              <Button
                variant="outline"
                className="mt-6 hover:bg-white/10"
                onClick={() => {
                  setIsSuccess(false);
                  form.reset();
                }}
              >
                {content.contact.form.sendAnother}
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white text-xs uppercase tracking-widest">{content.contact.form.name}</FormLabel>
                            <FormControl>
                              <Input placeholder={content.contact.form.namePlaceholder} {...field} className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground/30 focus:border-primary/50 transition-colors h-12" />
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
                            <FormLabel className="text-white text-xs uppercase tracking-widest">{content.contact.form.email}</FormLabel>
                            <FormControl>
                              <Input placeholder={content.contact.form.emailPlaceholder} {...field} className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground/30 focus:border-primary/50 transition-colors h-12" />
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
                            <FormLabel className="text-white text-xs uppercase tracking-widest">{content.contact.form.phone}</FormLabel>
                            <FormControl>
                              <Input placeholder={content.contact.form.phonePlaceholder} {...field} className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground/30 focus:border-primary/50 transition-colors h-12" />
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
                            <FormLabel className="text-white text-xs uppercase tracking-widest">{content.contact.form.type}</FormLabel>
                            <FormControl>
                              <Input placeholder={content.contact.form.typePlaceholder} {...field} className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground/30 focus:border-primary/50 transition-colors h-12" />
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
                          <FormLabel className="text-white text-xs uppercase tracking-widest">{content.contact.form.message}</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder={content.contact.form.messagePlaceholder}
                              className="min-h-[120px] bg-white/5 border-white/10 text-white placeholder:text-muted-foreground/30 focus:border-primary/50 resize-none transition-colors"
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
                      className="w-full h-12 text-lg bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_rgba(140,82,255,0.3)] hover:shadow-[0_0_30px_rgba(140,82,255,0.5)] active:scale-[0.98] transition-all duration-300 font-bold"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          {content.common.sending}
                        </>
                      ) : (
                        content.contact.form.submit
                      )}
                    </Button>
                  </form>
                </Form>
              </div>

              {/* Sidebar Info */}
              <div className="space-y-8 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-12">
                <div className="group">
                  <h4 className="text-primary text-xs font-bold uppercase tracking-widest mb-4">Canali Diretti</h4>
                  <div className="space-y-4">
                    <a href={`mailto:${content.contact.info.email}`} className="block text-white hover:text-primary transition-colors text-sm font-medium">
                      {content.contact.info.email}
                    </a>
                    <a href={`tel:${content.contact.info.phone}`} className="block text-white hover:text-primary transition-colors text-sm font-medium">
                      {content.contact.info.phone}
                    </a>
                  </div>
                </div>

                <div>
                  <h4 className="text-primary text-xs font-bold uppercase tracking-widest mb-4">Base Operativa</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {content.contact.info.location}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <p className="text-xs text-muted-foreground italic leading-relaxed">
                    {language === "it" 
                      ? "Le consulenze vengono svolte via Google Meet o WhatsApp Video per massimizzare l'efficienza."
                      : "Consultations are held via Google Meet or WhatsApp Video to maximize efficiency."}
                  </p>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
