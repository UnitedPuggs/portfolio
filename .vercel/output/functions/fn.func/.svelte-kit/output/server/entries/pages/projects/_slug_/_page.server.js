import { s as supabase } from "../../../../chunks/supabaseClient.js";
async function load({ params }) {
  let { data: projects, error } = await supabase.from("projects").select("*").eq("slug", params.slug);
  if (error)
    return { "load": error };
  return { project: projects };
}
export {
  load
};
