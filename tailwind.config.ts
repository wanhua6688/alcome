import type { Config } from "tailwindcss";

export default {
    darkMode: "class",
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        ycp: {
          primary: '#096159', // 新的主色 - 深青绿色
          secondary: '#0a7c72', // 主色的浅变体
          dark: '#212121', // 深黑色
          gray: '#5a5a5a', // 中灰色
          lightGray: '#f2f2f2', // 浅灰色背景
          accent: '#4caf93', // 辅助绿色
          
          // 保留旧的颜色键但更新颜色值，为了兼容性
          blue: '#096159', // 原来的blue现在是主色
          lightBlue: '#0a7c72', // 原来的lightBlue现在是次要色
          brown: '#2d2d2d', // 改为深灰黑色
          beige: '#3a3a3a', // 改为中灰黑色
          lightBeige: '#e0e0e0', // 改为浅灰色
          lightBlue2: '#c8e6e2', // 主色的极浅变体
          lightBrown: '#b4b4b4', // 改为中灰色
          accent1: '#4caf93', // 辅助绿色
          accent2: '#096159', // 回到主色
          accent3: '#454545', // 中灰黑色
        },
        'ycp-primary': '#096159',
        'ycp-secondary': '#0e8577',
        'ycp-dark': '#242424',
        'ycp-gray': '#6b7280',
        'ycp-light': '#f5f5f7',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      animation: {
        'scroll-slow': 'scrollX 30s linear infinite',
      },
      keyframes: {
        scrollX: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
