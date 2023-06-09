import { getPostBySlug, getPosts } from "@/lib/posts";
import { notFound } from "next/navigation";

export function generateStaticParams() {

  return getPosts().map((post) => {
    slug: post.slug;
  });
}

type BlogPostParams = { params: { slug: string } };

export default async function BlogPostPage({ params }: BlogPostParams) {

  const post =  getPostBySlug(params.slug);

  // Handle 404 errors from undefined slugs 
  if (!post) {
    notFound();
  }

  return (
    <main >
      {/* Insert the markdown blog post as HTML (generated by Contentlayer)  */}
      <div dangerouslySetInnerHTML={{ __html: post.body.html }}></div>
    </main>
  );
}