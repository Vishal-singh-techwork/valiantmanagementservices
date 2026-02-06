# Logo Setup Instructions - Valiant Management Services

## Step 1: Prepare Your Logo Files

You need the following files:
- `logo.png` → Main logo for Navbar & Footer (recommended: 300x80px or similar)
- `favicon.png` → Square favicon for browser tab (recommended: 32x32px or 64x64px)
- `favicon.ico` → Optional ICO format favicon

## Step 2: Download the Logo

Download the official logo from:
```
https://valiantmanagementservices.com/wp-content/uploads/2026/01/Valiant-Management-Service.png
```

Save it as:
- `/public/images/logo.png`

For favicon, create a square version (32x32 or 64x64) and save as:
- `/public/images/favicon.png`

## Step 3: Folder Structure

After setup, your public folder should look like this:
```
/public
 └── images
     ├── logo.png          (Main logo)
     ├── favicon.png       (Square favicon)
     └── favicon.ico       (Optional)
```

## Step 4: Navbar Logo Code

The logo in navbar is implemented in `src/components/Header.tsx`:

```jsx
<Link to="/" className="flex items-center flex-shrink-0">
  <img 
    src="/images/logo.png" 
    alt="Valiant Management Services" 
    className="nav-logo h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"
    loading="eager"
  />
</Link>
```

### CSS for Responsive Logo:
```css
.nav-logo {
  max-height: 50px;
  width: auto;
}

@media (min-width: 768px) {
  .nav-logo {
    max-height: 60px;
  }
}

@media (min-width: 1024px) {
  .nav-logo {
    max-height: 70px;
  }
}
```

## Step 5: Footer Logo Code

The logo in footer is implemented in `src/components/Footer.tsx`:

```jsx
<Link to="/" className="inline-block mb-6">
  <img 
    src="/images/logo.png" 
    alt="Valiant Management Services" 
    className="footer-logo h-12 sm:h-14 md:h-16 w-auto object-contain"
    loading="lazy"
  />
</Link>
```

### CSS for Footer Logo:
```css
.footer-logo {
  max-width: 200px;
  height: auto;
  margin-bottom: 10px;
}
```

## Step 6: Favicon Setup

In `index.html`, add inside the `<head>` section:

```html
<!-- Favicon - Standard -->
<link rel="icon" type="image/png" sizes="32x32" href="/images/favicon.png">
<link rel="icon" type="image/png" sizes="16x16" href="/images/favicon.png">

<!-- Favicon - Apple Touch -->
<link rel="apple-touch-icon" sizes="180x180" href="/images/logo.png">

<!-- Favicon - ICO (Optional, for older browsers) -->
<link rel="shortcut icon" href="/images/favicon.ico">
```

## Step 7: Verify Setup

After adding the files:

1. **Clear browser cache** (Ctrl+Shift+Delete)
2. **Refresh the page** (Ctrl+F5)
3. **Check:**
   - ✅ Logo visible in navbar
   - ✅ Logo visible in footer
   - ✅ Favicon visible in browser tab
   - ✅ Logo scales properly on mobile
   - ✅ No broken image icons

## Troubleshooting

### Logo Not Showing?
1. Check file path is correct (`/images/logo.png`)
2. Ensure file is in `public/images/` folder
3. Verify file extension matches (`.png` not `.PNG`)
4. Clear browser cache

### Favicon Not Updating?
1. Favicons are heavily cached by browsers
2. Try opening in incognito/private window
3. Clear all browser data
4. Try different browser

### Image Too Large/Small?
1. Adjust the height classes: `h-10 sm:h-12 md:h-14 lg:h-16`
2. Or use max-width in CSS

## Recommended Image Sizes

| Usage | Recommended Size | Format |
|-------|------------------|--------|
| Navbar Logo | 300x80 px (or similar ratio) | PNG with transparency |
| Footer Logo | 300x80 px | PNG with transparency |
| Favicon | 32x32 px or 64x64 px | PNG or ICO |
| Apple Touch Icon | 180x180 px | PNG |
| Open Graph | 1200x630 px | PNG or JPG |

## Image Optimization Tips

1. **Compress images** using tools like TinyPNG
2. **Use PNG** for logos with transparency
3. **Keep file size under 100KB** for fast loading
4. **Use WebP format** for modern browsers (optional)

---

**Note:** The website has a fallback mechanism that loads the logo from the external URL if the local file is not found:
```
https://valiantmanagementservices.com/wp-content/uploads/2026/01/Valiant-Management-Service.png
```

This ensures the logo always displays even during development.
