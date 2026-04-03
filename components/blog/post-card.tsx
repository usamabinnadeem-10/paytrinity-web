import Link from "next/link"
import type { PostListItem } from "@/lib/blog"

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function PostCard({ post }: { post: PostListItem }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:border-white/20 hover:bg-white/[0.06]"
    >
      <div className="mb-3 flex items-center gap-3 text-sm text-gray-400">
        <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
        {(post.tags ?? []).slice(0, 2).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs text-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-white group-hover:text-[#D4A574] transition-colors">
        {post.title}
      </h3>
      <p className="mb-4 text-sm leading-relaxed text-gray-400 line-clamp-2">
        {post.description}
      </p>
      <span className="text-sm font-medium text-[#D4A574]">
        Read post &rarr;
      </span>
    </Link>
  )
}
