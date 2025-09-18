function Hero() {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-black to-black text-white py-20">
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl font-bold mb-6">Empower Your Business with Cutting-Edge Tech Solutions</h1>
                <p className="text-gray-400 text-lg mb-8">Innovative, scalable, and secure solutions tailored for your success.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                        Get Started
                    </button>
                    <button className="border border-gray-600 hover:border-purple-400 text-white px-6 py-3 rounded-lg font-medium transition-colors">   
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
