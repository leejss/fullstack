import fetcher from "./fetcher";

export const auth = async (
  mode: "signin" | "signup",
  body: { email: string; password: string }
) => {
  const response = await fetcher(mode, body);
  const json = await response.json();
  if (json.error) throw new Error(json.error);
  return json;
};
