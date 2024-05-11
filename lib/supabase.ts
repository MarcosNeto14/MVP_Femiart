import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://pljodptdixpyhnsxplmo.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsam9kcHRkaXhweWhuc3hwbG1vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU0MzgwOTAsImV4cCI6MjAzMTAxNDA5MH0.5ruJ0Hwodm6hpabzS9vUdmGe0SDMIbdn36qmqOyBpAU"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})