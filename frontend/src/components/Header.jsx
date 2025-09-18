function Header() {
  return (
    <header className="border-b border-gray-800 sticky top-0 z-50 bg-black">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold">Super60</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-purple-400 transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-purple-400 transition-colors">
              About
            </a>
            <a href="#services" className="hover:text-purple-400 transition-colors">
              Services
            </a>
            <a href="#features" className="hover:text-purple-400 transition-colors">
              Features
            </a>
            <a href="#contact" className="hover:text-purple-400 transition-colors">
              Contact
            </a>
          </div>
          <button className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Get Started
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header