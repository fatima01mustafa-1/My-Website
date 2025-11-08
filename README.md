# Fatima Mustafa - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Performance Optimized**: Built with Next.js 14 and optimized for speed
- **SEO Ready**: Proper meta tags and structured data
- **Accessible**: WCAG compliant with proper ARIA attributes
- **Interactive**: Smooth scrolling navigation and hover effects
- **Contact Form**: Functional contact form with validation

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Stylus modules
- **UI Components**: Radix UI primitives
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **State Management**: Zustand

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/fatimamustafa/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
# Copy the example environment file
cp env.example .env.local

# Edit .env.local with your actual information
# Update contact details, social media links, etc.
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3005](http://localhost:3005) in your browser.

## 🏗️ Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/            # React components
│   ├── navigation.tsx    # Navigation component
│   ├── hero.tsx          # Hero section
│   ├── about.tsx         # About section
│   ├── projects.tsx      # Projects showcase
│   ├── contact.tsx       # Contact form
│   └── footer.tsx        # Footer component
├── lib/                  # Utility functions
│   └── utils.ts          # Common utilities
└── public/               # Static assets
```

## 🎨 Customization

### Environment Variables
First, update your `.env.local` file with your actual information:
- Contact details (email, phone, location)
- Social media profiles
- Analytics tracking IDs (optional)

### Personal Information
Update the following files with your information:
- `components/hero.tsx` - Hero section content
- `components/about.tsx` - About section and skills
- `components/projects.tsx` - Project portfolio
- `components/contact.tsx` - Contact information
- `app/layout.tsx` - SEO metadata

### Styling
- Global styles: `app/globals.css`
- Component styles: `components/*.module.styl`
- Tailwind config: `tailwind.config.js`

### Colors
The color scheme can be customized in `app/globals.css` by updating the CSS custom properties.

## 📱 Sections

1. **Hero**: Introduction and call-to-action
2. **About**: Skills, experience, and statistics
3. **Projects**: Portfolio showcase with filtering
4. **Contact**: Contact form and social links
5. **Footer**: Additional links and information

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
```bash
npm run build
npm start
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Contact

Fatima Mustafa - [@fatimamustafa](https://twitter.com/fatimamustafa)

Project Link: [https://github.com/fatimamustafa/portfolio](https://github.com/fatimamustafa/portfolio)
