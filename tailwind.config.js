export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#07080F',
        frame: '#11141F',
        glow: '#63B3FF',
        neon: '#7C3AED',
        accent: '#46E3FF',
      },
      boxShadow: {
        glow: '0 0 70px rgba(99, 179, 255, 0.18)',
        soft: '0 20px 80px rgba(0,0,0,0.55)',
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at top, rgba(99,179,255,0.18,0.18), transparent 36%)',
        'panel-glow': 'linear-gradient(135deg, rgba(99,179,255,0.2,0.2), rgba(124,58,237,0.18,0.18))',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
