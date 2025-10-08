# TBA, LLP Website - GitHub Pages Deployment Guide

This is a static website built with React and Vite, optimized for GitHub Pages hosting.

## Deployment Instructions

### Important: Recommended Deployment Method

**✅ RECOMMENDED: Custom Domain with GitHub Pages**

This website is optimized for deployment with a custom domain (e.g., tballp.com). This is the recommended approach for a professional business website.

With a custom domain:
1. Build works perfectly out of the box
2. Clean URLs without repository paths
3. Professional appearance
4. Full SEO optimization

**⚠️ Repository-Only GitHub Pages (username.github.io/repo-name) Not Supported**

Due to build configuration constraints, this website cannot be deployed to GitHub Pages repository hosting (e.g., username.github.io/tba-llp) without manual build modifications. Use a custom domain instead.

### 1. Build the Static Site

```bash
npm run build
```

This will create a `dist/public` directory with all the static assets.

### 2. Deploy to GitHub Pages

#### Option A: Manual Deployment

1. Create a new repository on GitHub (e.g., `tba-llp-website`)
2. Initialize git in your project (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
3. Add your GitHub repository as remote:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/tba-llp-website.git
   ```
4. Push to GitHub:
   ```bash
   git push -u origin main
   ```
5. Build the site:
   ```bash
   npm run build
   ```
6. Deploy the `dist/public` folder to GitHub Pages using GitHub's deploy feature or a tool like `gh-pages`:
   ```bash
   npx gh-pages -d dist/public
   ```

#### Option B: GitHub Actions (Automated)

Create a `.github/workflows/deploy.yml` file with the following content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          
      - name: Install dependencies
        run: npm install
        
      - name: Build
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist/public
```

### 3. Configure GitHub Pages

1. Go to your repository settings on GitHub
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select the branch where your built files are (usually `gh-pages` if using gh-pages tool)
4. Click "Save"
5. Your site will be available at `https://YOUR_USERNAME.github.io/REPOSITORY_NAME/`

### 4. Custom Domain (Optional)

To use a custom domain like `tballp.com`:

1. Add a `CNAME` file to the `client/public` directory with your domain name
2. Configure your domain's DNS settings to point to GitHub Pages
3. Enable "Enforce HTTPS" in GitHub Pages settings

## Local Development

To run the site locally:

```bash
npm run dev
```

The site will be available at `http://localhost:5000`

## Important Notes

- The site is configured with client-side routing using wouter
- The 404.html redirect ensures proper routing on GitHub Pages
- All pages are pre-rendered as a single-page application
- The Calendly integration requires updating the URL in `client/src/pages/Contact.tsx`

## Updating the Calendly Link

1. Open `client/src/pages/Contact.tsx`
2. Find the line with `data-url="https://calendly.com/your-calendly-link"`
3. Replace `your-calendly-link` with your actual Calendly scheduling link
4. Rebuild and redeploy

## Technologies Used

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Wouter (routing)
- Shadcn UI components
- Calendly widget integration
