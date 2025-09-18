function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                The complete platform to build digital excellence
              </h2>       
              <p className="text-gray-400 text-lg mb-8">
                Your team's toolkit to stop configuring and start innovating. Securely build, deploy, and scale the best
                digital experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Get a Demo
                </button>
                <button className="border border-gray-600 px-6 py-3 rounded-lg font-medium hover:border-purple-400 transition-colors">
                  Explore Solutions
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-black border border-gray-800 p-6 rounded-lg">
                       <div className="text-3xl font-bold text-purple-400 mb-2">99%</div>
                       <div className="text-gray-400">Uptime guaranteed</div>
                     </div>
                     <div className="bg-black border border-gray-800 p-6 rounded-lg">
                       <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                       <div className="text-gray-400">Expert support</div>
                     </div>
                     <div className="bg-black border border-gray-800 p-6 rounded-lg">
                       <div className="text-3xl font-bold text-purple-400 mb-2">500+</div>
                       <div className="text-gray-400">Projects delivered</div>
                     </div>
                     <div className="bg-black border border-gray-800 p-6 rounded-lg">
                       <div className="text-3xl font-bold text-orange-400 mb-2">10x</div>
                       <div className="text-gray-400">Faster deployment</div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </section>
)
}

export default About
