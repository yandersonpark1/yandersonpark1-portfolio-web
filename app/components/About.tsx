'use client'
import Image from 'next/image'

export default function About() {
  const techStack = {
    languages: [
      { name: "Python", icon: "/icons/Python.png", color: "bg-blue-500" },
      { name: "Java", icon: "/icons/java.png", color: "bg-red-900" },
      { name: "JavaScript", icon: "/icons/javascript.png", color: "bg-yellow-600" },
      { name: "TypeScript", icon: "/icons/typescript.png", color: "bg-blue-600" },
      { name: "Rust", icon: "/icons/rust.png", color: "bg-gray-700" },
      { name: "Bash", icon: "/icons/bash.png", color: "bg-gray-400" },
      { name: "SQL", icon: "/icons/sql.png", color: "bg-orange-300" },
    ],
    frontend: [
      { name: "React", icon: "/icons/react.png", color: "bg-blue-700" },
      { name: "Next.js", icon: "/icons/next-js.png", color: "bg-gray-500" },
      { name: "Tailwind CSS", icon: "/icons/tailwind.png", color: "bg-cyan-400" },
    ],
    backend: [
      { name: "FastAPI", icon: "/icons/fastapi.png", color: "bg-green-800" },
      { name: "Node.js", icon: "/icons/nodejs.jpg", color: "bg-green-600" },
      { name: "MongoDB", icon: "/icons/mongodb.png", color: "bg-green-400" },
      { name: "MySQL", icon: "/icons/mysql.png", color: "bg-blue-300" },
      { name: "PostgreSQL", icon: "/icons/postgresql.png", color: "bg-blue-700" },
      { name: "Oracle", icon: "/icons/oracle.png", color: "bg-red-600" },
    ],
    tools: [
      { name: "Docker", icon: "/icons/docker.png", color: "bg-blue-300" },
      { name: "AWS", icon: "/icons/aws.png", color: "bg-orange-400" },
      { name: "Git", icon: "/icons/git.png", color: "bg-red-900" },
      { name: "Linux", icon: "/icons/linux.webp", color: "bg-black" },
      { name: "Slurm", icon: "/icons/slurm.jpg", color: "bg-blue-500" },
    ],
  };

  const experiences = [
    {
      title: "Machine Learning Engineering Intern",
      company: "Amazing Energy Solutions",
      period: "January 2026 - Present",
      company_url: "https://theamazingenergy.com/",
      description: ["Designing and implementing data pipelines to support ML training, evaluation, and inference workflows", "Building automated ingestion and transformation pipelines to convert raw data into model-ready datasets"]
    },
    {
      title: "Full Stack Software Engineer",
      company: "Oberlin College",
      period: "Jan 2025 - May 2025; Sept 2025 - Dec 2025",
      company_url: "https://www.oberlin.edu/",
      description: ["Delivered an end-to-end analytics platform supporting a 6.8% improvement in athletic performance through actionable insights", "Engineered a high-concurrency FastAPI microservice processing real-time telemetry, serving 100+ daily requests at <120 ms average latency", "Automated cloud data ingestion and transformation pipelines, increasing data availability from weekly to daily", "Built interactive React dashboards with filters and visualizations to support real-time analysis by coaches and staff", "Containerized services with Docker and initiated deployment on AWS, enabling scalable access and future expansion"]
    },
    {
      title: "Machine Learning Engineering Intern",
      company: "Johns Hopkins University / Rosetta Commons",
      period: "May 2025 - Aug 2025",
      company_url: "https://rosettacommons.org/",
      description: ["Built an automated ML-driven molecular design pipeline in Python, improving drug design confidence metrics by ~4% per iteration", "Leveraged HPC/GPU infrastructure to improve reproducibility, fault tolerance, and throughput of large-scale experiments", "Implemented distributed GPU job scheduling using SLURM and Bash, reducing end-to-end pipeline runtime by ~10%","Tuned and evaluated ML models, presenting results at SRC to improve predictive accuracy and downstream design outcomes"]
    },
    {
      title: "BackEnd Software Engineer",
      company: "SplashBI",
      period: "May 2024 - August 2024",
      company_url: "https://splashbi.com/",
      description: ["Built automated ETL pipelines migrating Oracle Cloud and MySQL data into analytics schemas, cutting processing time by ~50%", "Designed relational SQL schemas and stored procedures, reducing KPI query latency by ~25%", "Developed and integrated REST APIs powering internal analytics dashboards for 8+ enterprise clients", "Collaborated with product and analytics teams to deploy backend services used in production environments"]
    },
  ]

  type Tech = {
    name: string;
    icon: string;
    color: string
  };

  const TechBadge: React.FC<{ tech: Tech }> = ({ tech }) => (
    <div
      className={`flex items-center space-x-2 ${tech.color} text-white px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-default`}
    >
      <Image
        src={tech.icon}
        alt={tech.name}
        width={20}
        height={20}
        className="object-contain"
      />
      <span>{tech.name}</span>
    </div>
  );

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {"I'm an innovative engineer who loves transforming data into insights and real-time analysis for real-world change. Here's my journey so far!"}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Personal Info */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">My Story</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  {"I began programming in college where I initially struggled, even failing, but through persistence and practice I began to excel. Through my academic career, thus far I have developed my programming skills through building projects in Python, Java, Rust, and Racket. Through my chemistry and biology coursework, I have gained a strong foundation in data analysis and scientific computing, which has fueled my passion for leveraging technology to solve complex problems. My unique background in both computer science and biochemistry has given me a creative design approach to any engineering problem."}
                </p>
                <p>
                  {"In my professional career, I have been blessed with the opportunity to gain valuable experience through 4 internships, one full time role as a SWE for my college's atheltic department, and a technical lead in a biotech startup. Through these experiences, I have learned how to apply my skills in real-world settings, collaborate with diverse teams, and continuously improve my craft. I love the challenge of turning complex problems into simple, elegant solutions, and I'm passionate about leaving my mark in this world through my work."}
                </p>
                <p>
                  {"Outside of programming, I'm currently sidequesting as a computational biology researcher with the Goldman Lab at Oberlin College, engineering evolutionary proteins with machine learning models. I'm also a collegiate varsity baseball coach at Oberlin College, leading a team of 40 players and helping pitchers improve their biomechanics through mobility and strength training programs."}
                </p>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Tech Stack</h3>

              {/* Languages */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.languages.map((tech, index) => (
                    <TechBadge key={index} tech={tech} />
                  ))}
                </div>
              </div>

              {/* Frontend */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.frontend.map((tech, index) => (
                    <TechBadge key={index} tech={tech} />
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Backend & Database</h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.backend.map((tech, index) => (
                    <TechBadge key={index} tech={tech} />
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Tools & Platforms</h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.tools.map((tech, index) => (
                    <TechBadge key={index} tech={tech} />
                  ))}
                </div>
              </div>
            </div>

            {/* Testimony Box */}
            <div className="bg-white rounded-2xl shadow-xl p-8 mt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Testimonials</h3>
              <div className="space-y-4 text-gray-600">
                <blockquote className="italic border-l-4 border-blue-500 pl-4">
                  {"Yongwoo quickly adapted to our work environment and took on complex data engineering tasks with enthusiasm and determination. His ability to process, analyze, and extract meaningful insights from large datasets was truly impressive. He showcased strong programming skills, particularly in data manipulation and visualization, which helped our team make informed decisions based on data-driven insights. Furthermore, his attention to detail and commitment to accuracy ensured the integrity of our data models and reports."}
                  <span className="block mt-2 font-semibold text-gray-900">— Neevan Miglani, CEO SplashBI</span>
                </blockquote>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Personal Details */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600">📍 Atlanta, GA (willing to relocate)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">💼 Looking for Internship Opportunities in ML or SWE</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-600">🎓 Double Major in Computer Science + BioChemistry</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-600">⚾️ Collegiate BSBL Coach</span>
                </div>
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Experience</h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-gray-200 last:border-l-0">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                    <div className="pb-6">
                      <h4 className="font-semibold text-lg text-gray-900">{exp.title}</h4>
                      <a
                        href={exp.company_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 no-underline"
                      >
                        {exp.company}
                      </a>
                      <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        {exp.description.map((bullet, i) => (
                          <li key={i}>{bullet}</li>
                        ))}
                      </ul>

                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
