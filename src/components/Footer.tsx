import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between text-gray-500">
          <p>Double Degree Club</p>
          <div className="space-x-4">
            <Link href="/privacy" className="hover:text-blue-500">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-blue-500">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
