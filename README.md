# 🎬 Video Editor & Graphic Designer Portfolio

A high-performance, single-page portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. Features a dark mode aesthetic with electric lime/neon purple accents, smooth animations, and an innovative hover-to-play video gallery.

## ✨ Features

- **Hero Section**: Staggered text animations with gradient backgrounds and animated orbs
- **Skills Marquee**: Infinite auto-scrolling skills strip
- **Smart Video Gallery**: Bento-grid layout with hover-to-play functionality and fullscreen modal
- **Graphics Showcase**: Thumbnail and poster designs with hover effects
- **Contact Form**: Minimalist design with social media links
- **Fully Responsive**: Mobile-friendly design
- **Performance Optimized**: Uses React refs for efficient video playback

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install dependencies**:
```bash
npm install
```

2. **Run the development server**:
```bash
npm run dev
```

3. **Open your browser** and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 🎨 Customization

### Colors

Edit the color scheme in `tailwind.config.js`:

```javascript
colors: {
  'electric-lime': '#CCFF00',
  'neon-purple': '#B026FF',
  'dark-bg': '#050505',
}
```

### Video Content

Replace placeholder videos in `src/components/VideoGallery.jsx`:

```javascript
const videos = [
  {
    id: 1,
    title: 'Your Video Title',
    description: 'Your description',
    thumbnail: 'path/to/your/thumbnail.jpg',
    url: 'path/to/your/video.mp4',
    size: 'md:col-span-2 md:row-span-2 h-96 md:h-auto',
  },
  // Add more videos...
]
```

### Graphics/Thumbnails

Update graphics in `src/components/GraphicsSection.jsx`:

```javascript
const graphics = [
  {
    id: 1,
    title: 'Your Project Title',
    category: 'Category Name',
    image: 'path/to/your/image.jpg',
  },
  // Add more graphics...
]
```

### Personal Information

Update contact details in `src/components/Contact.jsx`:

- Email address
- Social media links (Instagram, YouTube, Twitter)
- Availability status

## 📁 Project Structure

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── SkillsMarquee.jsx
│   │   ├── VideoGallery.jsx
│   │   ├── GraphicsSection.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── postcss.config.js
```

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 💡 Key Features Explained

### Hover-to-Play Video Gallery

The video gallery uses React `useRef` hooks for efficient video playback:

- **Desktop**: Hover over a card to play the video
- **Mobile**: Tap a card to play/pause
- **Fullscreen**: Click the maximize icon to open in modal
- **Performance**: Videos are only loaded and played on interaction

### Infinite Skills Marquee

Uses CSS animations and duplicated content for seamless infinite scrolling without JavaScript performance overhead.

### Responsive Design

- Mobile-first approach
- Breakpoints: `md` (768px), `lg` (1024px)
- Touch-friendly interactions on mobile

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

For questions or feedback, reach out via the contact form on the website.

---

**Made with ❤️ by a Video Editor & Graphic Designer**
