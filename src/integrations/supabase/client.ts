// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://rezukwdyhsnlppeqwlmi.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJlenVrd2R5aHNubHBwZXF3bG1pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAwMDI5MDYsImV4cCI6MjA1NTU3ODkwNn0.386u43LIvchjJR9KgftSnTY3I6xgxwo2A-5i9q55fPg";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);