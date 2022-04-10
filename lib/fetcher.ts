// Get JSON response
export default async function fetcher<T = any>(
  url: string,
  data?: unknown
): Promise<T> {
  const res = await fetch(`${window.location.origin}/api/${url}`, {
    method: data ? "POST" : "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
}
