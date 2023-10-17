export async function fetchApi(url: string) {
  const result = await fetch(url);
  const data = await result.json();
  console.log(data);
  return data
}