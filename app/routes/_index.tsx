import type { MetaFunction } from '@remix-run/node'
import { Link } from '@remix-run/react'
import {
  AlertTriangle,
  ArrowRight,
  Bell,
  Blocks,
  Check,
  Code,
  Component,
  Database,
  FileCode,
  FileText,
  Flower,
  GitBranch,
  Github,
  Moon,
  Palette,
  Rocket,
  Search,
  Sparkles,
  Type,
  Zap,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export const meta: MetaFunction = () => {
  return [
    { title: 'Remix MDX Blog Template - Modern Web Development' },
    {
      name: 'description',
      content:
        'A modern blog template built with Remix, MDX, and Tailwind CSS. Perfect for developers and content creators.',
    },
  ]
}

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-4xl py-24 sm:py-32 lg:py-32">
          <div className="text-center">
            <div className="flex gap-2 justify-center">
              <Badge className="mb-4" variant="secondary">
                Modern
              </Badge>
              <Badge className="mb-4" variant="secondary">
                Blazing Fast
              </Badge>
              <Badge className="mb-4" variant="secondary">
                Developer Friendly
              </Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Remix MDX Blog Template
            </h1>
            <p className="mt-6 text-xl leading-8 text-muted-foreground max-w-2xl mx-auto">
              A powerful, modern blog template built with Remix, Vite, and
              Tailwind. Perfect for developers and content creators who want to
              share their ideas beautifully.
            </p>
            <div className="mt-10 flex items-center justify-center gap-6 flex-wrap">
              <Button asChild size="lg">
                <Link to="/blog">
                  View Demo Blog <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="https://github.com/loke-dev/remix-mdx-blog-template">
                  <Github className="mr-2" /> GitHub
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 lg:px-8 bg-muted/50">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose This Template?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card>
              <CardHeader>
                <Zap className="text-primary mb-2" />
                <CardTitle>Lightning Fast</CardTitle>
                <CardDescription>
                  Built with Remix v2 and Vite for incredible performance and DX
                </CardDescription>
              </CardHeader>
              <CardContent>
                Experience near-instant page loads, responsive content, and the
                speed that modern websites demand.
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card>
              <CardHeader>
                <FileText className="text-primary mb-2" />
                <CardTitle>MDX Powered</CardTitle>
                <CardDescription>
                  Write in Markdown, embed components
                </CardDescription>
              </CardHeader>
              <CardContent>
                Author content in Markdown with the power to include React
                components directly in your posts.
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card>
              <CardHeader>
                <Code className="text-primary mb-2" />
                <CardTitle>Developer Ready</CardTitle>
                <CardDescription>
                  Modern tech stack with best practices
                </CardDescription>
              </CardHeader>
              <CardContent>
                TypeScript, Tailwind CSS v4, shadcn/ui components, and a
                well-organized project structure.
              </CardContent>
            </Card>

            {/* Feature 4 - Content Collections */}
            <Card>
              <CardHeader>
                <Database className="text-primary mb-2" />
                <CardTitle>Type-Safe Content</CardTitle>
                <CardDescription>
                  Using content-collections for structured data
                </CardDescription>
              </CardHeader>
              <CardContent>
                Manage blog posts with type safety using content-collections.
                Define schemas with Zod validation and get auto-generated
                TypeScript types.
              </CardContent>
            </Card>

            {/* Feature 5 - SEO */}
            <Card>
              <CardHeader>
                <Search className="text-primary mb-2" />
                <CardTitle>SEO Optimized</CardTitle>
                <CardDescription>
                  Built-in meta tags and optimizations
                </CardDescription>
              </CardHeader>
              <CardContent>
                Comes with pre-configured meta tags, Open Graph support, and
                other SEO best practices to help your content rank better.
              </CardContent>
            </Card>

            {/* Feature 6 - Dark Mode */}
            <Card>
              <CardHeader>
                <Moon className="text-primary mb-2" />
                <CardTitle>Dark Mode Built-in</CardTitle>
                <CardDescription>
                  Automatic theme detection and toggling
                </CardDescription>
              </CardHeader>
              <CardContent>
                Support for both light and dark mode with system preference
                detection and a toggle to let your readers choose.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-3">
            Powered By Modern Tech
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            This template combines the best tools in the React ecosystem to
            provide a solid foundation for your blog
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <TechItem
              icon={<Sparkles size={16} />}
              name="Remix"
              description="React-based web framework"
            />
            <TechItem
              icon={<Rocket size={16} />}
              name="Vite"
              description="Lightning fast build tool"
            />
            <TechItem
              icon={<Palette size={16} />}
              name="Tailwind CSS v4"
              description="Utility-first styling"
            />
            <TechItem
              icon={<Component size={16} />}
              name="shadcn/ui"
              description="Accessible UI components"
            />
            <TechItem
              icon={<Blocks size={16} />}
              name="Content Collections"
              description="Type-safe content management"
            />
            <TechItem
              icon={<Type size={16} />}
              name="TypeScript"
              description="Enhanced type safety"
            />
            <TechItem
              icon={<FileCode size={16} />}
              name="MDX"
              description="Markdown + JSX components"
            />
            <TechItem
              icon={<Check size={16} />}
              name="Zod"
              description="Schema validation"
            />
            <TechItem
              icon={<AlertTriangle size={16} />}
              name="ESLint"
              description="Code linting"
            />
            <TechItem
              icon={<Flower size={16} />}
              name="Prettier"
              description="Code formatting"
            />
            <TechItem
              icon={<Bell size={16} />}
              name="Sonner"
              description="Toast notifications"
            />
            <TechItem
              icon={<GitBranch size={16} />}
              name="Husky"
              description="Git hooks automation"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Blog?</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Get started in minutes with this production-ready template.
          </p>
          <Button asChild size="lg">
            <Link to="https://github.com/loke-dev/remix-mdx-blog-template">
              Get Started Today
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

// Simple component for tech stack items
function TechItem({
  icon,
  name,
  description,
}: {
  icon: React.ReactNode
  name: string
  description: string
}) {
  return (
    <div className="flex flex-col items-center text-center gap-1">
      <div className="bg-primary/10 rounded-full p-3 text-primary">{icon}</div>
      <p className="font-medium text-sm mt-2">{name}</p>
      <p className="text-xs text-muted-foreground">{description}</p>
    </div>
  )
}
