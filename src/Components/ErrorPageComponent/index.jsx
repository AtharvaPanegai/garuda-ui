import { AlertTriangle, RefreshCcw, Home, UserIcon } from 'lucide-react'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'

export default function ErrorPageComponent() {
    const navigate = useNavigate()
    const navigateToHome = () => {
        navigate("/")
    }

    const reFresh = () => {
        window.location.reload();
    }
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-purple-500">
          <AlertTriangle className="inline-block mr-4" size={56} />
        </h1>
        <h2 className="text-3xl font-semibold mb-4">Oops! Something Went Wrong</h2>
        <p className="text-xl text-gray-400 ">We're sorry, but an error occurred while processing your request.</p>
        <p className="text-xl text-gray-400 mb-8">Try Signing in again</p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button onClick={()=>{navigate("/signin")}} className="flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
            <UserIcon />
            Sign In
          </Button>
          <Button onClick={navigateToHome} className="flex items-center justify-center px-6 py-3 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors">
            <Home className="mr-2" size={20} />
            Go Home
          </Button>
        </div>
      </div>
    </div>
  )
}

