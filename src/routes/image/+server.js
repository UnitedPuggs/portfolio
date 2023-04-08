import { supabase } from '$lib/supabaseClient'
import { json } from "@sveltejs/kit"

export async function GET() {
    const { data, error } = await supabase
        .storage
        .from('portfolio')
        .list('images', {offset: 0})
        
    if(data)
        return json({ images: data })

    if(error)
        console.log(error)
}