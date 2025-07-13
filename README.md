# 🌟 Dhananjay's Portfolio

A modern, responsive portfolio website built with React, TypeScript, and deployed on Vercel. Showcasing projects, skills, and professional experience with a clean, interactive design.

## 🚀 Live Demo

**Live Site:** [portfolio-dhananjay-pi.vercel.app/](https://portfolio-dhananjay-pi.vercel.app/)

## ✨ Features

- **Modern Design** - Clean, professional UI with smooth animations
- **Responsive Layout** - Works perfectly on desktop, tablet, and mobile
- **Interactive Components** - Engaging user experience with Framer Motion
- **Contact Form** - Functional contact form with API integration
- **Project Showcase** - Detailed project cards with live demos and source code
- **Skills Section** - Visual representation of technical skills
- **Performance Optimized** - Fast loading with Vite build system
- **TypeScript** - Type-safe development for better code quality

## 🛠️ Tech Stack

### Frontend

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe JavaScript for better development experience
- **Vite** - Lightning-fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Framer Motion** - Smooth animations and transitions
- **Radix UI** - Accessible, unstyled UI components
- **React Hook Form** - Performant forms with easy validation
- **Wouter** - Minimalist routing for React

### Backend & APIs

- **Vercel Serverless Functions** - API endpoints for contact form
- **Node.js** - JavaScript runtime for server-side logic

### Development Tools

- **ESBuild** - Fast JavaScript bundler
- **PostCSS** - CSS processing with autoprefixer
- **Cross-env** - Cross-platform environment variables

## 📁 Project Structure

```
portfolio/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions
│   │   └── App.tsx        # Main application component
├── api/                   # Vercel serverless functions
│   ├── hello.ts          # Test API endpoint
│   └── contact.ts        # Contact form handler
├── shared/               # Shared types and schemas
├── attached_assets/      # Project images and assets
├── dist/                # Build output directory
├── vercel.json          # Vercel deployment configuration
├── vite.config.ts       # Vite build configuration
└── tailwind.config.ts   # Tailwind CSS configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5000
   ```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run check` - Type check with TypeScript

## 🌐 API Endpoints

- `GET /api/hello` - Test endpoint to verify API functionality
- `POST /api/contact` - Submit contact form data

### Contact API Usage

```javascript
// POST /api/contact
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'd like to get in touch!"
}

// Response
{
  "success": true,
  "message": "Thank you for your message!"
}
```

## 🚀 Deployment

This project is configured for easy deployment on **Vercel**:

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Deploy portfolio"
   git push origin main
   ```

2. **Deploy to Vercel**

   ```bash
   npm i -g vercel
   vercel --prod
   ```

3. **Automatic deployments** - Connect your GitHub repo to Vercel for automatic deployments on every push

### Environment Variables

No environment variables required for basic functionality. The contact form works out of the box with Vercel serverless functions.

## 🎨 Customization

### Updating Content

- **Projects** - Edit project data in `client/src/data/projects.ts`
- **Skills** - Update skills in `client/src/data/skills.ts`
- **Personal Info** - Modify personal information in component files
- **Styling** - Customize colors and themes in `tailwind.config.ts`

### Adding New Sections

1. Create component in `client/src/components/`
2. Add to main `App.tsx` file
3. Update navigation if needed

## 🔧 Configuration

### Vite Configuration

The project uses Vite for fast development and building. Configuration is in `vite.config.ts`.

### Tailwind CSS

Styling system configured in `tailwind.config.ts` with custom colors and animations.

### TypeScript

Type checking configured in `tsconfig.json` for better development experience.

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Email** : [nerkarr.dhananjay@gmail.com](nerkarr.dhananjay@gmail.com)

**GitHub Link:** [https://github.com/Dhananjay1509/portfolio](https://github.com/Dhananjay1509/portfolio)

**Live Demo:** [portfolio-dhananjay-pi.vercel.app/](https://portfolio-dhananjay-pi.vercel.app/)

---

⭐ **If you found this project helpful, please give it a star!** ⭐
