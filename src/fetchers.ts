export async function fetchOverview() {
    const res = await fetch("data.json");
    return res.json();
}
