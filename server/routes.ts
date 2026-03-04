import type { Express } from "express";
import { type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema } from "@shared/schema";

import { supabase } from "@/lib/supabase";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<void> {
  app.post("/api/lead", async (req, res) => {
    try {
      const { name, email, phone, business_type, message } = req.body;

      const { error } = await supabase
        .from("leads")
        .insert([
          {
            name,
            email,
            phone,
            business_type,
            message
          }
        ]);

      if (error) throw error;

      res.json({ success: true });
    } catch (error: any) {
      console.error("Supabase error:", error);
      res.status(500).json({ message: error.message || "Failed to save lead" });
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
