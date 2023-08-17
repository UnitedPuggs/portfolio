import { s as supabase } from "../../../chunks/supabaseClient.js";
import { j as json } from "../../../chunks/index.js";
async function GET() {
  const { data, error } = await supabase.storage.from("portfolio").list("images", { offset: 0 });
  if (data)
    return json({ images: data });
  if (error)
    console.log(error);
}
export {
  GET
};
