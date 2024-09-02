import { Black_And_White_Picture } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white:'#fff',
        black:'#313131',
        yellow:'#fdd201',
        green:'#00FF00',
        blue:'#0000FF',
        purple:'#800080',
      },
      logo:{
        blogo: "url('/images/logo.png')",
      },
      backgroundImage: {
        pageBg: "url('/images/bg.png')",
      },
    },
  },
  plugins: [],
};
export default config;
