import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/elements/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            hyphens: {
                auto: 'auto',
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: '2rem',
                    sm: '2rem',
                },
            },
            colors: {
                pwV2White:"#ffffff",
                pwV2DarkGreen: "#014751",
                pwV2DarkBlue:"#0F282F",
                pwV2LimeGreen: "#00D37F",
                pwV2Purple: "#A391FF",
            },
            fontSize: {
                pwV2Font16:'clamp(0.875rem, 0.875rem + 0.5vw, 1rem)',
                pwV2Font20: 'clamp(1rem, 1rem + 1vw, 1.25rem)',
                pwV2Font24: 'clamp(1rem, 1rem + 1vw, 1.5rem)',
                pwV2Font28: 'clamp(20px, 20px + 0.5vw, 28px)',
                pwV2Font32:'clamp(1.25rem, 1.25rem + 1.5vw, 2rem)',
                pwV2Font36:'clamp(1.5rem, 1.5rem + 2vw, 2.25rem)',
                pwV2Font40:'clamp(1.5rem, 1.5rem + 2.5vw, 2.5rem)',
                pwV2Font48:'clamp(2rem, 2rem + 3vw, 3rem)',
                pwV2Font64:'clamp(2rem, 2rem + 1vw, 4rem)',
            },
        },
    },
    plugins: [],
};
export default config;
