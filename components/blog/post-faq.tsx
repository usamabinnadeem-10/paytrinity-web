import type { FaqItem } from "@/lib/blog"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface PostFaqProps {
  faq: FaqItem[] | null
}

export function PostFaq({ faq }: PostFaqProps) {
  if (!faq || faq.length === 0) return null

  return (
    <section className="mt-12 border-t border-white/10 pt-10">
      <h2 className="text-2xl font-bold text-white mb-6">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {faq.map((item) => (
          <AccordionItem
            key={item._key}
            value={item._key}
            className="border-white/10"
          >
            <AccordionTrigger className="text-left text-white hover:no-underline hover:text-[#D4A574]">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-400 leading-relaxed">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
