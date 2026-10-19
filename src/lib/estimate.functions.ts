import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";

export const estimateSchema = z.object({
  name: z.string().trim().min(1).max(100),
  phone: z.string().trim().regex(/^[\d\s()+.-]{7,30}$/),
  email: z.string().trim().email().max(255),
  service: z.enum(["HVAC Repair", "HVAC Tune-Up", "Indoor Air Quality", "Excavation", "Other"]),
  contactMethod: z.enum(["Phone", "Email"]),
  message: z.string().trim().min(10).max(2000),
});

export const submitEstimate = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => estimateSchema.parse(d))
  .handler(async ({ data }) => {
    const key = process.env["SUPABASE_PUBLISHABLE_KEY"]!;
    const sb = createClient<Database>(process.env["SUPABASE_URL"]!, key, {
      auth: { persistSession: false, autoRefreshToken: false },
      global: {
        fetch: (input, init) => {
          const h = new Headers(init?.headers);
          if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) h.delete("Authorization");
          h.set("apikey", key);
          return fetch(input, { ...init, headers: h });
        },
      },
    });
    const { error } = await sb.from("estimate_requests").insert({
      name: data.name,
      phone: data.phone,
      email: data.email,
      service: data.service,
      contact_method: data.contactMethod,
      message: data.message,
    });
    if (error) {
      console.error("estimate insert failed", error.message);
      return { ok: false as const };
    }
    return { ok: true as const };
  });
