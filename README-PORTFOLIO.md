## Graphic Design Portfolio

A modern, professional graphic design portfolio website showcasing your work with a beautiful gallery section and a functional contact form.

### Features

✨ **Modern Hero Section** - Eye-catching animated landing area
🎨 **About Section** - Professional bio and skills showcase
📸 **Gallery** - Grid layout to display your design projects
📧 **Contact Form** - Functional form with validation and local storage
📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
🎯 **Smooth Navigation** - Sticky nav bar with smooth scrolling
🔄 **Intersection Observer** - Gallery items animate on scroll
⚡ **Fast & Optimized** - Lightweight and performant

### Project Structure

```
graphic-design-portfolio/
├── portfolio-index.html      # Main portfolio website
├── portfolio-styles.css      # Styling and responsive design
├── portfolio-script.js       # JavaScript interactivity
├── index.html                # Joke generator (bonus)
├── styles.css                # Joke generator styles
├── script.js                 # Joke generator script
├── todo-index.html           # To-do list app (bonus)
├── todo-styles.css           # To-do app styles
├── todo-script.js            # To-do app script
└── README.md                 # Documentation
```

### Sections

#### 1. Navigation Bar
- Sticky header with smooth scrolling links
- Mobile hamburger menu
- Responsive design
- Active section highlighting

#### 2. Hero Section
- Full-screen landing area
- Animated gradient background
- Call-to-action button
- Professional typography

#### 3. About Section
- Personal bio
- Skills displayed as tags
- Clean layout with background styling

#### 4. Gallery Section
- Responsive grid layout
- 6 project showcase items
- Beautiful gradient backgrounds
- Hover animations
- Project descriptions

#### 5. Contact Section
- Functional contact form with validation
- Email format verification
- Success/error message display
- Contact information display
- Social media links
- Data stored in browser's localStorage

#### 6. Footer
- Copyright information
- Professional styling

### Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Advanced styling, gradients, animations, flexbox, CSS Grid
- **JavaScript (ES6+)** - Interactivity, form handling, scroll effects
- **LocalStorage API** - Contact form data persistence

### How to Use

1. **View the Portfolio**: Open `portfolio-index.html` in your web browser
2. **Navigate**: Use the navigation bar to jump between sections
3. **View Gallery**: Scroll through your design projects in the gallery
4. **Send a Message**: Fill out the contact form to send inquiries
5. **Mobile Friendly**: View on any device - the layout adapts automatically

### Contact Form Features

- **Validation**: Checks for empty fields and valid email format
- **User Feedback**: Success/error messages
- **Local Storage**: Messages are stored in browser's localStorage
- **Accessible**: Works without JavaScript (with basic functionality)

### Customization Guide

#### Change Your Name/Info
Edit `portfolio-index.html`:
- Line 25: Change "Jiisun Kim" heading
- Line 32: Update email in contact section
- Add your actual email address

#### Update Skills
Edit line 81 in `portfolio-index.html`:
```html
<span class="skill-tag">Your Skill Here</span>
```

#### Add Your Projects
Edit gallery items (lines 100-150):
- Replace placeholder text with your project names
- Change gradient colors for each project
- Update descriptions

#### Social Media Links
Edit lines 192-195:
```html
<a href="your-instagram-url">Instagram</a>
```

#### Change Colors
Edit `portfolio-styles.css`:
- Main color: `#667eea` (purple)
- Accent color: `#764ba2` (dark purple)
- Search and replace to customize

### Gallery Images

Currently uses gradient backgrounds as placeholders. To add actual images:

1. Replace the gradient background with:
```html
<img src="path/to/your/image.jpg" alt="Project name">
```

2. Ensure images are optimized for web (72 dpi, appropriate size)

### Contact Form Data

Contact form submissions are stored in the browser's localStorage. To view submissions:

1. Open browser DevTools (F12)
2. Go to Application/Storage tab
3. Find `portfolioMessages` in localStorage
4. View as JSON

### Form Validation

The contact form validates:
- ✓ All fields are filled
- ✓ Email is in valid format
- ✓ No empty submissions

### Browser Support

- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance Optimization

- Minimal dependencies (no frameworks)
- Smooth scrolling behavior
- Lazy loading with Intersection Observer
- Optimized animations
- Mobile-first responsive design

### SEO Features

- Semantic HTML5 structure
- Meta tags for responsiveness
- Descriptive headings
- Alt text support for images
- Structured navigation

### Future Enhancements

- Backend integration for contact form (email sending)
- Image gallery with lightbox
- Project detail pages
- Blog section
- Dark mode toggle
- Multi-language support
- Analytics integration
- CMS integration

### Tips for Best Results

1. **Use High-Quality Images** - Replace gradients with professional project images
2. **Update Content Regularly** - Keep portfolio fresh with latest work
3. **Add Real Projects** - Include 6-12 of your best projects
4. **Optimize Images** - Compress images before uploading
5. **Get Feedback** - Have others review your portfolio
6. **Mobile Test** - Always test on mobile devices
7. **Set Up Email** - Configure backend for actual email notifications

### Deploying Your Portfolio

#### GitHub Pages (Free)
1. Push to GitHub repository
2. Enable GitHub Pages in settings
3. Access at `username.github.io/graphic-design-portfolio`

#### Netlify (Free)
1. Connect GitHub repository
2. Deploy automatically on push
3. Custom domain support

#### Traditional Hosting
1. Upload files via FTP
2. Point domain to hosting provider
3. Maintain on your own

### License

This project is open source and available under the MIT License.

### Support

For questions or issues, check the code comments or review the HTML structure.

---

**Ready to showcase your design work? Your portfolio is ready to go!** 🎨
