import { NETWORK_ERR } from "./constants";


export async function fetchExchange() {
  const response = await fetch(`${import.meta.env.VITE_SERVER_URL}data`);
  if (!response.ok) {
    throw new Error(NETWORK_ERR);
  }
  return response.json();
}

  