import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error('Missing Supabase environment variables');
}

// Server-side Supabase client with service role key (full access)
export const supabase = createClient(supabaseUrl, supabaseServiceKey);
