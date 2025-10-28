# Zap Documentation

> Beautiful, comprehensive documentation for Zap - the missing calendar management package for Laravel

This is the official documentation site for Zap, built with Docus to provide a clean, modern, and developer-friendly experience for learning about Laravel's most powerful scheduling package.

> [!TIP]
> New to Zap? Start with the [Installation Guide](https://zap-for-laravel.com/installation) and [Quick Start](https://zap-for-laravel.com/quick-start) sections.

## ✨ Features

- 🎨 **Beautiful Design** - Clean, modern documentation theme optimized for code examples
- 📱 **Responsive** - Mobile-first design for coding on the go
- 🌙 **Dark Mode** - Perfect for late-night coding sessions
- 🔍 **Search** - Quickly find Zap methods and examples
- 📝 **Rich Content** - Enhanced markdown with interactive code examples
- 🎯 **Laravel-focused** - Tailored specifically for Laravel developers
- ⚡ **Fast** - Optimized performance with Nuxt 4
- 🎥 **Video Tutorials** - Embedded tutorials in French and English

## 🚀 Quick Start

```bash
# Clone the documentation
git clone https://github.com/ludoguenet/zap-for-laravel-docs.git
cd zap-for-laravel-docs

# Install dependencies
npm install

# Start development server
npm run dev
```

Your documentation site will be running at `http://localhost:3000`

## 📁 Documentation Structure

```
zap-for-laravel-docs/
├── content/
│   ├── index.md                    # Homepage - Zap introduction
│   ├── 1.installation.md           # Installation and setup guide
│   ├── 2.quick-start.md           # Quick start examples
│   ├── 3.video-tutorials.md       # Video tutorials page
│   ├── 4.api-reference/           # Complete API documentation
│   │   ├── schedule-types.md      # Schedule types and usage
│   │   ├── availability-conflicts.md  # Availability & conflict management
│   │   └── querying-metadata.md   # Querying schedules and metadata
│   └── 5.examples/                # Real-world examples
├── public/
│   ├── videos/                    # Tutorial videos
│   └── assets/                    # Images and static files
└── package.json
```

## 🎯 What's Covered

### Core Documentation
- **Installation** - Complete setup guide with examples
- **Quick Start** - Get up and running in minutes
- **API Reference** - Comprehensive method documentation
- **Video Tutorials** - Learn visually with expert guidance

### Key Topics
- **Schedule Types** - Availability, appointments, blocked time, custom
- **Conflict Management** - Automatic detection and resolution
- **Availability Checking** - Smart slot finding and validation
- **Business Rules** - Working hours, duration limits, custom rules
- **Querying & Metadata** - Advanced filtering and custom data

## ⚡ Built with

This documentation site is powered by:

- [Nuxt 4](https://nuxt.com) - The web framework
- [Docus](https://docus.dev) - Documentation theme and components
- [Nuxt Content](https://content.nuxt.com/) - File-based content management
- [Nuxt UI Pro](https://ui.nuxt.com/pro) - Premium UI components for code examples
- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first styling
- [Lucide Icons](https://lucide.dev/) - Beautiful, consistent icons

## 🎥 Video Content

The documentation includes embedded video tutorials:
- **French Tutorial** by [Ludovic Guénet](https://ludovicguenet.dev)
- **English Tutorial** by [Laravel Daily](https://laraveldaily.com)

## 🚀 Deployment

Build the documentation for production:

```bash
npm run build
```

The built files will be in the `.output` directory, ready for deployment to:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Any Node.js hosting provider

## 🤝 Contributing

We welcome contributions to improve the documentation! Here's how:

1. Fork this repository
2. Create a feature branch (`git checkout -b improve-docs`)
3. Make your changes to the markdown files in `/content`
4. Test locally with `npm run dev`
5. Submit a pull request

## 📖 Zap Package

This documentation is for the Zap package. To install and use Zap in your projects:

```bash
composer require laraveljutsu/zap
```

- **Package Repository**: [ludoguenet/zap-for-laravel](https://github.com/ludoguenet/zap-for-laravel)
- **Author**: [Ludovic Guénet](https://ludovicguenet.dev)
- **License**: MIT

## 📄 License

Documentation: [MIT License](https://opensource.org/licenses/MIT)

---

**⚡ Made with ❤️ by [Ludovic Guénet](https://ludovicguenet.dev) for the Laravel community ⚡**
