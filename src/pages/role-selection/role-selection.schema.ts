import { Role } from "@/constants";
import z from "zod";

export const update_role_schema = z.object({
  role: z.enum(Object.values(Role)).optional(),
});
