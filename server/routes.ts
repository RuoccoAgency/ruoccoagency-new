import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema } from "@shared/schema";

export async function registerRoutes(
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertLeadSchema.parse(req.body);
      const lead = await storage.createLead(data);
      res.json(lead);
    } catch (error) {
      res.status(400).json({ message: "Invalid form data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
