// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Discover your Life Path";
export const SITE_DESCRIPTION = "Welcome to my website!";

export const ENV =
  process.env.NODE_ENV || import.meta.env.NODE_ENV || "development";
export const BASE_URL =
  process.env.URL || import.meta.env.URL || "http://localhost:4321";
export const BASE = process.env.BASE || import.meta.env.BASE || "";

console.log(
  process.env.URL,
  import.meta.env.URL,
  process.env.BASE,
  import.meta.env.BASE
);
