# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases my skills, projects, and professional experience with a clean, professional design.

## 🚀 Live Demo

https://portfolio-website-eight-neon-18.vercel.app/ <!-- Replace with your actual deployment URL -->

## ✨ Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark/Light Mode**: Toggle between dark and light themes
- **Interactive Sections**:
  - Hero section with animated text
  - About section with skills showcase
  - Projects portfolio with detailed descriptions
  - Experience timeline
  - Contact form with validation
- **Performance Optimized**: Built with Next.js for optimal performance
- **SEO Ready**: Optimized for search engines
- **Accessibility**: WCAG compliant design

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Radix UI primitives
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
portfolio-website/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── hero-section.tsx  # Hero section
│   ├── about-section.tsx # About section
│   ├── projects-section.tsx # Projects showcase
│   ├── experience-section.tsx # Experience timeline
│   ├── skills-section.tsx # Skills showcase
│   ├── contact-section.tsx # Contact form
│   └── navigation.tsx    # Navigation component
├── public/               # Static assets
│   ├── image/           # Project images
│   └── cv.pdf           # Resume/CV
├── lib/                 # Utility functions
└── hooks/               # Custom React hooks
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Fixit123/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Personal Information
Update the following files with your information:

- `components/hero-section.tsx` - Your name, title, and introduction
- `components/about-section.tsx` - Your bio and skills
- `components/projects-section.tsx` - Your projects
- `components/experience-section.tsx` - Your work experience
- `components/contact-section.tsx` - Contact information
- `public/cv.pdf` - Your resume/CV

### Styling
- Modify `app/globals.css` for global styles
- Update Tailwind classes in components for custom styling
- Change colors in `tailwind.config.js`

### Images
- Replace images in `public/image/` with your project screenshots
- Update `public/ahmed.webp` with your profile picture

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1440px+)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

- **Netlify**: Connect your GitHub repository
- **GitHub Pages**: Use GitHub Actions for deployment
- **AWS Amplify**: Connect your repository

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

## 📞 Contact

- **Email**: your-email@example.com
- **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)
- **GitHub**: [@Fixit123](https://github.com/Fixit123)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Icons by [Lucide](https://lucide.dev/)

---

⭐ If you found this portfolio helpful, please give it a star on GitHub!
