import type { Metadata } from "next"
import { notFound } from "next/navigation"
import {
  POST_BY_SLUG_QUERY,
  POST_SLUGS_QUERY,
  type PostDetail,
} from "@/lib/blog"
import { PostBody } from "@/components/blog/post-body"
import { PostFaq } from "@/components/blog/post-faq"
import { PostFooter } from "@/components/blog/post-footer"
import { PostHeader } from "@/components/blog/post-header"
import { JsonLd } from "@/components/JsonLd"
import { urlFor } from "@/sanity/lib/image"
import { sanityFetch } from "@/sanity/lib/live"

type Params = { slug: string }

// Pre-render all known blog posts at build time
export async function generateStaticParams() {
  const { data } = await sanityFetch({
    query: POST_SLUGS_QUERY,
    perspective: "published",
    stega: false,
  })
  return data
}

// Generate SEO tags for each post
export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const { data: post } = await sanityFetch({
    query: POST_BY_SLUG_QUERY,
    params: { slug },
    stega: false,
  })
  if (!post) return {}

  const typedPost = post as PostDetail

  return {
    title: typedPost.seoTitle ?? typedPost.title,
    description: typedPost.description,
    openGraph: {
      title: typedPost.seoTitle ?? typedPost.title,
      description: typedPost.description,
      url: `https://paytrinity.co/blog/${slug}`,
      type: "article",
      publishedTime: typedPost.publishedAt,
      modifiedTime: typedPost.updatedAt ?? typedPost.publishedAt,
      authors: [typedPost.author],
      ...(typedPost.ogImage
        ? {
            images: [
              urlFor(typedPost.ogImage).width(1200).height(630).url(),
            ],
          }
        : {}),
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug } = await params
  const { data: post } = await sanityFetch({
    query: POST_BY_SLUG_QUERY,
    params: { slug },
  })
  if (!post) notFound()

  const typedPost = post as PostDetail

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: typedPost.title,
    description: typedPost.description,
    author: {
      "@type": "Person",
      name: typedPost.author,
      url: "https://paytrinity.co/about",
    },
    publisher: {
      "@type": "Organization",
      name: "PayTrinity",
      url: "https://paytrinity.co",
    },
    datePublished: typedPost.publishedAt,
    dateModified: typedPost.updatedAt ?? typedPost.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://paytrinity.co/blog/${slug}`,
    },
  }

  const faqJsonLd =
    typedPost.faq && typedPost.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: typedPost.faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null

  return (
    <section className="bg-[#020410] text-white py-16 px-6">
      <article className="mx-auto max-w-3xl">
        <JsonLd data={blogPostingJsonLd} />
        {faqJsonLd && <JsonLd data={faqJsonLd} />}
        <PostHeader
          title={typedPost.title}
          description={typedPost.description}
          publishedAt={typedPost.publishedAt}
          updatedAt={typedPost.updatedAt}
          tags={typedPost.tags}
          author={typedPost.author}
        />
        <PostBody body={typedPost.body} />
        <PostFaq faq={typedPost.faq} />
        <PostFooter />
      </article>
    </section>
  )
}
