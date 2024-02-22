import { ReactNode } from "react"

interface PlayGroundProps {
  children: ReactNode
}

export default function Playground({ children }: PlayGroundProps) {
  return (
    <div className="relative min-h-[300px] w-full overflow-hidden rounded-lg ring-1 ring-slate-900/10">
      {children}
    </div>
  )
}
