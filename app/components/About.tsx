'use client'

export default function About() {
  const skills = [
    { name: "React & Next.js", level: 90, color: "bg-blue-500" },
    { name: "TypeScript", level: 85, color: "bg-blue-600" },
    { name: "Tailwind CSS", level: 88, color: "bg-cyan-500" },
    { name: "Node.js", level: 75, color: "bg-green-500" },
    { name: "Python", level: 70, color: "bg-yellow-500" },
    { name: "UI/UX Design", level: 80, color: "bg-purple-500" },
  ]

  const experiences = [
    {
      title: "Full Stack Software Engineer",
      company: "Oberlin College", 
      period: "Jan 2025 - Current", 
      description: "I designed and implemented an end-to-end data pipeline for pitching performance, automating data ingestion from the cloud with daily cron jobs to ensure timely updates. I integrated FastAPI with Rapsodo’s REST API using secure API keys to fetch and persist pitch data into MongoDB, and built backend services that allow users to query and analyze performance on-demand. To support real-time analytics, I developed Python scripts that process and classify pitch data, generating interactive visualizations that contributed to a 6.8% improvement in team pitching success. On the frontend, I built a React dashboard with interactive charts and filters to make performance insights accessible and actionable. I also containerized the system with Docker and deployed it on AWS, enabling scalable, cloud-based access for the team."
    },
    {
      title: "Machine Learning Computational Biology REU Intern",
      company: "Rosetta Commons, Johns Hopkins University",
      period: "May 2025 - Aug 2025",
      description: "Built and optimized a computational protein design pipeline using ML models such as RFDiffusionAA, LigandMPNN, Rosetta Libraries, and AlphaFold3, improving computational confidence metrics by roughly 4% per iteration. I automated large-scale protein design workflows with SLURM and Bash scripts on an HPC cluster, processing thousands of structures and sequences while reducing runtime by approximately 10%. I applied PyTorch-based ML techniques and statistical analyses to evaluate and improve binder affinity by up to 1000%, leveraging HPC resources to scale iterative design loops and enhance reproducibility and throughput. I also presented a research poster at the Summer Rosetta Conference, showcasing advancements in ML-driven protein design."
    }, 
    {
      title: "BackEnd Software Engineer",
      company: "SplashBI",
      period: "May 2024 - August 2024",
      description: "I worked in SplashBI's HR analytics team developing and maintaining automated data pipelines that transformed HR data from Oracle Cloud and MySQL into analytics-ready formats. I designed and optimized SQL database schemas to track key HR metrics like retention, turnover, and performance, and developed RESTful APIs to connect backend data with internal dashboards. By automating queries and Excel workflows, I reduced manual reporting time for enterprise clients by nearly 50%. I also created scalable data models to uncover growth opportunities and presented improvements in biweekly demos to stakeholders from multiple enterprise companies."
    },
  ]

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
            I'm a passionate developer who loves creating digital experiences that make a difference. 
            Here's my journey and what I bring to the table.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Personal Info */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">My Story</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  I started my coding journey in college, fascinated by how lines of code 
                  could create beautiful, interactive experiences. What began as curiosity 
                  quickly became a passion.
                </p>
                <p>
                  Today, I specialize in building modern web applications using React, 
                  Next.js, and TypeScript. I love the challenge of turning complex problems 
                  into simple, elegant solutions.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open source projects, or sharing knowledge with 
                  the developer community.
                </p>
              </div>
            </div>

            {/* Personal Details */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Facts</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  <span className="text-gray-600">☕ Coffee enthusiast</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Skills & Experience */}
          <div className="space-y-8">
            {/* Skills */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out group-hover:scale-105`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
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
                      <p className="text-blue-600 font-medium mb-1">{exp.company}</p>
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