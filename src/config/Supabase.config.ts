import { createClient } from "@supabase/supabase-js";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SUPABASE_URL = "https://wxhwhgcrqoukadvfxyji.supabase.co"; // Replace with your Supabase URL
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4aHdoZ2NycW91a2FkdmZ4eWppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA0MDAwMzgsImV4cCI6MjA1NTk3NjAzOH0.RS2V3WHugt4mOPpk3vT_-r7HUWtFMolB3wWk0wL2RhI"; // Replace with your Supabase Anon Key

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false, // Not needed for React Native
  },
});
