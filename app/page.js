import Link from 'next/link'
import Layout from './components/Layout'

export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Hi, I&#39;m <span className="text-blue-600">John Doe</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              A passionate full-stack developer creating innovative solutions 
              and bringing ideas to life through code.
            </p>
            <div className="flex justify-center space-x-4">
              <Link 
                href="/about" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                About Me
              </Link>
              <Link 
                href="/projects" 
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}