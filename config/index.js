const dev = process.env.NODE_ENV !== "production";

export const server = process.env.API_URL || (dev ? "http://localhost:3000" : "https://yourwebsite.com");
