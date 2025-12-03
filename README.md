# BertenX Portfolio Website

A modern, responsive portfolio website showcasing the work and skills of BertenX, a creative developer and digital innovator.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Interactive Navigation**: Smooth scrolling navigation with mobile hamburger menu
- **Portfolio Showcase**: Dedicated sections for projects and skills
- **Snake Game**: Classic snake game built with vanilla JavaScript
- **Contact Integration**: Social media links and email contact
- **Easter Egg**: Hidden Eduward feature for visitors to discover
- **Modern Animations**: Smooth transitions and hover effects
- **Optimized Build**: Single-file HTML output with inlined assets for maximum performance

## 🛠️ Technologies Used

- **Build Tool**: Vite
- **Frontend**: HTML5, CSS3, JavaScript (ES Modules)
- **Icons**: Font Awesome 6.0
- **Styling**: Modern CSS with custom animations and responsive design
- **Optimization**: vite-plugin-singlefile for single-file builds

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [pnpm](https://pnpm.io/) (recommended package manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/HutsaJens/Website.git
   cd Website
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

### Local Development

Start the development server:
```bash
pnpm run dev
```

The site will be available at `http://localhost:3000`

### Building for Production

Build the optimized production files:
```bash
pnpm run build
```

This will generate:
- `dist/index.html` - Main portfolio page (single-file with all assets inlined)
- `dist/snake.html` - Snake game page (single-file with all assets inlined)

### Preview Production Build

Preview the production build locally:
```bash
pnpm run preview
```

## 📁 Project Structure

```
Website/
├── index.html              # Main portfolio page
├── snake.html              # Snake game page
├── src/                    # Source files
│   ├── main.js            # Main JavaScript functionality
│   ├── style.css          # Main stylesheet
│   ├── snake.js           # Snake game logic
│   └── snake.css          # Snake game styles
├── assets/                 # Images and logos
│   ├── logo_transparant-wit.svg
│   ├── logo_transparant-groen.svg
│   ├── eduward.png
│   └── ...
├── vite.config.js          # Vite configuration (main site)
├── vite.config.snake.js    # Vite configuration (snake game)
├── package.json            # Project dependencies and scripts
├── robots.txt              # Search engine directives
└── README.md               # This file
```

## 🎮 Features Overview

### Main Portfolio
- **Hero Section**: Eye-catching introduction with logo and call-to-action
- **About Section**: Personal information and skills showcase
- **Projects Section**: Featured projects with descriptions and links
- **Contact Section**: Social media links and contact information

### Snake Game
- Classic snake gameplay with HTML5 Canvas
- Score tracking
- Smooth controls and animations
- Accessible via navigation or direct link at `/snake.html`

### Skills Highlighted
- TypeScript
- HTML/CSS
- Angular
- Node.js
- C# (.NET)
- Custom solutions ("Picobello oplossingen")

## 🎯 Easter Eggs

The website contains hidden features for visitors to discover:
- **Eduward Easter Egg**: A special surprise for curious users

## 📧 Contact

- **GitHub**: [HutsaJens](https://github.com/HutsaJens)
- **Email**: contact@bertenx.nl
- **Social Media**: Links available on the website

## 📄 License

This project is personal portfolio content. Please respect the intellectual property and contact the owner for any usage inquiries.

## 🏗️ Development Notes

### Build Process
- Uses Vite for fast development and optimized production builds
- Separate build configurations for main site and snake game due to vite-plugin-singlefile MPA limitations
- All assets are inlined in production builds for single-file deployment
- Development server runs on port 3000 to avoid service worker conflicts

### Optimizations
- Single-file HTML output with inlined CSS and JavaScript
- Asset inlining (images, fonts) for zero additional HTTP requests
- Console and debugger statements stripped in production
- CSS code-splitting disabled for single-file output
- Cross-browser compatible
- Mobile-first responsive design
- Accessibility considerations implemented

---

*Built with ❤️ by BertenX*