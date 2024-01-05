---
title: Advanced Routing in Next.js
date: 2023-06-08
---

Next.js, a powerful framework for React-based web development, offers robust routing capabilities that can streamline the creation of complex web applications. In this post, we'll dive into some advanced routing techniques in Next.js, focusing on dynamic routing, best practices for folder and file structure, and handling URL parameters and query strings.

## Essential Setup and Best Practices

Before we get into the complexities of routing, let's set the stage with some best practices:

- **Use of `<Link>` vs. `<a>`**: Inside your Next.js project, use the `<Link>` component for internal navigation. While `<a>` tags still work, they rerender the entire page upon route changes, which is inefficient. For external domains, however, `<a>` remains the go-to choice. Remember to import the Link component: `import Link from "next/link";`.
- **File and Folder Naming Conventions**: Adopt lowerCamelCase for folders and files in the `app/` directory. For function components, prefer UpperCamelCase, like `AboutPage` or `AboutLayout`.
- **The Role of `layout.tsx` and `page.tsx`**: In `layout.tsx`, always pass `children` as an argument. This setup is crucial for nested routes, as markup in `layout.tsx` will display within them, unlike markup in `page.tsx`.

## Dynamic Routing

Dynamic routing in Next.js allows for flexible and parameterized URLs. Here's a basic example demonstrating dynamic route segments:

```jsx
// Inside [pet]/page.tsx
interface PetPageParam {
    pet: string;
}

export default function PetPage({ params }: { params: PetPageParam }) {
    return (
        <div>
            <h2>Pet: {params.pet}</h2>
            <p>Buy a {params.pet} today!</p>
        </div>
    );
}
```

This approach is great for creating pages that depend on data, such as a product or user profile.

## Working with URL Parameters and Query Strings

Next.js also handles URL parameters and query strings elegantly. These are essential for tasks like sorting or filtering data. Here's an example of sorting pets in ascending or descending order:

```jsx
// Inside pets/page.tsx
import Link from 'next/link'

type Pet = {
    name: string, 
    slug: string
}

const pets: Pet[] = [
    {name: "wolf", slug: "wolf"},
    {name: "fat wolf", slug: "fat-wolf"},
    {name: "cat", slug: "cat"},
    {name: "dog", slug: "dog"}
]


function sortPets(a: Pet, b: Pet) {
    if(a.name < b.name) {
        return -1;
    }
    if(a.name > b.name) {
        return 1;
    }
    return 0;
}

export default function PetsPage({searchParams}: {searchParams: { [key: string]: string } }) {

    if(searchParams.sortBy === 'asc') {
        pets.sort(sortPets);
    } else if(searchParams.sortBy === 'desc') {
        pets.sort(sortPets).reverse();
    }

  return (
    <div>
        <h2>Pets Page</h2>

        <p>This is the pets page!</p>
        <Link href="/pets?sortBy=asc">Sort by ascending</Link>
        <Link href="/pets?sortBy=desc">Sort by descending</Link>
        <Link href="/pets">Remove sort</Link>
        <ul>
            {pets.map((pet) => (
                <li key={pet.slug}>
                    <Link href={`/pets/${pet.slug}`}>
                        {pet.name}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
  );
}
```

This setup allows you to manipulate the data displayed based on URL query strings, offering a dynamic and interactive user experience.

## Conclusion

Mastering advanced routing in Next.js opens up a world of possibilities for building sophisticated, dynamic web applications. By adhering to best practices and leveraging the framework's robust routing features, you can create efficient, user-friendly interfaces that stand out in the competitive world of web development.