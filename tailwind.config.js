// tailwind.config.js

export default {
  // ⭐️ 1. Tailwind가 스캔할 파일들
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // ⭐️ 2. 다크 모드 설정
  darkMode: "class",
  theme: {
    // ⭐️ 3. 기존 테마 설정값
    extend: {
      colors: {
        "primary": "#13a4ec",
        "background-light": "#f6f7f8",
        "background-dark": "#101c22",
      },
      fontFamily: {
        "display": ["Space Grotesk", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
    },
  },
  // ⭐️ 4. Tailwind 플러그인 (container-queries)
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'), // 👈 container-queries
  ],
}