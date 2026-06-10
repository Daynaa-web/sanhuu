import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'
const SUPABASE_URL = "https://vyiowftonbhuzthrerjq.supabase.co"
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5aW93ZnRvbmJodXp0aHJlcmpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5Njg5NjcsImV4cCI6MjA5NjU0NDk2N30.UXSjdZhR3PZcPNty6pq_W7vtYXUsQmETFSyYXLTc2V0"

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

if (supabase.auth){
    console.log("Холбогдсон байна.")
    console.log(supabase.auth)
} else{
    console.log("холбогдоогүй байна.")
}