import { BASE_URL, BASE } from "./consts";

export const getLink = (path: string) =>
  `${BASE_URL}/${BASE}${path}`.replace("//", "/");
