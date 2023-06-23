import Link from "next/link";
import { getPosts } from "@/lib/posts";
import {compareDesc, format, parseISO } from 'date-fns';


/**
 * Renders a list of posts as a <ul> (unordered list).
 * Uses the `getPosts()` function, imported from `/lib/posts.ts`.
 * @returns {JSX.Element} The rendered list of posts.
 */
function ListOfPosts() {
  return (
    <div className="space-y-4">
      <ul>
        {getPosts().map((post) => (
          <li key={post.slug} className="mb-6">
            <Link href={`/posts/${post.slug}`} className="hover:text-blue-900 text-blue-600">
                <h2 className="font-bold text-2xl">{post.title}</h2>
                <time dateTime={post.date} className="text-gray-500">
                  {format(parseISO(post.date), 'LLL d, yyyy')}
                </time>
        
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default function HomePage() {

  return (
      
    <>
      <h1 className="text-4xl font-bold mb-2">My Next Blog</h1>
      <p className="text-gray-500 mb-6">By Alex Hort-Francis</p>

      <p className="text-lg mb-4">I made this blog while studying <a href="https://nextjs.org/blog/next-13" className="hover:text-blue-900"><strong>Next.js 13</strong></a>, with <a href="https://techeducators.co.uk" className="font-medium hover:text-blue-900">Tech Educators</a>, in June 2023.</p>
      <p className="text-lg mb-4">This site is hosted on <a href="https://vercel.com/" className="font-medium hover:text-blue-900">Vercel</a>, and I used <a href="https://tailwindcss.com/" className="font-medium hover:text-blue-900">Tailwind</a> to style it.</p>
      <p className="text-lg mb-4">Feel free to peruse the blog posts below if you would like to find out more about how I made it, and what I learned! 😊</p>

      <h2 className="text-2xl font-bold mt-8 mb-6">Blog posts</h2>
      <ListOfPosts />

    </>

  );
}