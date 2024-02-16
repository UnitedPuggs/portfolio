import { supabase } from '$lib/supabase.js'

export async function load() {
    const { data: images, error } = await supabase
    .from('images')
    .select('url')

    if(error)
        return { "load": error }

    return { images }
}