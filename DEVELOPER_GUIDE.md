# Havelock Tailors - Developer & Maintenance Guide

This guide explains how to maintain and update the modernized Havelock Tailors website.

## 1. Project Structure
- **`/app`**: Contains all pages and global styles.
  - `page.js`: The Homepage.
  - `layout.js`: The main wrapper (Header, Footer, SideNav).
  - `/rent`, `/weddings`, `/custom-tailoring`: Individual sub-pages.
- **`/components`**: Reusable UI parts (Header, Footer, SideNav, Gallery, ContentSlider).
- **`/public/assets`**: All images and icons.
- **`*.module.css`**: CSS files specific to each component.

---

## 2. Global Branding (Colors & Fonts)
All global settings are in `app/globals.css`.

### Change Branding Font Weight
To make "HAVELOCK TAILORS" bolder or thinner, edit the `--brand-weight` variable in the `:root` section:
```css
--brand-weight: 400; /* Try 300 for thin, 700 for bold */
```

### Change Theme Colors
Update the variables in `:root`:
- `--accent-color`: The primary gold color used for links and highlights.
- `--text-primary`: The main charcoal/black color.

---

## 3. Updating the Gallery
The gallery uses an automated masonry grid.

1. **Upload Images**: Place new images in `public/assets/gallery/`.
2. **Update List**: Open `components/Gallery.jsx`.
3. **Edit the `images` array**:
   ```javascript
   const images = [
     "/assets/gallery/your-image-1.webp",
     "/assets/gallery/your-image-2.jpg",
   ];
   ```
   Add or remove paths here to update the live gallery.

---

## 4. Adjusting Section Scrolling
To change where the page stops when clicking "Gallery" or "About us":

1. Open the CSS file for that section (e.g., `app/Home.module.css` for "About Us" or `components/Gallery.module.css` for "Gallery").
2. Find the main section class (e.g., `.aboutUsSection`).
3. Adjust the `scroll-margin-top` value:
   ```css
   .aboutUsSection {
     scroll-margin-top: 120px; /* Increase this to stop higher up */
   }
   ```

---

## 5. Editing Page Content
- **Homepage Content**: Edit `app/page.js`.
- **Sub-pages**: Edit `app/rent/page.js`, `app/weddings/page.js`, or `app/custom-tailoring/page.js`.
- **Side Menu Links**: Edit `components/SideNav.jsx`.

---

## 6. Development Commands
- **Run Locally**: `npm run dev`
- **Build for Production**: `npm run build`
- **Preview Production Build**: `npm run start`

---

## 7. Deployment
The project is ready for **Vercel**. 
1. Push your code to GitHub.
2. Connect your GitHub repository to Vercel.
3. It will automatically deploy and provide a public URL.
