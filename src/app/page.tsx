import { getPostBySlug, getPosts } from "@/lib/posts";


import {compareDesc, format, parseISO } from 'date-fns';
import {  } from 'contentlayer/generated';

// import { getPosts } from "@/lib/posts";
import Link from "next/link";

// export default async function BlogListPage() {
//   const posts = await getPosts();


// A list of all the blog posts
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
    <main>
      <h1>My NextJS Blog</h1>
      <p>Created by <a href="https://github.com/hortfrancis">Alex Hort-Francis</a>, while learning NextJS 13 with <a href="https://techeducators.co.uk">Tech Educators</a>.</p>

    <ListOfPosts />

    </main>
  );
}


  // function PostCard(post: Post) {
  //   return (
  //     <div className="mb-8">
  //       <h2 className="mb-1 text-xl">
  //         <Link href={post.url} className="text-blue-700 hover:text-blue-900 dark:text-blue-400">
  //           {post.title}
  //         </Link>
  //       </h2>
  //       <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
  //         {format(parseISO(post.date), 'LLLL d, yyyy')}
  //       </time>
  //       <div className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: post.body.html }} />
  //     </div>
  //   )
  // }
  
  // export default function Home() {
  //   const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  
  //   return (
  //     <div className="mx-auto max-w-xl py-8">
  //       <h1 className="mb-8 text-center text-2xl font-black">Next.js + Contentlayer Example</h1>
  //       {posts.map((post, idx) => (
  //         <PostCard key={idx} {...post} />
  //       ))}
  //     </div>
  //   )
  // }

//   return (
//     <main className="flex min-h-screen flex-col items-center justify-around p-24">
//       <h1 className="text-xl">Blog Page</h1>
//       <ul>
//         {posts.map((post) => {
//           return (
//             <div key={post.slug}>
//               <li>
//                 <Link href={`/blog/${post.slug}`}>{post.title}</Link>
//               </li>
//             </div>
//           );
//         })}
//       </ul>
//     </main>
//   );
// }