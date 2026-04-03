const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://dummyjson.com';

export async function fetchApi(endpoint: string){
    const res = await fetch(`${BASE_URL}${endpoint}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch Data: ${res.status}`);
    }
    return res.json();
}