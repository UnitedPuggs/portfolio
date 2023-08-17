import { supabase } from '$lib/supabaseClient'

export async function load() {
    const { data: projects, error } = await supabase
    .from('projects')
    .select('*')

    if(error)
        return {"load": error}
    
    return {project: projects};
}