import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F0E1A] text-white">
      <div className="text-center px-6">
        <h1 className="text-2xl font-semibold">Page Not Found</h1>
        <p className="text-white/60 text-sm mt-2">The page you are looking for does not exist.</p>
        <Link
          to="/"
          className="inline-block mt-4 text-indigo-400 hover:text-indigo-300 text-sm font-medium"
        >
          Go back home
        </Link>
      </div>
    </div>
  )
}
