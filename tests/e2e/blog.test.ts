import { expect, test } from '@playwright/test'

test('core pages render without console errors or horizontal overflow', async ({
  page,
}) => {
  const errors: string[] = []
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text())
  })

  const pages = [
    ['/', 'Remix MDX Blog Template'],
    ['/blog', 'Blog'],
    ['/about', 'About Me'],
    ['/projects', 'Projects'],
    ['/contact', 'Contact Me'],
  ] as const

  for (const [path, heading] of pages) {
    await page.goto(path)
    await expect(
      page.getByRole('heading', { level: 1, name: heading })
    ).toBeVisible()
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth
      )
    ).toBe(true)
  }

  expect(errors).toEqual([])
})

test('blog posts render MDX content and syntax highlighting', async ({
  page,
}) => {
  await page.goto('/blog')
  await page.locator('a[href="/blog/remix-and-mdx-perfect-combo"]').click()
  await expect(page).toHaveURL('/blog/remix-and-mdx-perfect-combo')
  await expect(
    page.getByRole('heading', {
      level: 1,
      name: 'Remix and MDX - The Perfect Combination for Modern Blogs',
    })
  ).toBeVisible()

  await expect(page.getByRole('article')).toBeVisible()
  await expect(page).toHaveTitle(
    'Blog - Remix and MDX - The Perfect Combination for Modern Blogs'
  )
  await expect(page.locator('pre code').first()).toBeVisible()
})

test('mobile navigation remains usable without horizontal overflow', async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')

  await expect(
    page.getByRole('heading', {
      level: 1,
      name: 'Remix MDX Blog Template',
    })
  ).toBeVisible()
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth
    )
  ).toBe(true)

  await page.getByRole('button', { name: 'Toggle menu' }).click()
  await expect(
    page.getByRole('heading', { name: 'Navigation Menu' })
  ).toBeVisible()
  await expect(
    page.getByRole('link', { name: 'Blog', exact: true })
  ).toBeVisible()
})
