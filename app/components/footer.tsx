export function Footer() {
  return (
    <footer className="w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <div className="flex items-center">
          <p className="text-sm text-muted-foreground">
            Built with Remix MDX Blog Template. The source code is available on{' '}
            <a
              href="https://github.com/loke-dev/remix-mdx-blog-template"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4 hover:text-primary"
            >
              GitHub
            </a>
            .
          </p>
        </div>
        <div className="flex items-center gap-8">
          <a
            href="https://github.com/remix-run/remix"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Remix
          </a>
          <a
            href="https://mdxjs.com/"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            MDX
          </a>
        </div>
      </div>
    </footer>
  )
}
