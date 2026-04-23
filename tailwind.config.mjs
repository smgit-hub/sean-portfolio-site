/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'neon-green':  '#00ff88',
        'neon-blue':   '#00b4ff',
        'neon-red':    '#ff3366',
        'surface':     '#0d0d0d',
        'surface-2':   '#141414',
        'surface-3':   '#1a1a1a',
        'border':      'rgba(255,255,255,0.07)',
      },
      fontFamily: {
        sans:  ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono:  ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'glow-pulse':    'glowPulse 3s ease-in-out infinite',
        'float':         'float 6s ease-in-out infinite',
        'gradient-x':    'gradientX 8s ease infinite',
        'scan':          'scan 8s linear infinite',
        'fade-up':       'fadeUp 0.6s ease forwards',
        'spin-slow':     'spin 20s linear infinite',
        'border-glow':   'borderGlow 3s ease-in-out infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%':      { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
        scan: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        borderGlow: {
          '0%, 100%': { boxShadow: '0 0 8px rgba(0,255,136,0.3)' },
          '50%':      { boxShadow: '0 0 20px rgba(0,255,136,0.7)' },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
      boxShadow: {
        'glow-green': '0 0 20px rgba(0,255,136,0.4)',
        'glow-blue':  '0 0 20px rgba(0,180,255,0.4)',
        'glow-red':   '0 0 20px rgba(255,51,102,0.4)',
        'glow-sm-green': '0 0 8px rgba(0,255,136,0.5)',
        'glow-sm-blue':  '0 0 8px rgba(0,180,255,0.5)',
        'glow-sm-red':   '0 0 8px rgba(255,51,102,0.5)',
      },
    },
  },
  plugins: [],
};
