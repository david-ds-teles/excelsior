import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-5"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-600 rounded-full opacity-10 blur-[120px] animate-pulse-slow"></div>
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-accent-500 rounded-full opacity-10 blur-[80px] animate-pulse-slow animation-delay-2000"></div>
          <div className="absolute bottom-1/3 left-1/4 w-[300px] h-[300px] bg-blue-500 rounded-full opacity-10 blur-[80px] animate-pulse-slow animation-delay-1000"></div>
          
          {/* Animated Particles */}
          <div className="particle-container">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i}
                className="absolute w-1 h-1 rounded-full bg-white opacity-60 animate-float"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDuration: `${Math.random() * 20 + 10}s`,
                  animationDelay: `${Math.random() * 10}s`
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="container relative z-10 px-4 mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-8 flex items-center justify-center lg:justify-start">
                <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-600 text-sm font-semibold animate-fade-in">
                  The Future of Software Development
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight animate-fade-in animation-delay-300">
                <span className="block bg-gradient-to-r from-white via-primary-200 to-accent-200 bg-clip-text text-transparent">AI-First Software,</span>
                <span className="block bg-gradient-to-r from-accent-200 via-primary-300 to-white bg-clip-text text-transparent">Built for the Future</span>
              </h1>
              <p className="text-xl md:text-2xl text-neutral-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in animation-delay-600">
                We design and build high-end digital solutions using cutting-edge AI and modern technologies — fast, secure, and scalable.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in animation-delay-900">
                <button className="relative overflow-hidden group px-8 py-4 rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 font-medium text-white shadow-lg shadow-primary-900/30">
                  <span className="relative z-10">Start Your Project</span>
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine"></div>
                </button>
                <button className="relative overflow-hidden px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm font-medium text-white border border-white/20 hover:bg-white/20 transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>
            <div className="flex-1 relative max-w-md mx-auto">
              <div className="relative z-10 animate-float">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
                <div className="relative bg-neutral-900/90 backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs text-neutral-400">excelsior.ai</div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-8 w-2/3 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-md"></div>
                    <div className="h-32 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-md flex items-center justify-center">
                      <svg className="w-16 h-16 text-primary-400/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <div className="flex gap-2">
                      <div className="h-6 w-full bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-md"></div>
                      <div className="h-6 w-24 bg-gradient-to-r from-primary-500/40 to-accent-500/40 rounded-md"></div>
                    </div>
                    <div className="h-6 w-5/6 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-md"></div>
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
              <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-60 h-60 bg-accent-500/20 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce animation-delay-3000">
          <span className="text-sm font-medium text-neutral-400 mb-2">Scroll to explore</span>
          <svg className="w-6 h-6 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="relative py-32 overflow-hidden bg-neutral-950">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-primary-900/10 to-transparent"></div>
          <div className="absolute left-0 bottom-0 w-1/3 h-1/2 bg-gradient-to-tr from-accent-900/10 to-transparent"></div>
          
          {/* Dotted Grid Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:24px_24px]"></div>
        </div>

        <div className="container relative z-10 px-4 mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-block animate-fade-in">
              <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-primary-400 mb-4">
                What We Build
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in animation-delay-300">
              <span className="bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">Cutting-edge solutions for</span>
              <span className="relative">
                <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent"> next-gen businesses</span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transform scale-x-0 animate-scale-x"></span>
              </span>
            </h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto animate-fade-in animation-delay-600">
              We leverage cutting-edge technologies to build high-performance, 
              scalable digital solutions that drive business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {[
              {
                icon: (
                  <svg className="w-10 h-10 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: "AI-Driven Web & Mobile Apps",
                description: "Intelligent applications that learn and adapt to user behavior, providing personalized experiences.",
                color: "from-primary-500 to-blue-500"
              },
              {
                icon: (
                  <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                ),
                title: "Scalable Microservices & APIs",
                description: "Robust backend systems designed for performance, reliability, and seamless scaling.",
                color: "from-blue-500 to-indigo-500"
              },
              {
                icon: (
                  <svg className="w-10 h-10 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Modern Fintech Platforms",
                description: "Secure, compliant, and user-focused financial technology solutions for the digital economy.",
                color: "from-indigo-500 to-purple-500"
              },
              {
                icon: (
                  <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                ),
                title: "Custom SaaS MVPs",
                description: "Rapid development of viable SaaS products with a focus on market validation and user retention.",
                color: "from-purple-500 to-accent-500"
              },
              {
                icon: (
                  <svg className="w-10 h-10 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                ),
                title: "UX/UI Design with a Purpose",
                description: "Beautiful interfaces that drive user engagement through thoughtful, human-centered design.",
                color: "from-accent-500 to-primary-500"
              },
              {
                icon: (
                  <svg className="w-10 h-10 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                ),
                title: "Software Consultancy",
                description: "Expert guidance on architecture, technology selection, and digital transformation.",
                color: "from-blue-500 to-primary-500"
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="relative group animate-on-scroll"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 -m-0.5 rounded-2xl blur-sm"
                  style={{ backgroundImage: `linear-gradient(to right, ${service.color})` }}></div>
                <div className="relative bg-neutral-900/80 backdrop-blur-sm border border-white/5 rounded-xl p-8 h-full transition-transform duration-300 group-hover:-translate-y-2">
                  <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-inner">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-neutral-400">{service.description}</p>
                  <div className="absolute bottom-8 right-8 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="relative py-36 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Abstract Geometric Shapes */}
          <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-primary-900/20 filter blur-[100px]"></div>
          <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-accent-800/20 filter blur-[100px]"></div>
          
          {/* Animated Particles - Dots */}
          <div className="particle-container">
            {[...Array(15)].map((_, i) => (
              <div 
                key={`dot-${i}`}
                className="absolute w-1.5 h-1.5 rounded-full bg-white opacity-20 animate-float-slow"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDuration: `${Math.random() * 20 + 10}s`,
                  animationDelay: `${Math.random() * 10}s`
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="container relative z-10 px-4 mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            {/* 3D-like UI Element */}
            <div className="flex-1 relative order-2 lg:order-1">
              <div className="group perspective-1000">
                <div className="relative preserve-3d animate-float-slow group-hover:rotate-y-12 transition-transform duration-1000">
                  {/* Floating Elements */}
                  <div className="absolute -top-12 -right-12 w-32 h-32 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 p-0.5 rotate-6 animate-float-slow animation-delay-1000">
                    <div className="w-full h-full bg-neutral-950 rounded-[calc(0.75rem-1px)] flex items-center justify-center">
                      <svg className="w-12 h-12 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-16 -left-8 w-28 h-28 rounded-lg bg-gradient-to-r from-blue-500 to-primary-500 p-0.5 -rotate-12 animate-float-slow animation-delay-700">
                    <div className="w-full h-full bg-neutral-950 rounded-[calc(0.5rem-1px)] flex items-center justify-center">
                      <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Main Card */}
                  <div className="relative bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-2xl p-10 shadow-xl border border-white/5 backdrop-blur-sm z-10">
                    <div className="grid grid-cols-2 gap-6">
                      {[
                        {
                          icon: (
                            <svg className="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                          ),
                          title: "High-quality software",
                          description: "Built with clean architecture"
                        },
                        {
                          icon: (
                            <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                            </svg>
                          ),
                          title: "User experience focus",
                          description: "Intuitive, delightful interfaces"
                        },
                        {
                          icon: (
                            <svg className="w-8 h-8 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          ),
                          title: "Performance optimization",
                          description: "Lightning-fast applications"
                        },
                        {
                          icon: (
                            <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zM10 11l2-2 2 2M7 17V7a2 2 0 00-2-2H3a2 2 0 00-2 2v10a2 2 0 002 2h6v-2m4 0h4a2 2 0 002-2v-6a2 2 0 00-2-2H3a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          ),
                          title: "Security implementation",
                          description: "Protection by design"
                        }
                      ].map((item, index) => (
                        <div key={index} className="group/card">
                          <div className="mb-4 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover/card:bg-gradient-to-br from-primary-500/20 to-accent-500/20 transition-colors duration-300">
                            {item.icon}
                          </div>
                          <h3 className="text-lg font-bold mb-2 text-white">{item.title}</h3>
                          <p className="text-neutral-400">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1 order-1 lg:order-2">
              <div className="inline-block mb-4 animate-fade-in">
                <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-primary-400">
                  Smarter by Design
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in animation-delay-300">
                <span className="bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">We merge</span>
                <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent"> AI with creativity</span>
              </h2>
              <p className="text-xl text-neutral-300 mb-8 animate-fade-in animation-delay-600">
                At Excelsior, we merge artificial intelligence with human creativity to deliver software that performs, scales, and delights. Every step — from design to code to launch — is handled with care, precision, and modern tools.
              </p>
              
              <ul className="space-y-5 mb-8 animate-fade-in animation-delay-900">
                {[
                  "Advanced machine learning algorithms for intelligent solutions",
                  "Stunning visual design that enhances user experience",
                  "Scalable architecture that grows with your business",
                  "Rigorous testing for bulletproof reliability"
                ].map((item, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center mt-0.5">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg text-neutral-200">{item}</span>
                  </li>
                ))}
              </ul>
              
              <a href="#" className="inline-flex items-center gap-2 text-primary-400 font-medium hover:text-primary-300 transition-colors duration-300 group/link animate-fade-in animation-delay-1200">
                <span>Learn about our approach</span>
                <svg className="w-5 h-5 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Expertise */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-neutral-950 to-neutral-900">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          {/* Animated Code Lines Background */}
          <div className="absolute inset-0 opacity-5">
            {[...Array(15)].map((_, i) => (
              <div 
                key={`code-${i}`}
                className="absolute h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent animate-slide-right"
                style={{
                  top: `${(i + 1) * 6}%`,
                  left: 0,
                  right: 0,
                  animationDuration: `${Math.random() * 8 + 10}s`,
                  animationDelay: `${Math.random() * 5}s`,
                  opacity: Math.random() * 0.3 + 0.1
                }}
              ></div>
            ))}
          </div>
          
          {/* Glowing Orbs */}
          <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-500/10 filter blur-[80px]"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-accent-500/10 filter blur-[80px]"></div>
        </div>
        
        <div className="container relative z-10 px-4 mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-block mb-4 animate-fade-in">
              <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-primary-400">
                Technology Stack
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in animation-delay-300">
              <span className="bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">Cutting-edge</span>
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent"> technology expertise</span>
            </h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto animate-fade-in animation-delay-600">
              We leverage the latest technologies to build beautiful, high-performance digital solutions that stand the test of time.
            </p>
          </div>
          
          {/* Tech Stack Showcase */}
          <div className="relative">
            {/* Technology Orbit */}
            <div className="relative w-full aspect-square max-w-3xl mx-auto">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-primary-900 to-accent-900 p-0.5 animate-pulse-slow">
                  <div className="w-full h-full rounded-full bg-neutral-950 flex items-center justify-center text-white">
                    <svg className="w-12 h-12 md:w-16 md:h-16 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Orbiting Technologies */}
              {[
                { name: "Next.js", icon: "N", color: "from-neutral-700 to-neutral-800", textColor: "text-white", delay: 0 },
                { name: "TypeScript", icon: "TS", color: "from-blue-600 to-blue-700", textColor: "text-white", delay: 1 },
                { name: "TailwindCSS", icon: "TW", color: "from-cyan-500 to-blue-500", textColor: "text-white", delay: 2 },
                { name: "React", icon: "R", color: "from-cyan-400 to-cyan-500", textColor: "text-neutral-900", delay: 3 },
                { name: "Node.js", icon: "N", color: "from-green-500 to-green-600", textColor: "text-white", delay: 4 },
                { name: "Python", icon: "Py", color: "from-blue-500 to-yellow-500", textColor: "text-white", delay: 5 },
                { name: "AWS", icon: "AWS", color: "from-orange-400 to-orange-500", textColor: "text-white", delay: 6 },
                { name: "Docker", icon: "D", color: "from-blue-500 to-blue-600", textColor: "text-white", delay: 7 },
              ].map((tech, index) => {
                const orbitRadius = 150; // adjust as needed
                const angle = (index / 8) * Math.PI * 2; // Evenly space around the circle
                const x = Math.cos(angle) * orbitRadius;
                const y = Math.sin(angle) * orbitRadius;
                
                return (
                  <div 
                    key={tech.name}
                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-orbit animation-delay-${tech.delay * 500} z-10`}
                    style={{ 
                      marginLeft: `${x}px`,
                      marginTop: `${y}px`,
                      animationDelay: `${tech.delay * 0.5}s`,
                    }}
                  >
                    <div className="flex flex-col items-center">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${tech.color} flex items-center justify-center ${tech.textColor} font-bold text-sm shadow-lg hover:scale-110 transition-transform duration-300`}>
                        {tech.icon}
                      </div>
                      <span className="mt-2 text-sm font-medium bg-neutral-900/70 backdrop-blur-sm px-2 py-1 rounded-full text-white whitespace-nowrap">{tech.name}</span>
                    </div>
                  </div>
                );
              })}
              
              {/* Connection Lines */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[300px] h-[300px] border border-white/5 rounded-full animate-spin-slow"></div>
                <div className="w-[250px] h-[250px] border border-white/10 rounded-full animate-spin-slow animation-delay-1000 animation-reverse"></div>
              </div>
            </div>
          </div>
          
          {/* Additional Technologies */}
          <div className="mt-16 flex flex-wrap justify-center gap-4 animate-fade-in animation-delay-900">
            {[
              "GraphQL", "MongoDB", "PostgreSQL", "Redis", "Firebase", 
              "Framer Motion", "Stripe", "Auth0", "Prisma", "Sanity"
            ].map((tech, index) => (
              <div 
                key={tech}
                className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-sm font-medium text-white">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background with animated gradient */}
        <div className="absolute inset-0 z-0 bg-gradient-conic from-primary-600 via-accent-600 to-primary-600 opacity-90 animate-spin-slower"></div>
        
        {/* Glass overlay */}
        <div className="absolute inset-0 z-0 backdrop-blur-xl bg-neutral-950/70"></div>
        
        <div className="container relative z-10 px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Floating Shapes */}
              <div className="absolute -top-12 -left-12 w-24 h-24 bg-white/10 rounded-full blur-xl animate-float-slow"></div>
              <div className="absolute -bottom-20 -right-16 w-32 h-32 bg-primary-500/20 rounded-full blur-xl animate-float-slow animation-delay-1000"></div>
              
              {/* Content Card */}
              <div className="relative bg-neutral-900/50 backdrop-blur-lg border border-white/10 rounded-3xl p-12 overflow-hidden shadow-2xl">
                {/* Glow Effects */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary-500/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent-500/20 rounded-full blur-xl"></div>
                
                {/* Card Content */}
                <div className="text-center mb-10">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-fade-in">
                    Ready to Transform Your Business?
                  </h2>
                  <p className="text-xl text-neutral-200 max-w-2xl mx-auto animate-fade-in animation-delay-300">
                    Join forward-thinking companies that have elevated their digital presence with our AI-first approach.
                  </p>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 justify-center animate-fade-in animation-delay-600">
                  <a 
                    href="#contact" 
                    className="relative overflow-hidden group px-8 py-4 rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 font-medium text-white shadow-lg shadow-primary-900/30 hover:shadow-xl transition-shadow duration-300"
                  >
                    <span className="relative z-10">Start Your Project</span>
                    <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine"></div>
                  </a>
                  <a 
                    href="#" 
                    className="px-8 py-4 rounded-xl bg-white font-medium text-neutral-900 hover:opacity-90 transition-opacity duration-300"
                  >
                    Schedule a Call
                  </a>
                </div>
                
                {/* Logos of trusted companies */}
                <div className="mt-16">
                  <p className="text-sm text-neutral-400 text-center mb-6">Trusted by innovative companies</p>
                  <div className="flex flex-wrap justify-center gap-8 opacity-70">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="h-8 w-24 bg-white/10 rounded-md"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-20 bg-neutral-950">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-12">
            <div className="max-w-xs">
              <h3 className="text-2xl font-bold text-white mb-4">Excelsior</h3>
              <p className="text-neutral-400 mb-6">AI-First Software Development. We build modern, high-performance digital solutions that drive business growth.</p>
              <div className="flex gap-4">
                {['twitter', 'linkedin', 'github', 'instagram'].map((social) => (
                  <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors duration-300">
                    <span className="text-white text-sm">{social.charAt(0).toUpperCase()}</span>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
                <ul className="space-y-2">
                  {['AI Development', 'Web Applications', 'Mobile Apps', 'UI/UX Design', 'Consulting'].map((item) => (
                    <li key={item}><a href="#" className="text-neutral-400 hover:text-white transition-colors duration-300">{item}</a></li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
                <ul className="space-y-2">
                  {['About Us', 'Careers', 'Blog', 'Contact', 'Privacy Policy'].map((item) => (
                    <li key={item}><a href="#" className="text-neutral-400 hover:text-white transition-colors duration-300">{item}</a></li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
                <ul className="space-y-2">
                  <li className="text-neutral-400">hello@excelsior.ai</li>
                  <li className="text-neutral-400">+1 (555) 123-4567</li>
                  <li className="text-neutral-400">123 AI Boulevard,<br />Silicon Valley, CA 94043</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-neutral-800 mt-16 pt-8 text-center">
            <p className="text-neutral-500"> {new Date().getFullYear()} Excelsior. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
