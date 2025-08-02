import z from "zod";

export const availability_schema = z.array(
  z.object({
    day: z.string(),
    from: z.string(),
    to: z.string(),
  }),
);

export const add_doctor_schema = z.object({
  availability: availability_schema,
});
