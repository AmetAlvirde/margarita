import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // App directory
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Use absolute path directly to the component file
    path.join(
      __dirname,
      "../../packages/ui/src/components/project-card/index.tsx"
    ),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
