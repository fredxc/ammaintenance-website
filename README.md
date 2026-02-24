# ASA Timmerwerken Website

Professional maintenance and renovation website built with React, TypeScript, Vite, and Tailwind CSS.

## 🚀 Quick Start

### Local Development

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start development server**

   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:5173/`

3. **Build for production**

   ```bash
   npm run build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   ```

## 📦 Deployment

### GitHub Pages

This project is configured to automatically deploy to GitHub Pages when you push to the main branch.

#### Setup GitHub Pages:

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Push to the `main` branch to trigger deployment

The site will be available at: `https://[username].github.io/ammaintenance-website/`

#### Manual Deployment:

If you prefer to deploy manually:

```bash
# Build with GitHub Pages environment variable
GITHUB_PAGES=true npm run build

# The dist folder is ready to deploy
```

### Custom Domain

To use a custom domain:

1. Update the `base` property in `vite.config.ts`:

   ```typescript
   base: "/";
   ```

2. Add a `CNAME` file in the `public` folder with your domain:

   ```
   www.yourdomain.com
   ```

3. Configure your domain's DNS settings to point to GitHub Pages

## 🛠️ Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Styling
- **Lucide React** - Icons
- **Radix UI** - Accessible components

## 📁 Project Structure

```
ammaintenance-website/
├── src/
│   ├── app/
│   │   ├── components/     # React components
│   │   └── App.tsx         # Main app component
│   ├── styles/             # CSS files
│   └── main.tsx            # Entry point
├── public/                 # Static assets
├── index.html              # HTML template
└── vite.config.ts          # Vite configuration
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🎨 Customization

### Images

Replace the placeholder images in the components:

- `Hero.tsx` - Main hero image
- `About.tsx` - Interior/team image
- `Services.tsx` - Service category images

### Contact Information

Update phone numbers and email addresses in:

- `Header.tsx`
- `Footer.tsx`
- `Contact.tsx`
- `StickyCallButton.tsx`

Current contact: +31 6 34508004

## 📄 License

Private project - All rights reserved

## 🤝 Support

For questions or issues, contact the development team.
