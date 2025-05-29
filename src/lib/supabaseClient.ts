
import { createClient } from '@supabase/supabase-js';

// Using the actual Supabase project URL and anon key
const supabaseUrl = 'https://rezukwdyhsnlppeqwlmi.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJlenVrd2R5aHNubHBwZXF3bG1pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAwMDI5MDYsImV4cCI6MjA1NTU3ODkwNn0.386u43LIvchjJR9KgftSnTY3I6xgxwo2A-5i9q55fPg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
});

console.log('Supabase client initialized with URL:', supabaseUrl);
