---
title: Leveraging Markdown with Contentlayer
date: 2023-06-13
---

Markdown has become a popular choice for writing content due to its simplicity and readability. In this post, we'll explore how to use Markdown for blog posts in a Next.js project, integrating Contentlayer to process Markdown, and using GitHub as a content management system (CMS).

## Using GitHub as a CMS

GitHub can be an excellent platform for writing and storing your articles. You can either write posts directly on GitHub or locally in VSCode and push them to GitHub. This approach offers version control and easy collaboration.

## Introducing Contentlayer

Contentlayer is a tool that transforms your Markdown files into HTML, making it a powerful addition to your Next.js project. Here's how to get started:

1. **Installation**: Run `npm i contentlayer next-contentlayer date-fns`.
2. **Configuration**: Update your `next.config.js` and `tsconfig.json` (or `jsconfig.json`) to specify using Contentlayer.
3. **Ignore Build Output**: Add `.contentlayer` to your `.gitignore`.
4. **Setting Up Contentlayer**: Create a `contentlayer.config.ts` file in your project root.
5. **Markdown Files Location**: Store your Markdown files in a `posts/` directory at the root of your project.

### Handling Markdown with Tailwind CSS

Integrating Markdown content with Tailwind CSS can be challenging due to the programmatically generated HTML markup by Contentlayer. However, you can overcome this by:

- **Adding a `style.css` File**: Create a stylesheet in your `[slug]/` directory and target various HTML elements inside a `.blog` class.
- **Using Tailwind Typography Plugin**: Install `@tailwindcss/typography` and update your `tailwind.config.js`. Wrap the Markdown content in a div with the `prose` class, and use `dark:prose-invert` for dark mode.

```javascript
// tailwind.config.js
module.exports = {
    // Other configurations...
    plugins: [require("@tailwindcss/typography")],
};
```

## Markdown Best Practices

When working with Markdown, consider the following:

- **Front Matter**: Use front matter for metadata in your Markdown files.
- **Filenames**: Ensure filenames do not contain spaces; use hyphens or underscores instead.

## Continuous Deployment with Vercel

When you push changes to GitHub, Vercel can automatically redeploy your site, enabling continuous deployment. Ensure that Vercel is set up to track the correct branch (usually `main`).

## Conclusion

Using Markdown with Contentlayer in Next.js offers a streamlined way to manage and display content in your web application. By leveraging GitHub as a CMS and integrating tools like Contentlayer and Tailwind CSS, you can create a robust and maintainable blogging platform.