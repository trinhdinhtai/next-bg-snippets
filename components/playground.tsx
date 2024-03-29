"use client"

import { Dispatch, ReactElement, ReactNode, SetStateAction } from "react"
import { useTheme } from "next-themes"
import ReactDOMServer from "react-dom/server"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"

type Theme = "dark" | "light" | "system"

interface PlayGroundProps {
  children: ReactElement
  theme: Theme
  setPreview: Dispatch<SetStateAction<ReactNode>>
}

export default function Playground({
  children,
  theme,
  setPreview,
}: PlayGroundProps) {
  const { setTheme } = useTheme()

  const handlePreview = () => {
    setTheme(theme)
    setPreview(children)
  }

  const handleCopy = () => {
    const code = ReactDOMServer.renderToString(children)

    navigator.clipboard.writeText(code)
    toast.success("Copied to clipboard")
  }

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
