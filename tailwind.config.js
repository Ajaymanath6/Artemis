/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
    './node_modules/flowbite/**/*.js', // add this line
  ],
  // theme: {
  //   extend: {
  //     // Design System Colors with Usage Guidelines
  //     colors: {
  //       // === BRAND COLOR ===
  //       // Primary brand color for main CTAs, primary buttons, active states
  //       'brand': '#2F55D9',
        
  //       // === TEXT COLORS ===
  //       // Text Strong: Primary text, headings, body content, form labels - ensures prominence and legibility
  //       'text-strong': '#030B26',
  //       // Text Weak: Secondary text to make it less prominent than primary text
  //       'text-weak': '#353D59',
        
  //       // === STROKE COLORS ===
  //       // Stroke Strong: Non-decorative borders on interface elements like form input fields, also used for icons
  //       'stroke-strong': '#69718C',
  //       // Stroke Weak: Decorative borders like dividing lines that aren't critical to identifying interface elements
  //       'stroke-weak': '#ADB4CC',
        
  //       // === FILL COLORS ===
  //       // Fill: Help differentiate components like tags or badges that sit on the base background
  //       'fill': '#E6E8F2',
        
  //       // === BLUE VARIANTS ===
  //       // Blue Text Strong: Clickable text, links, brand-colored text elements
  //       'blue-text-strong': '#2F55D9',
  //       // Blue Text Weak: Secondary blue text, inactive blue elements
  //       'blue-text-weak': 'rgba(47, 85, 217, 0.8)',
  //       // Blue Stroke Strong: Blue borders, focus rings, active element borders
  //       'blue-stroke-strong': 'rgba(47, 85, 217, 0.2)',
  //       // Blue Fill: Very subtle blue backgrounds, hover states, selected states
  //       'blue-fill': 'rgba(47, 85, 217, 0.05)',

  //       // === SEMANTIC ALIASES FOR AI UNDERSTANDING ===
  //       // Primary content text (alias for text-strong)
  //       'content-primary': '#030B26',
  //       // Secondary content text (alias for text-weak)  
  //       'content-secondary': '#353D59',
  //       // Form field borders (alias for stroke-strong)
  //       'border-input': '#69718C',
  //       // Divider lines (alias for stroke-weak)
  //       'border-divider': '#ADB4CC',
  //       // Component backgrounds (alias for fill)
  //       'bg-component': '#E6E8F2',
  //       // Interactive elements (alias for brand)
  //       'interactive': '#2F55D9',
  //       // Hover states (alias for blue-fill)
  //       'hover-bg': 'rgba(47, 85, 217, 0.05)',
  //       // Focus rings (alias for blue-stroke-strong)
  //       'focus-ring': 'rgba(47, 85, 217, 0.2)',
  //     },
      
  //     // Custom font family - Open Sans as primary
  //     fontFamily: {
  //       sans: ['Open Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
  //       mono: ['SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Consolas', 'Courier New', 'monospace'],
  //     },
      
  //     // Custom container width
  //     maxWidth: {
  //       'custom': '57.5rem',
  //     },
      
  //     // Custom spacing
  //     spacing: {
  //       '18': '4.5rem',
  //       '88': '22rem',
  //     },
  //   },
  // },
  plugins: [
    require('flowbite/plugin'), // add this line
  ],
};

