import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-sm shadow-sm dark:bg-gray-950/80">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          {/*<MountainIcon className="h-6 w-6" />*/}
          <span className="text-lg font-bold">NEXT Console</span>
        </Link>
        {/*<nav className="hidden space-x-6 md:flex">*/}
        {/*  <Link*/}
        {/*    href="#"*/}
        {/*    className="text-sm font-medium hover:text-gray-900 dark:hover:text-gray-50"*/}
        {/*    prefetch={false}*/}
        {/*  >*/}
        {/*    Home*/}
        {/*  </Link>*/}
        {/*  <Link*/}
        {/*    href="#"*/}
        {/*    className="text-sm font-medium hover:text-gray-900 dark:hover:text-gray-50"*/}
        {/*    prefetch={false}*/}
        {/*  >*/}
        {/*    About*/}
        {/*  </Link>*/}
        {/*  <Link*/}
        {/*    href="#"*/}
        {/*    className="text-sm font-medium hover:text-gray-900 dark:hover:text-gray-50"*/}
        {/*    prefetch={false}*/}
        {/*  >*/}
        {/*    Products*/}
        {/*  </Link>*/}
        {/*  <Link*/}
        {/*    href="#"*/}
        {/*    className="text-sm font-medium hover:text-gray-900 dark:hover:text-gray-50"*/}
        {/*    prefetch={false}*/}
        {/*  >*/}
        {/*    Pricing*/}
        {/*  </Link>*/}
        {/*  <Link*/}
        {/*    href="#"*/}
        {/*    className="text-sm font-medium hover:text-gray-900 dark:hover:text-gray-50"*/}
        {/*    prefetch={false}*/}
        {/*  >*/}
        {/*    Contact*/}
        {/*  </Link>*/}
        {/*</nav>*/}
      </div>
    </header>
  )
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
