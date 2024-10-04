export function Footer() {
  return (
    <footer className="bg-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <p className="text-gray-500">
            Double Degree Club
          </p>
          <div className="space-x-4">
            <a href="/privacy" className="hover:text-blue-500">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-blue-500">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
