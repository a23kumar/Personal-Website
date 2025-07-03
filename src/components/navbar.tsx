import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white p-4 shadow-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <Link href="/" className="text-lg font-semibold">
          Aditya
        </Link>
        <div className="flex space-x-4">
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            Home
          </Link>
          <Link href="#about" className="text-gray-600 hover:text-gray-900">
            About
          </Link>
          <Link href="#projects" className="text-gray-600 hover:text-gray-900">
            Projects
          </Link>
          <Link href="#contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
