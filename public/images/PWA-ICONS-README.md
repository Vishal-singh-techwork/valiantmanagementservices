# PWA Icons Setup Guide - Valiant Management Services

## Required Icon Files

For the Progressive Web App (PWA) to work properly, you need to create the following icon files from your logo:

### Icon Sizes Required:

| File Name | Size | Usage |
|-----------|------|-------|
| `icon-72x72.png` | 72×72 px | Small Android icons |
| `icon-96x96.png` | 96×96 px | Android shortcuts |
| `icon-128x128.png` | 128×128 px | Chrome Web Store |
| `icon-144x144.png` | 144×144 px | Windows tiles, iOS |
| `icon-152x152.png` | 152×152 px | iPad retina |
| `icon-192x192.png` | 192×192 px | Android standard |
| `icon-384x384.png` | 384×384 px | Android large |
| `icon-512x512.png` | 512×512 px | Splash screens, PWA install |

### How to Create Icons:

#### Option 1: Online Generator (Recommended)
1. Go to https://www.pwabuilder.com/imageGenerator
2. Upload your logo (use a square version if possible)
3. Download the generated icon pack
4. Place all icons in `/public/images/` folder

#### Option 2: Manual Creation
1. Open your logo in Photoshop, GIMP, or Canva
2. Resize to each required size
3. Save as PNG with transparency
4. Use a solid background color (#1a365d recommended) for maskable icons

### Icon Design Tips:

1. **Maskable Icons**: Leave 20% padding around the logo for maskable icons
2. **Background Color**: Use brand color (#1a365d) as background
3. **Contrast**: Ensure logo is visible on both light and dark backgrounds
4. **Square Format**: All icons must be perfectly square

### Folder Structure After Setup:

```
public/
└── images/
    ├── logo.png              (Main logo)
    ├── favicon.png           (32x32 favicon)
    ├── icon-72x72.png
    ├── icon-96x96.png
    ├── icon-128x128.png
    ├── icon-144x144.png
    ├── icon-152x152.png
    ├── icon-192x192.png
    ├── icon-384x384.png
    ├── icon-512x512.png
    ├── splash-screen.png     (1242x2688 for iOS splash)
    ├── screenshot-wide.png   (1280x720 for PWA store)
    └── screenshot-mobile.png (375x667 for PWA store)
```

### Testing PWA:

1. **Chrome DevTools**: Open DevTools > Application > Manifest
2. **Lighthouse**: Run Lighthouse audit for PWA score
3. **Mobile Test**: Open on Android Chrome, you should see "Add to Home Screen"

### Install Banner:

When the PWA is properly configured, Chrome will show an "Add to Home Screen" prompt automatically after the user visits the site twice within 2 weeks.

---

**Note**: Without these icons, the PWA will still work but will use a generic icon. For the best user experience and brand consistency, all icons should be provided.
