import Link from "next/link"

export function PostFooter() {
  return (
    <footer className="mt-12 border-t border-white/10 pt-10">
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-8 text-center">
        <h3 className="text-xl font-semibold text-white mb-3">
          Ready to start your US business?
        </h3>
        <p className="text-gray-400 mb-6 max-w-md mx-auto">
          PayTrinity helps international founders with formation, tax,
          compliance, and banking.
        </p>
        <Link
          href="/contact"
          className="inline-block rounded-lg bg-white text-[#020410] px-6 py-3 text-sm font-bold shadow-sm hover:bg-gray-100 transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
        >
          Get in Touch
        </Link>
      </div>
    </footer>
  )
}
