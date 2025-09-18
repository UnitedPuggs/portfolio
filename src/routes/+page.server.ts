import { supabase } from "$lib/supabase";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async() => {
    const { data: images, error } = await supabase
    .from('images')
    .select('url')
    .limit(1)
    .single();

    if (error) {
        console.error(`Error loading carousel images: ${error}`)
        return {}
    }
    return { images }
}