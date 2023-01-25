import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseKey = process.env.REACT_APP_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)
const supabaseCode = guikhi87ytr7476ygvhfcugiuugu8y8574ugfhhrrf

export default supabase;