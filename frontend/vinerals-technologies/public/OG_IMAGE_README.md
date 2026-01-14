# OpenGraph Image Generation

## Current Status

An SVG placeholder has been created at `/public/og-image.svg` (1200x630px) with:
- Brand colors (primary blue background, teal accents)
- Company logo (V shape)
- Tagline: "AI & Software for Growing Businesses"
- Trust indicators

## Converting to JPG

The layout.tsx references `/og-image.jpg`. To convert the SVG to JPG:

### Method 1: Online Converter
1. Open https://cloudconvert.com/svg-to-jpg
2. Upload `og-image.svg`
3. Set quality to 95%
4. Download as `og-image.jpg`
5. Place in `/public/og-image.jpg`

### Method 2: Using ImageMagick (Command Line)
```bash
convert -density 300 -background white public/og-image.svg public/og-image.jpg
```

### Method 3: Using Node.js (sharp)
```bash
npm install sharp
node scripts/generate-og-image.js
```

## Design Specifications

- **Size:** 1200x630px (standard OpenGraph size)
- **Format:** JPG (referenced in layout.tsx)
- **Alt Text:** "Vinerals Technologies - AI & Software for Growing Businesses"
- **Background:** Primary blue (#1e3a8a) with gradient to #2563eb
- **Logo:** White V-shape with teal accent dots (#14b8a6)
- **Typography:** System fonts, white/light blue text

## Testing

After generating the JPG, test with:
1. **Facebook Debugger:** https://developers.facebook.com/tools/debug/
2. **Twitter Card Validator:** https://cards-dev.twitter.com/validator
3. **LinkedIn Post Inspector:** https://www.linkedin.com/post-inspector/

## Future Improvements

Consider creating multiple OG images for:
- Homepage (current)
- Service pages (with service-specific messaging)
- Blog posts (with post title)
- Case studies (with client logo if permitted)
