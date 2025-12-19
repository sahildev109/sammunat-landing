// src/app/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="py-10 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Sammunat. All rights reserved.
        </p>

        <div className="flex gap-4 text-sm text-gray-600">
          <a href="#" className="hover:text-gray-900">LinkedIn</a>
          <a href="#" className="hover:text-gray-900">Instagram</a>
          <a href="#" className="hover:text-gray-900">Contact</a>
        </div>
      </div>
    </footer>
  );
}
