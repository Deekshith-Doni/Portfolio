# 🚀 Pre-Deployment Checklist

## Content Updates Needed

- [ ] **EmailJS Setup** - Add your EmailJS credentials in `Contact.jsx`:
  - Service ID (line 16)
  - Template ID (line 17)
  - Public Key (line 18)

- [ ] **Replace All Placeholder Images/Videos**
  - Upload your actual videos to Cloudinary
  - Upload your actual graphics to Cloudinary
  - Update URLs in `VideoGallery.jsx` and `GraphicsSection.jsx`

- [ ] **Update Personal Info**
  - Change name/bio in `Hero.jsx`
  - Verify Instagram link in `Contact.jsx`
  - Add YouTube/Twitter when ready

- [ ] **Test Everything**
  - [ ] All videos play on hover
  - [ ] Fullscreen modals work
  - [ ] Contact form sends emails (after EmailJS setup)
  - [ ] All links work
  - [ ] Mobile responsive (test on phone)

## Build & Deploy

```bash
# Test production build locally
npm run build
npm run preview

# If successful, push to GitHub
git add .
git commit -m "Ready for deployment"
git push

# Deploy on Vercel (auto-deploys on push)
```

## Post-Deployment

- [ ] Test the live site
- [ ] Send test email through contact form
- [ ] Share with friends for feedback
- [ ] Add to LinkedIn/resume

## Optional Improvements

- [ ] Add Google Analytics
- [ ] Add sitemap for SEO
- [ ] Create favicon
- [ ] Add meta tags for social sharing
- [ ] Set up custom 404 page
