'use client'
import { useState } from 'react'
import { ReactNode } from 'react'
import Image from 'next/image'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  
  type ExternalLinkProps = {
    href: string;
    children: ReactNode;
    className?: string;
  };
  
  // Reusable external link wrapper
  const ExternalLink = ({ href, children, className }: ExternalLinkProps) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  )

  const projects = [
    {
      id: 1,
      title: "Web-Portfolio",
      description: "My personal web-portfolio built with Next.js, TailwindCSS, and React components",
      image: "/projects_photo/web-portfolio.png",
      technologies: ["Tailwind CSS", "React", "Next.js", "TypeScript"],
      categories: ["frontend"],
      demoUrl: "#",
      githubUrl: "https://github.com/yandersonpark1/yandersonpark1-portfolio-web",
      featured: true
    },
    {
      id: 2,
      title: "Baseball Data Analysis and Coaching Tool",
      description: "A ETL FastAPI microservice baseball data analysis pipeline for analyzing pitchers' pitches beyond basic metrics giving meaningful insights.",
      image: "/projects_photo/pitching_project.jpeg",
      technologies: ["Python", "Pandas", "MongodDB", "FastAPI", "React"],
      categories: ["fullstack"],
      demoUrl: "https://www.youtube.com/watch?v=fHkdFIOzQ_w",
      githubUrl: "https://github.com/yandersonpark1/BSBL-Scout",
      featured: true
    },
    {
      id: 3,
      title: "Machine Learning Protein Design Data Analysis",
      description: "A data analysis pipeline for analyzing protein design results from various ML models including AlphaFold3 and LigandMPNN.",
      image: "/projects_photo/protein_project.webp",
      technologies: ["Python", "Pandas", "AlphaFold3", "PyMOL", "LigandMPNN"],
      categories: ["biochemistry", "ai"],
      demoUrl: "#",
      githubUrl: "https://github.com/yandersonpark1/Protein-Design-Research-",
      featured: false
    },
  ]

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'frontend', label: 'Frontend', count: projects.filter(p => p.categories.includes('frontend')).length },
    { id: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.categories.includes('fullstack')).length },
    { id: 'ai', label: 'AI/ML', count: projects.filter(p => p.categories.includes('ai')).length },
    { id: 'biochemistry', label: 'BioChemistry', count: projects.filter(p => p.categories.includes('biochemistry')).length },
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.categories.includes(activeFilter))

  return (
    <section id="projects" className="py-20 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {`Here's a showcase of my recent work. Each project represents a unique challenge 
            and demonstrates different aspects of my development skills.`}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label}
              <span className="ml-2 text-xs opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 ${
                project.featured ? 'ring-2 ring-yellow-400' : ''
              }`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-10 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                  ⭐ Featured
                </div>
              )}

              {/* Project Image */}
              <div className="relative overflow-hidden h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <ExternalLink
                    href={project.demoUrl}
                    className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                  >
                    Live Demo
                  </ExternalLink>
                  
                  <ExternalLink
                    href={project.githubUrl}
                    className="bg-transparent border-2 border-white text-white px-4 py-2 rounded-lg font-medium hover:bg-white hover:text-gray-900 transition-colors"
                  >
                    GitHub
                  </ExternalLink>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            {`Interested in seeing more of my work?`}
          </p>
          
          <ExternalLink
            href="https://github.com/yandersonpark1"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            View All Projects on GitHub
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </ExternalLink>
        </div>
      </div>
    </section>
  )
}
