import type { Metadata } from "next"
import { ALL_POSTS_QUERY, type PostListItem } from "@/lib/blog"
import { PostCard } from "@/components/blog/post-card"
import { sanityFetch } from "@/sanity/lib/live"
import { JsonLd } from "@/components/JsonLd"
import { generateBreadcrumbs } from "@/lib/breadcrumbs"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Guides, insights, and updates for international founders building US businesses — from formation to compliance.",
  openGraph: {
    title: "Blog | PayTrinity",
    description:
      "Guides, insights, and updates for international founders building US businesses.",
    url: "https://paytrinity.co/blog",
  },
}

export default async function BlogPage() {
  const { data: posts } = await sanityFetch({ query: ALL_POSTS_QUERY })
  const typedPosts = posts as PostListItem[]

  return (
    <>
      <JsonLd data={generateBreadcrumbs("/blog", { blog: "Blog" })} />
      <section className="bg-[#020410] text-white py-20 px-6">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl">
            Guides, insights, and updates for international founders building US
            businesses.
          </p>

          {typedPosts.length === 0 ? (
            <p className="text-gray-500">Posts coming soon.</p>
          ) : (
            <div className="grid gap-6">
              {typedPosts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
