<<<<<<< HEAD
import { supabase } from '$lib/supabase.js'
=======
export const prerender = true;
import { supabase } from '$lib/supabaseClient.js'
>>>>>>> 6d14c589f20fba6650e64f15bd72ca18e6f277ab

export async function load() {
    const { data: images, error } = await supabase
    .from('images')
    .select('url')

    if(error)
        return { "load": error }

<<<<<<< HEAD
    return { images: images}
=======
    return { images: images }
>>>>>>> 6d14c589f20fba6650e64f15bd72ca18e6f277ab
}