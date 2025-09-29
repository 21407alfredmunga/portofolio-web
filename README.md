# Data Visualization Portfolio Website

A clean, modern portfolio website for data scientists and visualization specialists, inspired by Yan Holtz's elegant design aesthetic. Built with vanilla HTML, CSS, and JavaScript for optimal performance and easy customization.

## 🌟 Features

### Core Functionality
- **Responsive Design**: Optimized for mobile, tablet, and desktop viewing
- **Interactive Project Gallery**: Filterable portfolio with embedded Streamlit apps
- **Smooth Animations**: Subtle transitions and scroll effects
- **Dark/Light Theme**: User preference with localStorage persistence
- **Project Modals**: Full-screen iframe embedding for interactive demos
- **Contact Form**: Functional contact form with validation
- **Blog Section**: Article system for insights and tutorials

### Technical Features
- **Lazy Loading**: Performance optimization for images and iframes
- **Smooth Scrolling**: Navigation with active section highlighting
- **Mobile Navigation**: Collapsible hamburger menu
- **Accessibility**: ARIA labels, keyboard navigation, color contrast
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 📁 Project Structure

```
portfolio-website/
├── index.html              # Main homepage
├── styles.css              # Complete stylesheet
├── main.js                 # JavaScript functionality
├── assets/
│   ├── thumbnails/         # Project preview images
│   └── blog/              # Blog post images
├── blog/
│   └── design-principles.html  # Sample blog post
└── README.md              # This file
```

## 🚀 Quick Start

1. **Clone or download** the project files to your desired directory
2. **Replace placeholder content** with your information:
   - Update name, bio, and contact details in `index.html`
   - Replace Streamlit URLs in `main.js` projectData object
   - Add your project thumbnails to `assets/thumbnails/`
   - Update social media links
3. **Customize colors** in the CSS variables section of `styles.css`
4. **Deploy** to your preferred hosting platform

## 🎨 Customization Guide

### Color Scheme
The website uses CSS custom properties for easy theming. Update these variables in `styles.css`:

```css
:root {
  --primary-color: #2563eb;      /* Main brand color */
  --accent-color: #06b6d4;       /* Secondary accent */
  --text-primary: #1f2937;       /* Main text color */
  --background: #ffffff;          /* Background color */
  /* ... more variables */
}
```

### Project Configuration
Update the `projectData` object in `main.js` with your Streamlit app URLs:

```javascript
const projectData = {
  project1: {
    title: 'Your Project Title',
    description: 'Detailed project description...',
    iframeSrc: 'https://your-streamlit-app.streamlit.app/',
    codeUrl: 'https://github.com/username/repo',
    demoUrl: 'https://your-demo-url.com'
  }
  // Add more projects...
};
```

### Adding New Projects
1. Add project card HTML in the projects section
2. Add corresponding data to the `projectData` object in JavaScript
3. Include project thumbnail in `assets/thumbnails/`
4. Update filter categories as needed

## 🎯 Embedding Streamlit Apps

The website is specifically designed to showcase Streamlit applications through iframe embedding:

1. **Deploy your Streamlit app** to Streamlit Cloud, Heroku, or another platform
2. **Update the iframe URL** in the projectData object
3. **Add project thumbnail** - create a screenshot of your app
4. **Configure lazy loading** - iframes load only when the modal opens

### Iframe Optimization Tips
- Use `loading="lazy"` attribute for performance
- Set appropriate iframe dimensions in CSS
- Consider adding loading indicators
- Test iframe embedding permissions

## 📱 Responsive Design

The website uses a mobile-first approach with breakpoints at:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

Key responsive features:
- Collapsible navigation menu
- Stacked layout on mobile
- Flexible grid systems
- Optimized typography scaling

## 🔧 Technical Details

### Dependencies
- **Font Awesome**: Icons (CDN)
- **Google Fonts**: Inter & JetBrains Mono (CDN)
- **No JavaScript frameworks**: Pure vanilla JS for maximum compatibility

### Browser Support
- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance Features
- Lazy loading for images and iframes
- Debounced scroll events
- Optimized animations with CSS transforms
- Minimal HTTP requests

## 🎨 Design Philosophy

This portfolio follows key principles inspired by data visualization best practices:

1. **Clarity**: Clean, uncluttered design with clear hierarchy
2. **Consistency**: Uniform spacing, typography, and color usage
3. **Accessibility**: High contrast, keyboard navigation, screen reader support
4. **Performance**: Fast loading with progressive enhancement
5. **Responsiveness**: Seamless experience across all device sizes

## 📝 Content Guidelines

### Project Descriptions
- Start with the problem you solved
- Mention key technologies used
- Highlight unique features or insights
- Include metrics or outcomes when possible

### Blog Posts
- Focus on lessons learned and insights
- Include code examples when relevant
- Use visual examples to illustrate concepts
- Keep paragraphs concise for web reading

## 🚀 Deployment Options

### Static Hosting (Recommended)
- **Netlify**: Drag and drop deployment with form handling
- **Vercel**: Git integration with automatic deployments
- **GitHub Pages**: Free hosting for public repositories
- **Surge.sh**: Simple command-line deployment

### Traditional Hosting
- Upload files via FTP to any web hosting provider
- Ensure HTTPS is enabled for security
- Configure custom domain if desired

## 🔮 Future Enhancements

Consider adding these features as your portfolio grows:

- **CMS Integration**: Headless CMS for easy content updates
- **Analytics**: Google Analytics or privacy-focused alternatives
- **SEO**: Structured data and advanced meta tags
- **PWA Features**: Service worker for offline functionality
- **Search**: Client-side search for projects and blog posts
- **Comments**: Blog comment system integration

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues, feature requests, or pull requests to improve this portfolio template.

---

**Ready to showcase your data visualization work?** 
Replace the placeholder content with your projects and launch your professional portfolio today!