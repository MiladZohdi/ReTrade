import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://fhpjqtdzftqarmmqcokt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZocGpxdGR6ZnRxYXJtbXFjb2t0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA0NzkwNTUsImV4cCI6MjA1NjA1NTA1NX0.SjdzLGwQR-46rMlDVcy5ILp1eAqEv2T4x3asQ-RLG9E";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
