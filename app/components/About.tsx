'use client'
import Image from 'next/image'

export default function About() {
  const techStack = {
    languages: [
      { name: "Python", icon: "/icons/Python.png", color: "bg-blue-500" },
      { name: "Java", icon: "/icons/java.png", color: "bg-red-900" },
      { name: "JavaScript", icon: "/icons/javaScript.png", color: "bg-yellow-600" },
      { name: "TypeScript", icon: "/icons/typeScript.png", color: "bg-blue-600" },
      { name: "SQL", icon: "/icons/sql.png", color: "bg-orange-300" },
    ],
    frontend: [
      { name: "React", icon: "/icons/react.png", color: "bg-blue-700" },
      { name: "Next.js", icon: "/icons/next-js.png", color: "bg-gray-500" },
      { name: "Tailwind CSS", icon: "/icons/tailwind.png", color: "bg-cyan-400" },
    ],
    backend: [
      { name: "MongoDB", icon: "/icons/MongoDB.png", color: "bg-green-700" },
      { name: "MySQL", icon: "/icons/mysQL.png", color: "bg-blue-300" },
    ],
    tools: [
      { name: "Docker", icon: "/icons/docker.png", color: "bg-blue-300" },
      { name: "AWS", icon: "/icons/aws.png", color: "bg-orange-400" },
      { name: "Git", icon: "/icons/git.png", color: "bg-red-900" },
    ],
  };

  const experiences = [
    {
      title: "Full Stack Software Engineer",
      company: "Oberlin College",
      period: "Jan 2025 - Current",
      company_url: "https://www.oberlin.edu/",
      description: "I designed and implemented an end-to-end data pipeline for pitching performance, automating data ingestion from the cloud with daily cron jobs to ensure timely updates. I integrated FastAPI with Rapsodo’s REST API using secure API keys to fetch and persist pitch data into MongoDB, and built backend services that allow users to query and analyze performance on-demand. To support real-time analytics, I developed Python scripts that process and classify pitch data, generating interactive visualizations that contributed to a 6.8% improvement in team pitching success. On the frontend, I built a React dashboard with interactive charts and filters to make performance insights accessible and actionable. I also containerized the system with Docker and deployed it on AWS, enabling scalable, cloud-based access for the team."
    },
    {
      title: "Machine Learning Computational Biology REU Intern",
      company: "Rosetta Commons, Johns Hopkins University",
      period: "May 2025 - Aug 2025",
      company_url: "https://rosettacommons.org/",
      description: "Built and optimized a computational protein design pipeline using ML models such as RFDiffusionAA, LigandMPNN, Rosetta Libraries, and AlphaFold3, improving computational confidence metrics by roughly 4% per iteration. I automated large-scale protein design workflows with SLURM and Bash scripts on an HPC cluster, processing thousands of structures and sequences while reducing runtime by approximately 10%. I applied PyTorch-based ML techniques and statistical analyses to evaluate and improve binder affinity by up to 1000%, leveraging HPC resources to scale iterative design loops and enhance reproducibility and throughput. I also presented a research poster at the Summer Rosetta Conference, showcasing advancements in ML-driven protein design."
    },
    {
      title: "BackEnd Software Engineer",
      company: "SplashBI",
      period: "May 2024 - August 2024",
      company_url: "https://splashbi.com/",
      description: "I worked in SplashBI’s HR analytics team developing and maintaining automated data pipelines that transformed HR data from Oracle Cloud and MySQL into analytics-ready formats. I designed and optimized SQL database schemas to track key HR metrics like retention, turnover, and performance, and developed RESTful APIs to connect backend data with internal dashboards. By automating queries and Excel workflows, I reduced manual reporting time for enterprise clients by nearly 50%. I also created scalable data models to uncover growth opportunities and presented improvements in biweekly demos to stakeholders from multiple enterprise companies."
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
                  {"I began programming in college, where I initially struggled — even failing — but through persistence and practice I began to excel. Throughout my studies and career, I have built a strong foundation in computing, data analysis, and software development."}
                </p>
                <p>
                  {"Today, I specialize in building web applications that transform data into real-life insights, helping communities improve their decision-making. I love the challenge of turning complex problems into simple, elegant solutions, and I'm passionate about leaving my mark in this world through my work."}
                </p>
                <p>
                  {"Outside of programming, I'm currently sidequesting as a computational biology researcher with the Goldman Lab at Oberlin College, engineering evolutionary proteins with machine learning models. I'm also a collegiate varsity baseball coach at Oberlin College, helping pitchers improve their biomechanics through mobility and strength training programs."}
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
                  <span className="text-gray-600">📍 Atlanta, GA </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">💼 Available for work</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-600">🎓 Computer Science and Biology</span>
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
                      <p className="text-gray-600">{exp.description}</p>
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
