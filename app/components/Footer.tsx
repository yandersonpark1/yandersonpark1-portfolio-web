export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Anderson Park</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Thank you for visiting my portfolio. I'm always excited to work on new projects 
            and collaborate with amazing people.
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              GitHub
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Email
            </a>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-500">
              © {currentYear}. Built with Next.js and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}