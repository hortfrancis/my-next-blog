---
title: Styling in Next.js with Tailwind or CSS modules
date: 2023-06-15
---

Styling is a crucial aspect of web development, and Next.js offers several ways to approach it. In this blog post, we'll explore the use of CSS Modules and Tailwind CSS in Next.js, highlighting their benefits and best practices.

## CSS Modules: Component-Level Styling

CSS Modules in Next.js allow you to locally scope CSS, creating unique class names and avoiding collisions. This feature is perfect for component-level styling. Here’s how to use CSS Modules:

- **Create a CSS Module**: Name your stylesheet as `my-styles.module.css`.
- **Importing Styles**: Use `import styles from './my-styles.module.css'`.
- **Using Styles**: Apply styles like `<p className={styles.red}>Red text!</p>`.

CSS Modules are performant because they ensure only the styles needed by a page are loaded. When naming multi-word classes, you can use dashes or camelCase, though consistency is key.

## Tailwind CSS: Utility-First Styling

Tailwind CSS offers a utility-first approach to styling, enabling rapid UI development. Here’s how to get started:

- **Install Tailwind CSS**: You can choose to install Tailwind when you first run `npx create-next-app`
- **Applying Tailwind Styles**: Use utility classes directly in your JSX.

```
<h1 className="text-4xl font-bold mb-2">My Next Blog</h1>
<p className="text-gray-500 mb-6">By Alex Hort-Francis</p>
```

## Combining Tailwind with Conventional CSS

While you can use Tailwind and conventional CSS together, it's often more efficient to stick with one approach for consistency and maintainability.

## Google Fonts Integration

Next.js makes it easy to integrate Google Fonts:

```tsx
import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({ subsets: ['latin'] });

// Apply the font
<p className={montserrat.className}>Hello world!</p>
```

For global font styling, apply the font class to the `body` tag.

## Image Optimization with Next.js

Next.js’s `<Image />` component offers optimized image handling:

- **Automatic Resizing and Responsiveness**: Images are resized and served in appropriate dimensions for different devices.
- **Lazy Loading**: Images load only when they become visible, improving performance.
- **Placeholder Support**: Show a blurred image while the main image loads.

Use the component like this:

```tsx
import Image from 'next/image';
import myImage from '../../public/images/my-image.png';

<Image src={myImage} alt="My image" />
```

## Conclusion

Styling in Next.js can be efficiently managed using CSS Modules for scoped, component-level styles, or Tailwind CSS for a utility-first approach. By understanding these tools and their best practices, you can create visually appealing and performance-optimized web applications.
