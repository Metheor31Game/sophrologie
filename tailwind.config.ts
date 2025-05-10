import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'vert-clair': '#A8D5BA',      // Vert clair : Nature, Croissance, Paix
        'beige-sable': '#F1E0C6',     // Beige sable : Calme, Terre
        'marron-doux': '#B08D57',     // Marron doux : Chaleur, Ancrage, Stabilité
        'blanc-casse': '#F9F5EB',     // Blanc cassé : Légèreté, Sérénité
        'vert-fonce': '#498954',      // Vert foncé : Profondeur, Confiance, Équilibre
        'vert-foncev2': '#2E6A47',      // Vert foncé : Profondeur, Confiance, Équilibre

      },
    },
  },
  plugins: [],
} satisfies Config;
