export const prerender = true;
import { supabase } from '$lib/supabaseClient.js'

export async function load() {
    const { data: images, error } = await supabase
    .from('images')
    .select('url')

    if(error)
        return { "load": error }

    return { images: images }
}