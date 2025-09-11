# Angular 19 + Flowbite + Tailwind CSS Project

This project demonstrates the integration of Angular 19, Flowbite components, and Tailwind CSS for modern web development.

## 🚀 What's Included

- **Angular 19**: Latest Angular framework with standalone components
- **Tailwind CSS 3.4.17**: Utility-first CSS framework
- **Flowbite 2.5.2**: Beautiful UI components built with Tailwind CSS
- **TypeScript Support**: Full TypeScript configuration
- **Development Tools**: ESLint and Prettier plugins for Tailwind CSS

## 📦 Installation & Setup

The project is already set up and ready to use! All dependencies have been installed and configured.

## 🏃‍♂️ Running the Project

```bash
# Start the development server
npm start

# Or use ng serve
ng serve
```

The application will be available at `http://localhost:4200`

## 🛠 Project Structure

```
angular-flowbite-project/
├── src/
│   ├── app/
│   │   ├── app.component.ts      # Main component with Flowbite initialization
│   │   └── app.component.html    # Example UI with Flowbite components
│   └── styles.css                # Global styles with Tailwind directives
├── tailwind.config.js            # Tailwind configuration with Flowbite
└── package.json                  # Dependencies and scripts
```

## 🎨 Features Demonstrated

### Components Used
- **Cards**: Responsive grid layout with information cards
- **Alerts**: Success notification with icons
- **Buttons**: Primary and secondary button styles
- **Modal**: Interactive modal dialog
- **Typography**: Headings and text styling

### Tailwind Classes Used
- Layout: `grid`, `flex`, `container`, `mx-auto`
- Spacing: `p-4`, `m-4`, `gap-6`, `space-y-4`
- Colors: `bg-gray-50`, `text-gray-900`, `bg-primary-600`
- Responsive: `md:grid-cols-3`, `lg:text-xl`
- Interactive: `hover:bg-gray-100`, `focus:ring-4`

## 🔧 Configuration Details

### Tailwind CSS Configuration
- Content paths include Angular templates (`./src/**/*.{html,ts}`)
- Flowbite plugin enabled
- Custom color palette with primary and secondary colors
- Node modules path included for Flowbite components

### Angular Configuration
- Flowbite initialization in `ngOnInit()` lifecycle hook
- Standalone component architecture
- Routing enabled for future development

### Development Tools
- ESLint plugin for Tailwind CSS class ordering
- Prettier plugin for automatic class sorting
- PostCSS and Autoprefixer for CSS processing

## 📝 Usage Examples

### Adding New Flowbite Components

1. **Button Example:**
```html
<button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">
  Click me
</button>
```

2. **Alert Example:**
```html
<div class="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50" role="alert">
  <span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
</div>
```

3. **Modal Trigger:**
```html
<button data-modal-target="my-modal" data-modal-toggle="my-modal" type="button">
  Open Modal
</button>
```

### Custom Styling
You can extend the Tailwind configuration in `tailwind.config.js` to add custom colors, fonts, or spacing:

```javascript
theme: {
  extend: {
    colors: {
      custom: {
        500: '#your-color-here'
      }
    }
  }
}
```

## 🚀 Next Steps

1. **Add Routing**: Create new components and configure routes
2. **State Management**: Add NgRx or Akita for complex state
3. **API Integration**: Add HttpClient for backend communication
4. **Testing**: Set up unit tests with Jasmine/Karma
5. **Build Optimization**: Configure production build settings

## 📚 Resources

- [Angular Documentation](https://angular.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Flowbite Components](https://flowbite.com/docs/components/)
- [Angular CLI](https://angular.io/cli)

## 🐛 Troubleshooting

If you encounter any issues:

1. **Flowbite components not working**: Ensure `initFlowbite()` is called in `ngOnInit()`
2. **Tailwind classes not applying**: Check that `@tailwind` directives are in `styles.css`
3. **Build errors**: Run `npm install` to ensure all dependencies are installed
4. **Modal not opening**: Verify modal HTML structure and data attributes

Happy coding! 🎉
