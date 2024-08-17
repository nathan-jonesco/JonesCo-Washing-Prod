import { Button } from '@/components/Button'
import { HeroPattern } from '@/components/HeroPattern'

export default function NotFound() {
  return (
    <>
      <HeroPattern />
      <div className="mx-auto flex h-screen max-w-2xl flex-col items-center justify-center text-center">
        <p className="text-lg font-bold text-neutral-900 dark:text-white">
          404 - Oops! 🙈
        </p>
        <h1 className="mt-4 text-4xl font-extrabold text-neutral-900 dark:text-white">
          We Lost Our Way!
        </h1>
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
          Looks like we cleaned a bit too much and swept this page off the site. But don’t worry, it’s probably just hiding somewhere safe.
        </p>
        <Button href="/" arrow="right" className="mt-8">
          Take Me Home
        </Button>
      </div>
    </>
  )
}
