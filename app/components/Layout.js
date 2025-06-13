'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Layout({ children }) {
  const pathname = usePathname()
  
  const isActive = (path) => pathname === path

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-bold text-gray-900">
              John Doe
            </Link>
            
            <div className="flex space-x-8">
              <Link 
                href="/" 
                className={`transition ${
                  isActive('/') 
                    ? 'text-blue-600 font-medium' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className={`transition ${
                  isActive('/about') 
                    ? 'text-blue-600 font-medium' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                About
              </Link>
              <Link 
                href="/projects" 
                className={`transition ${
                  isActive('/projects') 
                    ? 'text-blue-600 font-medium' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Projects
              </Link>
            </div>
          </div>
        </div>
      </nav>
      
      <main>{children}</main>
      
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 John Doe. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://github.com/yourusername" className="hover:text-blue-400 transition">
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourusername" className="hover:text-blue-400 transition">
              LinkedIn
            </a>
            <a href="mailto:john@example.com" className="hover:text-blue-400 transition">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}