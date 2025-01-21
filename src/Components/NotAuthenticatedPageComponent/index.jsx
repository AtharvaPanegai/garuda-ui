import { LogIn, ArrowLeft } from 'lucide-react'

export default function NotAuthenticatedPageComponent() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-purple-500">
          <LogIn className="inline-block mr-4" size={56} />
        </h1>
        <h2 className="text-3xl font-semibold mb-4">Not Authenticated</h2>
        <p className="text-xl text-gray-400 mb-8">Please log in to access this page.</p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="/signin" className="flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
            <LogIn className="mr-2" size={20} />
            Log In
          </a>
          <button onClick={() => window.history.back()} className="flex items-center justify-center px-6 py-3 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors">
            <ArrowLeft className="mr-2" size={20} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  )
}

