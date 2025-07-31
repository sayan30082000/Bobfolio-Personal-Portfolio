# Modern Portfolio Website

A responsive portfolio website with modern UI and animations, built with HTML, CSS, and JavaScript.

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations and transitions
- Custom cursor effect
- Animated skill bars
- Project filtering functionality
- Contact form with validation
- Smooth scrolling navigation
- Parallax effects
- Reveal animations on scroll

## Technologies Used

- HTML5
- CSS3 (with CSS variables and flexbox/grid layouts)
- JavaScript (vanilla, no frameworks)
- SVG graphics for illustrations
- Font Awesome for icons
- Google Fonts

## Project Structure

```
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── main.js         # JavaScript functionality
├── images/             # SVG illustrations
│   ├── profile.svg
│   ├── about.svg
│   ├── project1.svg
│   ├── project2.svg
│   ├── project3.svg
│   ├── project4.svg
│   ├── project5.svg
│   └── project6.svg
└── README.md           # Project documentation
```

## Getting Started

### Local Development

1. Clone or download this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the local development server:
   ```
   npm start
   ```
4. Open your browser and navigate to `http://localhost:8080`

### Deployment

#### Netlify Deployment

1. Create an account on [Netlify](https://www.netlify.com/)
2. Connect your GitHub repository or upload the project files directly
3. Netlify will automatically detect the configuration in `netlify.toml`
4. Your site will be deployed and available at a Netlify URL

#### Vercel Deployment

1. Create an account on [Vercel](https://vercel.com/)
2. Connect your GitHub repository or upload the project files directly
3. Vercel will automatically detect the configuration in `vercel.json`
4. Your site will be deployed and available at a Vercel URL

## Customization

### Changing Colors

You can easily change the color scheme by modifying the CSS variables in the `:root` selector in `style.css`:

```css
:root {
    --primary-color: #6c63ff;      /* Main brand color */
    --secondary-color: #f50057;     /* Accent color */
    --background-color: #f9f9f9;    /* Background color */
    --dark-color: #333;             /* Text color */
    /* ... other variables ... */
}
```

### Updating Content

To update the portfolio with your information:

1. Replace the placeholder text in `index.html` with your details
2. Replace the SVG images in the `images/` folder with your own project screenshots
3. Update the project descriptions and links

### Adding Projects

To add more projects, copy the project item structure in the HTML and update the content:

```html
<div class="project-item" data-category="your-category">
    <div class="project-img">
        <img src="images/your-project-image.svg" alt="Project Title">
    </div>
    <div class="project-info">
        <h3 class="project-title">Your Project Title</h3>
        <p class="project-category">Project Category</p>
        <div class="project-links">
            <a href="#" class="project-link"><i class="fas fa-link"></i></a>
            <a href="#" class="project-link"><i class="fab fa-github"></i></a>
        </div>
    </div>
</div>
```

## Browser Support

This portfolio website works in all modern browsers including:

- Chrome
- Firefox
- Safari
- Edge

## License

Feel free to use this template for your personal portfolio.

## Acknowledgements

- Font Awesome for icons
- Google Fonts for typography
- Inspiration from modern portfolio designs