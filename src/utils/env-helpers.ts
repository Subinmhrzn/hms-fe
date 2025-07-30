import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  VITE_API_URL: z.url().optional(),
  VITE_CLOUDINARY_UPLOAD_PRESET: z.string(),
});

type Env = z.infer<typeof envSchema>;

function validateEnv(): Env {
  try {
    return envSchema.parse({
      NODE_ENV: import.meta.env.NODE_ENV,
      VITE_API_URL: import.meta.env.VITE_API_URL,
      VITE_CLOUDINARY_UPLOAD_PRESET: import.meta.env
        .VITE_CLOUDINARY_UPLOAD_PRESET,
    });
  } catch (error) {
    console.error("❌ Invalid environment variables:", error);
    throw new Error("Invalid environment variables");
  }
}

export const ENV = validateEnv();

export type { Env };
