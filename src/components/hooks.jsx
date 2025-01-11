"use server"

import { cookies } from "next/headers";

function useCookies(keys) {
  const cookiesStore = cookies();

  if (!keys || !Array.isArray(keys)) {
    return {};
  }

  const values = {};
  keys.forEach((key) => {
    values[key] = cookiesStore.get(key)?.value || null;
  });

  return values;
}

export default useCookies;
