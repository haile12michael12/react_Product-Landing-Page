import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

// Newsletter subscription schema
const newsletterSchema = z.object({
  email: z.string().email()
});

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.post("/api/newsletter", async (req, res) => {
    try {
      // Validate the request body
      const validation = newsletterSchema.safeParse(req.body);
      
      if (!validation.success) {
        return res.status(400).json({
          success: false,
          error: "Invalid email address"
        });
      }
      
      const { email } = validation.data;
      
      // Store the subscription
      const subscription = await storage.addSubscription(email);
      
      res.status(200).json({
        success: true,
        data: subscription
      });
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      res.status(500).json({
        success: false,
        error: "Failed to process subscription"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
