function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs
                       </p>
                     </div>
                     <div className="grid md:grid-cols-3 gap-8">
                       <div className="bg-gray-900 border border-gray-800 p-8 rounded-lg hover:border-purple-400 transition-colors">
                         <div className="w-12 h-12 bg-purple-500 rounded-lg mb-6 flex items-center justify-center">
                           <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path
                               strokeLinecap="round"
                               strokeLinejoin="round"
                               strokeWidth={2}
                               d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                             />
                           </svg>
                         </div>
                         <h3 className="text-xl font-bold mb-4">Web Development</h3>
                         <p className="text-gray-400">
                           Custom web applications built with modern technologies and best practices.
                         </p>
                       </div>
                       <div className="bg-gray-900 border border-gray-800 p-8 rounded-lg hover:border-orange-400 transition-colors">
                         <div className="w-12 h-12 bg-orange-500 rounded-lg mb-6 flex items-center justify-center">
                           <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path
                               strokeLinecap="round"
                               strokeLinejoin="round"
                               strokeWidth={2}
                               d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                             />
                           </svg>
                         </div>
                         <h3 className="text-xl font-bold mb-4">Mobile Apps</h3>
                         <p className="text-gray-400">Native and cross-platform mobile applications for iOS and Android.</p>
                       </div>
                           <div className="bg-gray-900 border border-gray-800 p-8 rounded-lg hover:border-purple-400 transition-colors">
                               <div className="w-12 h-12 bg-purple-500 rounded-lg mb-6 flex items-center justify-center">
                                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth={2}
                                              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                            />
                                          </svg>
                                                 </div>
                                             <h3 className="text-xl font-bold mb-4">AI Integration</h3>
                                             <p className="text-gray-400">
                                               Intelligent solutions powered by machine learning and artificial intelligence.
                                             </p>
                                           </div>
                                         </div>
                                       </div>
                                     </div>
                                   </section>
                                 )
                               }

export default Services
