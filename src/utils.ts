import { BASE } from "./consts";

export const getLink = (path: string) =>
  `/${BASE}${path}`.replace(/\/\//g, "/");
