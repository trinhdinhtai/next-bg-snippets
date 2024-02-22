"use client"

import { ReactNode } from "react"

import { Button } from "@/components/ui/button"

interface PlayGroundProps {
  children: ReactNode
}

export default function Playground({ children }: PlayGroundProps) {
  const handlePreview = () => {}
  const handleCopy = () => {}

  return (
    <div className="relative min-h-[300px] w-full overflow-hidden rounded-lg ring-1 ring-slate-900/10">
      <div className="absolute left-4 top-4 z-10 cursor-pointer">
        <div className="flex gap-4">
          <Button size="xs" onClick={handlePreview}>
            Preview
          </Button>
          <Button size="xs" onClick={handleCopy}>
            Copy Code
          </Button>
        </div>
      </div>
      {children}
    </div>
  )
}
