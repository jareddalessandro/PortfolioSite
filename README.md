# Personal Portfolio Site

A modern, dark-themed personal portfolio built with React, Vite, Tailwind CSS v4, and Motion.

## Getting Started

```bash
npm install
npm run dev
```

Visit http://localhost:5173

## Customization

### 1. Personal Information
Edit the data files in `src/data/`:
- `personal.js` - Name, bio, email, social links
- `skills.js` - Skill categories and technologies
- `experience.js` - Work history
- `projects.js` - Portfolio projects with image galleries
- `education.js` - Academic background

### 2. Project Images
Add screenshots for your projects:

1. Place images in `public/projects/` folder (create if doesn't exist)
2. Update `src/data/projects.js`:

```javascript
{
  id: 1,
  title: 'TaskFlow',
  description: '...',
  tech: ['React', 'Node.js'],
  github: 'https://github.com/...',
  demo: null, // Set to null if domain expired
  images: [
    '/projects/taskflow-1.png',
    '/projects/taskflow-2.png',
    '/projects/taskflow-3.png',
  ],
  gradient: 'from-cyan-500/20 to-blue-500/20', // Fallback if no images
}
```

**Features:**
- Multiple images per project
- Automatic slideshow with navigation arrows
- Dot indicators for image count
- Smooth transitions
- Falls back to gradient if no images provided

### 3. Resume
Replace `public/resume.pdf` with your actual resume PDF.

### 4. Contact Form
Create a `.env` file (see `.env.example`) with your [EmailJS](https://emailjs.com) credentials:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 5. Colors & Fonts
Customize the theme in `src/index.css` under the `@theme` block.

## Build for Production

```bash
npm run build
```

Output will be in `dist/` folder.

## Tech Stack

- **React 18** - UI library
- **Vite 6** - Build tool and dev server
- **Tailwind CSS v4** - Utility-first styling (no config file)
- **Motion v12+** - Scroll animations
- **EmailJS** - Contact form
- **react-icons** - Icon library
