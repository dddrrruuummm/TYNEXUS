import type { Config } from "tailwindcss";
export default { content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"], theme: { extend: { colors: { ink: "#17201e", forest: "#163f33", citron: "#e5efad", signal: "#b73526", paper: "#ffffff" } } }, plugins: [] } satisfies Config;
