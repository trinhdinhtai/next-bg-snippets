import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <>
      <div>
        <div className="relative mx-auto h-screen w-full max-w-7xl px-6 md:px-8 lg:px-12">
          <div className="relative mx-auto flex max-w-2xl flex-col items-center">
            <a
              href="https://github.com/trinhdinhtai/next-bg-snippets"
              target="_blank"
              rel="noopener noreferrer"
              className="my-8 flex"
            >
              <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a9a9a9_0%,#0c0c0c_50%,#a9a9a9_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#171717_0%,#737373_50%,#171717_100%)]" />
                <div className="inline-flex h-full w-full cursor-pointer justify-center rounded-full bg-background px-3 py-1 text-xs font-medium leading-5 backdrop-blur-xl">
                  New snippets ⚡️
                  <span className="inline-flex items-center pl-2">
                    Read more <ArrowRight className="pl-0.5" size={16} />
                  </span>
                </div>
              </span>
            </a>

            <h2 className="text-center text-3xl font-medium text-gray-900 dark:text-gray-50 sm:text-6xl">
              Collection of modern
              <span className="animate-text-gradient inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
                background snippets
              </span>
            </h2>

            <p className="mt-6 text-center text-lg leading-6 text-gray-600 dark:text-gray-200">
              Ready-to-use, simply copy and paste into your next project. All
              snippets crafted with Tailwind CSS and{" "}
              <span className="cursor-pointer opacity-70">Vanilla CSS</span> for
              easy integration.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
