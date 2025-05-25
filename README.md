# Spotlight Effect

A dynamic spotlight effect that follows your cursor, creating an engaging interactive experience on your webpage. The spotlight adjusts its size based on cursor position and interaction with feature elements.

## Features

- 🌟 Smooth cursor-following spotlight
- 📏 Dynamic size adjustment based on cursor position
- 💫 Interactive hover effects on feature items
- 🎯 Responsive spotlight behavior
- 🎨 Customizable appearance

## Setup

1. Include the script in your HTML file:
```html
<script src="script.js"></script>
```

2. Add the spotlight element to your HTML:
```html
<div class="spotlight"></div>
```

3. Add the required CSS styles:
```css
.spotlight {
    position: fixed;
    pointer-events: none;
    background: radial-gradient(circle at center, 
        rgba(255, 255, 255, 0.1) 0%, 
        rgba(0, 0, 0, 0) 100%);
    transform: translate(-50%, -50%);
    transition: width 0.2s, height 0.2s;
}

.feature-item {
    /* Add your feature item styles */
    transition: transform 0.3s, border-color 0.3s;
    border: 1px solid rgba(255, 255, 255, 0.1);
}
```

## Usage

The spotlight will automatically initialize when the DOM content is loaded. The effect includes:

- A large spotlight (600px) that follows the cursor
- Spotlight size changes based on distance from screen center
- Special hover effects when interacting with feature items
- Smooth animations for all transitions

## Customization

You can customize the spotlight by adjusting the following variables in `script.js`:
- `spotlightSize`: Default size of the spotlight (currently 600px)
- `targetSize`: Target size for hover states (450px for feature items)

## Browser Support

This effect works in all modern browsers that support:
- ES6 JavaScript
- CSS transforms
- RequestAnimationFrame API

## License

MIT License - Feel free to use this in your projects! 