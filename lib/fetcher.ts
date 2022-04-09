// Get JSON response
export default async function fetcher(url: string, data?: unknown) {
  // Return Promose<Response>
  return fetch(`${window.location.origin}/api/${url}`, {
    method: data ? "POST" : "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}