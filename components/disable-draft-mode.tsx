"use client"

import { useIsPresentationTool } from "next-sanity/hooks"

export function DisableDraftMode() {
  const isPresentationTool = useIsPresentationTool()

  if (isPresentationTool) return null

  return (
    <a
      href="/api/draft-mode/disable"
      className="fixed bottom-4 right-4 z-50 rounded-lg bg-white text-[#020410] px-4 py-2 text-sm font-bold shadow-lg hover:bg-gray-100 transition-all"
    >
      Disable Draft Mode
    </a>
  )
}
