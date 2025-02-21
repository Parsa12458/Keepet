import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://dwilepsnhsoiruhdrcwk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR3aWxlcHNuaHNvaXJ1aGRyY3drIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAxNDE2MjgsImV4cCI6MjA1NTcxNzYyOH0.Zsdyluitb35rlWM9hxiyvdjvqJpsTCsJsH1uviKJ8qg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
