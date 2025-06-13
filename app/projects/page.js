'use client'
import { useState } from 'react'
import Layout from '../components/Layout'

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MongoDB",
    category: "personal",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "https://github.com/yourusername/ecommerce-platform",
    demo: "https://your-ecommerce-demo.com"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates",
    category: "personal",
    technologies: ["Next.js", "Socket.io", "PostgreSQL"],
    link: "https://github.com/yourusername/task-manager",
    demo: "https://your-task-manager.com"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather application with location-based forecasts",
    category: "personal",
    technologies: ["React", "OpenWeather API", "Chart.js"],
    link: "https://github.com/yourusername/weather-dashboard",
    demo: "https://your-weather-app.com"
  },
  {
    id: 4,
    title: "AI-Powered Content Generator",
    description: "Capstone project utilizing machine learning for content creation",
    category: "capstone",
    technologies: ["Python", "TensorFlow", "Flask", "React"],
    link: "https://github.com/yourusername/ai-content-generator",
    demo: "https://your-capstone-demo.com"
  },
  {
    id: 5,
    title: "Database Design Project",
    description: "Comprehensive database system for a library management system",
    category: "coursework",
    technologies: ["SQL", "MySQL", "PHP"],
    link: "https://github.com/yourusername/library-db",
    demo: null
  },
  {
    id: 6,
    title: "Mobile App Development",
    description: "Cross-platform mobile app for expense tracking",
    category: "coursework",
    technologies: ["React Native", "Firebase"],
    link: "https://github.com/yourusername/expense-tracker",
    demo: null
  },
  {
    id: 7,
    title: "Data Structures Implementation",
    description: "Implementation of various data structures and algorithms in Java",
    category: "coursework",
    technologies: ["Java", "JUnit", "Algorithms"],
    link: "https://github.com/yourusername/data-structures",
    demo: null
  }
]

export default function Projects() {
  const [filter, setFilter] = useState('all')
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">My Projects</h1>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg transition ${
                  filter === 'all' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                All Projects
              </button>
              <button
                onClick={() => setFilter('personal')}
                className={`px-4 py-2 rounded-lg transition ${
                  filter === 'personal' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Personal Projects
              </button>
              <button
                onClick={() => setFilter('capstone')}
                className={`px-4 py-2 rounded-lg transition ${
                  filter === 'capstone' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Capstone Project
              </button>
              <button
                onClick={() => setFilter('coursework')}
                className={`px-4 py-2 rounded-lg transition ${
                  filter === 'coursework' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Course Work
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                  <div className="bg-gradient-to-br from-blue-100 to-purple-100 h-48 flex items-center justify-center">
                    <div className="text-6xl text-blue-400">💻</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        project.category === 'personal' ? 'bg-green-100 text-green-800' :
                        project.category === 'capstone' ? 'bg-purple-100 text-purple-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {project.category}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition font-medium"
                      >
                        View Code →
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-600 hover:text-green-800 transition font-medium"
                        >
                          Live Demo →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No projects found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}