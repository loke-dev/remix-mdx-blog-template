# Remix MDX Blog Template

<div align="center">
  <img src="https://github.com/user-attachments/assets/ba7c5cd1-1611-439c-811a-e1d33f9d046c" alt="Remix MDX Blog Template" width="600" />

  <p>
    <strong>A powerful, modern blog template built with Remix, Vite, and Tailwind.</strong><br />
    Perfect for developers and content creators who want to share their ideas beautifully.
  </p>

  <p>
    <a href="https://github.com/loke-dev/remix-mdx-blog-template/stargazers">
      <img src="https://img.shields.io/github/stars/loke-dev/remix-mdx-blog-template?style=for-the-badge&color=22c55e" alt="GitHub Stars" />
    </a>
    <a href="https://github.com/loke-dev/remix-mdx-blog-template/network/members">
      <img src="https://img.shields.io/github/forks/loke-dev/remix-mdx-blog-template?style=for-the-badge&color=0ea5e9" alt="GitHub Forks" />
    </a>
    <a href="https://github.com/loke-dev/remix-mdx-blog-template/issues">
      <img src="https://img.shields.io/github/issues/loke-dev/remix-mdx-blog-template?style=for-the-badge&color=f43f5e" alt="GitHub Issues" />
    </a>
  </p>
</div>

## ✨ Features

- **⚡️ Lightning Fast** - Built with Remix v2 and Vite for incredible performance and developer experience
- **📝 MDX Powered** - Write content in Markdown with the power to include React components directly in your posts
- **👨‍💻 Developer Ready** - TypeScript, Tailwind CSS, shadcn/ui components, and a well-organized project structure
- **🔒 Type-Safe Content** - Manage blog posts with type safety using content-collections with Zod validation and auto-generated TypeScript types
- **🔍 SEO Optimized** - Pre-configured meta tags, Open Graph support, and SEO best practices to help your content rank better
- **🌓 Dark Mode Built-in** - Support for both light and dark mode with system preference detection and toggling

## 🚀 Tech Stack

- **Remix** - React-based web framework
- **Vite** - Lightning fast build tool
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Accessible UI components
- **Content Collections** - Type-safe content management
- **TypeScript** - Enhanced type safety
- **MDX** - Markdown + JSX components
- **Zod** - Schema validation
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Sonner** - Toast notifications
- **Husky** - Git hooks automation

## 📋 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/loke-dev/remix-mdx-blog-template.git my-blog
cd my-blog
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🗂️ Project Structure

```
remix-mdx-blog-template/
├── app/
│   ├── components/    # Reusable components
│   ├── posts/         # Blog posts
│   ├── routes/        # App routes
│   ├── styles/        # Global styles
│   ├── utils/         # Utility functions
│   └── types/         # TypeScript types
├── public/            # Static assets
```

## 📚 Writing Content

This template uses Content Collections for type-safe content management. Create your blog posts as MDX files in the `app/posts` directory with frontmatter:

```mdx
---
title: Hello World
description: My first blog post
date: 2023-04-15
published: true
---

# Hello World

This is my first blog post using **Remix MDX Blog Template**.

<SomeComponent prop="value" />
```

## 🎨 Customization

The template is built with customization in mind:

- **Styling**: Tailwind CSS for easy customization
- **Components**: shadcn/ui components that can be adapted to your needs
- **Layout**: Flexible layout components for consistent design
- **Theming**: Light and dark mode support with easy theme customization

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/loke-dev">Loke</a></p>
  <p>
    <a href="https://github.com/loke-dev/remix-mdx-blog-template">
      <img src="https://img.shields.io/badge/Get_Started-22c55e?style=for-the-badge" alt="Get Started" />
    </a>
  </p>
</div>
