# Remix MDX Blog Template

A blog template built with Remix, Vite, and Tailwind CSS. Write posts in MDX with full React component support.

<img src="https://github.com/user-attachments/assets/ba7c5cd1-1611-439c-811a-e1d33f9d046c" alt="Remix MDX Blog Template" width="600" />

## Features

- **Fast** — Remix v2 + Vite, server-rendered by default
- **MDX Powered** — Markdown with React components in your posts
- **Type-Safe Content** — Content Collections with Zod validation and generated types
- **Dark Mode** — Light and dark themes with system preference detection
- **SEO Optimised** — Meta tags, Open Graph, structured data
- **Developer Ready** — TypeScript, Tailwind CSS, shadcn/ui, ESLint, Prettier, Husky

## Stack

- [Remix](https://remix.run)
- [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Content Collections](https://www.content-collections.dev)
- [TypeScript](https://typescriptlang.org)
- [MDX](https://mdxjs.com)

## Get Started

```bash
git clone https://github.com/loke-dev/remix-mdx-blog-template.git my-blog
cd my-blog
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/
├── components/    # Reusable components
├── posts/         # Blog posts (MDX)
├── routes/        # App routes
├── styles/        # Global styles
├── utils/         # Utility functions
└── types/         # TypeScript types
```

## Writing Posts

Create MDX files in `app/posts/` with frontmatter:

```mdx
---
title: Hello World
description: My first blog post
date: 2023-04-15
published: true
---

# Hello World

This is my first blog post.

<SomeComponent prop="value" />
```

## Customise

- **Styling** — Tailwind CSS and shadcn/ui components
- **Theming** — Light/dark mode in the theme config
- **Layout** — Modify layout components in `app/components/`

## Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/loke-dev/remix-mdx-blog-template)

## License

MIT
