import Layout from '../components/Layout'

export const metadata = {
  title: 'About - John Doe',
  description: 'Learn more about John Doe',
}

export default function About() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-gray-300 w-full h-64 rounded-lg mb-6"></div>
              </div>
              
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  I&apos;m a dedicated software developer with a passion for creating 
                  innovative web applications. My journey in programming started 
                  during my computer science studies, where I discovered my love 
                  for problem-solving and building digital solutions.
                </p>
                
                <p className="text-lg text-gray-700 mb-6">
                  I specialize in modern web technologies including React, Next.js, 
                  Node.js, and various databases. I enjoy working on both frontend 
                  and backend development, always striving to create seamless user 
                  experiences.
                </p>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {['JavaScript', 'React', 'Next.js', 'Node.js', 'Python', 'SQL', 'Git', 'Tailwind CSS'].map((skill) => (
                      <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Education</h3>
                  <p className="text-gray-700">
                    Bachelor of Science in Computer Science<br />
                    University Name, 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}