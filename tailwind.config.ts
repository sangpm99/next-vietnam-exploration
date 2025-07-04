import tailwindcssLogical from "tailwindcss-logical"
import type { Config } from "tailwindcss"

import tailwindPlugin from "./src/@core/tailwind/plugin"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,css}"],
  corePlugins: {
    preflight: false
  },
  plugins: [tailwindcssLogical, tailwindPlugin],
  theme: {
    extend: {}
  },
  important: true
}

export default config
