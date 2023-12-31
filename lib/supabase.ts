import { createClient } from "@supabase/supabase-js";

import { Database } from "../src/schema";

export const supabase = createClient<Database>(
  import.meta.env.VITE_SUPABASE_API_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);
