async function get_data() {
    const req = await fetch("http://localhost:5173/projects")
    const res = await req.json()
    return res;
}

export function load() {
    return get_data()
}