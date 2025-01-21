import { Home, ArrowLeft } from 'lucide-react'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'

export default function PageNotFoundPageComponent() {
      const navigate = useNavigate()
      const navigateToHome = () => {
          navigate("/")
      }
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-purple-500">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-xl text-gray-400 mb-8">Oops! The page you're looking for doesn't exist.</p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button onClick={navigateToHome} className="flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
            <Home className="mr-2" size={20} />
            Go Home
          </Button>
          <Button onClick={() => window.history.back()} className="flex items-center justify-center px-6 py-3 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors">
            <ArrowLeft className="mr-2" size={20} />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  )
}

