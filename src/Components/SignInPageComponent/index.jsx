import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-[#3B0764] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-black/50 backdrop-blur-md p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Sign In to Radar</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#9333EA]"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#9333EA]"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#9333EA] to-[#C084FC] text-white py-2 px-4 rounded-md hover:from-[#7E22CE] hover:to-[#A855F7] focus:outline-none focus:ring-2 focus:ring-[#9333EA] focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Sign In
              </button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <a href="/forgot-password" className="text-sm text-[#9333EA] hover:underline">
              Forgot your password?
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-400 text-center">
            Don't have an account?{' '}
            <a href="/signup" className="text-[#9333EA] hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}