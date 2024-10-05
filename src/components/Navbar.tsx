import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white shadow-lg max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16 text-black">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold">
            Double Degree Club
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/about" className="hover:text-blue-500">
            About
          </Link>
          <Link href="/events" className="hover:text-blue-500">
            Events
          </Link>
          <Link href="/contact" className="hover:text-blue-500">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
