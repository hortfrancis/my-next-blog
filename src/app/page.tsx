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
    <div>
      <ul>
        {getPosts().map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
              
                <h2>{post.title}</h2>
                <time dateTime={post.date}>
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
      <h1>My NextJS Blog</h1>

      <p>I made this blog while studying NextJS 13, with <a href="https://techeducators.co.uk">Tech Educators</a>, in June 2023.</p>
      <p>This site is hosted on <a href="https://vercel.com/">Vercel</a>, and I used <a href="https://tailwindcss.com/">Tailwind</a> to style it.</p>
      <p>Feel free to peruse the blog posts below if you would like to find out more about how I made it, and what I learned! 😊</p>

      <h2>Blog posts</h2>
      <ListOfPosts />

    </>

  );
}