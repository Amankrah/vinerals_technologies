# Favicon Generation Guide

This guide explains how to generate all required favicon files for the Vinerals Technologies website.

## Quick Start

### Method 1: Using the HTML Generator (Recommended)

1. Open `generate-favicons.html` in your web browser
2. Click "Download All (as PNGs)" button
3. Save all generated images to the `/public` directory
4. The files are automatically named correctly

### Method 2: Using Online Tools

If you prefer using online tools, use [RealFaviconGenerator](https://realfavicongenerator.net/):

1. Upload `/public/favicon.svg`
2. Customize settings (use defaults)
3. Download the generated package
4. Extract files to `/public` directory

## Required Files

The following files should be in the `/public` directory:

```
public/
├── favicon.svg              ✅ Already created (vector, any size)
├── favicon.ico             ⏳ Generate (multi-size ICO: 16x16, 32x32, 48x48)
├── favicon-16x16.png       ⏳ Generate (16×16 pixels)
├── favicon-32x32.png       ⏳ Generate (32×32 pixels)
├── apple-touch-icon.png    ⏳ Generate (180×180 pixels)
├── android-chrome-192x192.png  ⏳ Generate (192×192 pixels)
├── android-chrome-512x512.png  ⏳ Generate (512×512 pixels)
└── site.webmanifest        ✅ Already created
```

## Design Specifications

### Colors
- **Background:** #1e3a8a (Primary Blue - from brand guidelines)
- **V Shape:** #ffffff (White)
- **Tech Dots:** #14b8a6 (Secondary Teal - from brand guidelines)

### Icon Design
- **Symbol:** Stylized "V" shape representing Vinerals
- **Accents:** Three circular dots forming a tech circuit pattern
- **Border Radius:** 6px (rounded corners for modern look)

### Size Guidelines

| File | Size | Purpose |
|------|------|---------|
| favicon.svg | Scalable | Modern browsers (preferred) |
| favicon.ico | 16, 32, 48 | Legacy browsers, Windows |
| favicon-16x16.png | 16×16 | Browser tab (standard) |
| favicon-32x32.png | 32×32 | Browser tab (HD displays) |
| apple-touch-icon.png | 180×180 | iOS home screen |
| android-chrome-192x192.png | 192×192 | Android home screen |
| android-chrome-512x512.png | 512×512 | Android splash screen |

## Implementation

The favicon links are automatically added to the site via `app/layout.tsx` metadata:

```tsx
export const metadata: Metadata = {
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
}
```

## Testing

After generating and placing the files:

1. **Local Testing:**
   ```bash
   npm run dev
   ```
   Check browser tab for icon

2. **Production Testing:**
   - Deploy to staging/production
   - Test on multiple devices:
     - Desktop browsers (Chrome, Firefox, Safari, Edge)
     - Mobile devices (iOS Safari, Android Chrome)
     - PWA installation

3. **Validation Tools:**
   - [Favicon Checker](https://realfavicongenerator.net/favicon_checker)
   - Browser DevTools → Application → Manifest

## Troubleshooting

### Icon not showing?
- Clear browser cache (Ctrl+Shift+Delete / Cmd+Shift+Delete)
- Check file paths in Network tab (DevTools)
- Verify files exist in `/public` directory
- Restart development server

### Wrong colors?
- Re-generate using correct brand colors
- Ensure sRGB color space
- Check opacity/transparency settings

### Blurry on HD displays?
- Ensure larger sizes (32x32, 192x192, 512x512) are generated
- Use vector SVG as fallback for modern browsers

## Brand Consistency

The favicon design aligns with:
- **Logo:** Components/shared/Logo.tsx
- **Colors:** Design system (see docs/Vinerals_Technologies_Website_Development_Guide.md)
- **Brand:** Primary blue (#1e3a8a), Secondary teal (#14b8a6)

## Future Updates

If the logo changes:
1. Update `favicon.svg` in `/public`
2. Regenerate all PNG files
3. Update this README if design specs change
4. Commit changes to git

---

**Need Help?** Contact the development team or refer to the main website development guide.
