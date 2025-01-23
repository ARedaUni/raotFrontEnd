import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zugtkkueffqrbdxcdlgv.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1Z3Rra3VlZmZxcmJkeGNkbGd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc2NDAxMDgsImV4cCI6MjA1MzIxNjEwOH0.tElLLh5rbcrB1EfJWCt_vfQr4GD5HtCg3rgGuepL8v0'

export const supabase = createClient(supabaseUrl, supabaseKey) 