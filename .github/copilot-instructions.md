# GitHub Copilot Instructions for Digital Currency Kid$ Website

## Project Overview
This is a React-based landing page for "Digital Currency Kid$" - a cryptocurrency-themed website featuring a crew of characters (Goldie, Thic Silver, Big Bronze, and Dimez). The site is built with Vite, React, and Tailwind CSS.

## Tech Stack
- **Framework**: React 18.2.0
- **Build Tool**: Vite 4.5.0
- **Styling**: Tailwind CSS 3.3.3 with PostCSS
- **Package Manager**: npm

## Project Structure
```
/
├── src/
│   ├── App.jsx         # Main application component
│   ├── main.jsx        # Application entry point
│   └── index.css       # Global styles and Tailwind imports
├── public/             # Static assets (images)
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind configuration
└── postcss.config.js   # PostCSS configuration
```

## Development Commands
- `npm install` - Install dependencies
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Code Style & Conventions

### React Components
- Use functional components with hooks
- Default exports for main components
- Use JSX file extension (.jsx) for React components
- Components should be self-contained in single files for this simple project

### Styling
- Use Tailwind CSS utility classes for styling
- Custom font: 'Rubik Wet Paint' is used for graffiti-style text (applied via `.graffiti` class)
- Color scheme: Dark theme with zinc-950 background, purple-400 for headers, green-400 for section titles
- Responsive design: Use Tailwind's responsive modifiers (md:, lg:, etc.)

### File Organization
- Keep all source files in `/src` directory
- Static assets go in `/public` directory
- Configuration files at root level

## Important Notes
- This is a static website with no backend or API calls
- Images are referenced from `/public` directory (accessed as `/image.png` in code)
- The site uses a dark theme with street/graffiti aesthetic
- Target audience: Adults (crypto enthusiasts)
- Footer includes disclaimer: "Adults only. Not financial advice. DYOR."

## Build & Deploy
- The project is configured for Azure Web Apps deployment
- Production build outputs to `/dist` directory
- Build artifacts and node_modules should never be committed (see .gitignore)

## When Making Changes
- Maintain the street/graffiti aesthetic and dark theme
- Keep the responsive grid layout for character cards
- Ensure all changes work with Vite's fast refresh
- Test in development mode before building
- Preserve the existing color scheme and visual hierarchy

## Linting & Testing
- **No linter currently configured** - Code style is maintained through manual review
- **No test framework currently set up** - This is a simple static site without automated tests
- **Build verification** - Run `npm run build` to ensure no build errors
- **Manual testing** - Use `npm run dev` to test changes in the browser

## Troubleshooting

### Build Issues
- If build fails, check that all dependencies are installed: `npm install`
- Clear Vite cache if seeing stale content: `rm -rf node_modules/.vite`
- Ensure Node.js version matches package.json requirements (20.x recommended)

### Development Server Issues
- Port conflicts: Vite uses port 5173 by default, check if port is available
- HMR not working: Clear browser cache and restart dev server
- Images not loading: Verify images exist in `/public` directory

### Style Issues
- Tailwind classes not working: Ensure PostCSS is configured correctly
- Custom font not loading: Check browser console for font loading errors
- Build output is large: This is normal for development; production build is optimized

## Performance Considerations
- Images in `/public` are served as-is - optimize images before adding them
- Tailwind CSS is purged in production to reduce bundle size
- Vite automatically code-splits for optimal loading
- Consider lazy loading if adding more sections or images

## Error Handling
- This is a static site with no dynamic data fetching, so minimal error handling is needed
- Focus on handling missing images gracefully (consider alt text)
- Ensure responsive design works across all viewport sizes
