import { PortableText, type PortableTextComponents } from "@portabletext/react"
import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"
import type { PortableTextBlock } from "next-sanity"

interface PostBodyProps {
  body: PortableTextBlock[]
}

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null
      return (
        <figure className="my-8">
          <Image
            src={urlFor(value).width(800).auto("format").url()}
            alt={value.alt || ""}
            width={800}
            height={450}
            className="w-full rounded-lg"
          />
          {value.caption && (
            <figcaption>{value.caption}</figcaption>
          )}
        </figure>
      )
    },
  },
  marks: {
    link: ({ children, value }) => {
      const isExternal = value?.href && !value.href.startsWith("/")
      return (
        <a
          href={value?.href}
          rel={isExternal ? "noreferrer noopener" : undefined}
          target={isExternal ? "_blank" : undefined}
        >
          {children}
        </a>
      )
    },
  },
}

export function PostBody({ body }: PostBodyProps) {
  if (!body) return null

  return (
    <div className="prose-blog">
      <PortableText value={body} components={components} />
    </div>
  )
}
