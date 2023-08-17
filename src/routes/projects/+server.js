import { supabase } from '$lib/supabaseClient'

export async function GET() {
    const { data: projects, error } = await supabase
    .from('projects')
    .select('*')

    if(error)
        return new Response(JSON.stringify({"message": error}, {status: 500}))
    
    return new Response(JSON.stringify({projects}, {status: 200}))
}