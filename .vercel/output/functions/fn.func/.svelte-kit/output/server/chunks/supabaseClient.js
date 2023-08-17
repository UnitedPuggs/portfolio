import { createClient } from "@supabase/supabase-js";
const SUPABASE_URL = "https://gzytpbcundzfdkivabpf.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd6eXRwYmN1bmR6ZmRraXZhYnBmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzEyMjc2NDcsImV4cCI6MTk4NjgwMzY0N30.Yrpo6rBSrGCKrTVXb7ut35hA1GaMRlYrSEh15lPDmoo";
const supabaseUrl = SUPABASE_URL;
const supabaseKey = SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
export {
  supabase as s
};
