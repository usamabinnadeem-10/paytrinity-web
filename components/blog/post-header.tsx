import Link from "next/link"

interface PostHeaderProps {
  title: string
  description: string
  publishedAt: string
  updatedAt?: string | null
  tags: string[] | null
  author: string
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function PostHeader({
  title,
  description,
  publishedAt,
  updatedAt,
  tags,
  author,
}: PostHeaderProps) {
  return (
    <header className="border-b border-white/10 pb-8 mb-10">
      <nav className="mb-6 flex items-center gap-2 text-sm text-gray-400">
        <Link href="/blog" className="hover:text-white transition-colors">
          Blog
        </Link>
        <span>/</span>
        <span className="text-gray-500 truncate max-w-[250px]">{title}</span>
      </nav>

      {(tags ?? []).length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {(tags ?? []).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
        {title}
      </h1>
      <p className="text-lg text-gray-400 leading-relaxed mb-6 max-w-2xl">
        {description}
      </p>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-400">
        <span className="text-gray-300">{author}</span>
        <span className="text-gray-600">|</span>
        <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>
        {updatedAt && (
          <>
            <span className="text-gray-600">|</span>
            <time dateTime={updatedAt} className="text-gray-500">
              Updated {formatDate(updatedAt)}
            </time>
          </>
        )}
      </div>
    </header>
  )
}
