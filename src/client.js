import { createClient } from "@supabase/supabase-js";

const URL = "https://cvjjxclhcyaahubhffpp.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2amp4Y2xoY3lhYWh1YmhmZnBwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgzNDE1MTgsImV4cCI6MjAxMzkxNzUxOH0.0pCTCUSl46EpPEUD2-eQm45UMgzsKaPGzMS4zTdP5wM";

export const supabase = createClient(URL, API_KEY);
