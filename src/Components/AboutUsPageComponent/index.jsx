import React, { useEffect, useRef, useState } from 'react';
import { Button } from "../ui/button";
import { Activity, AlertCircle, Gauge, Image, Workflow } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


export default function AboutUs() {
  const navigate = useNavigate();

  const _navigateToGivenPage = (pagePath) =>{
      navigate(pagePath);
  }
  
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                APIRadar
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-300 hover:text-white"
                onClick = {()=>_navigateToGivenPage("/signin")}
              >
                Log In
              </Button>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white"
                onClick = {()=>_navigateToGivenPage("/signup")}
              >
                Try Now
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />
        <div className="max-w-7xl mx-auto relative">
          <h1 className="text-5xl pb-5 md:text-7xl font-bold text-center mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Monitoring Evolved
          </h1>
          <p className="text-xl md:text-2xl text-center text-gray-400 max-w-3xl mx-auto mb-12">
            We're building the next generation of API monitoring, where not a single request goes unnoticed. 
            Real-time insights, intelligent alerts, and deep integration capabilities.
          </p>
          <div className="flex justify-center space-x-4">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-6"
            onClick = {()=>_navigateToGivenPage("/signup")}
            >
              Get Started
            </Button>
            <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-950 text-lg px-8 py-6">
              View Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        ref={statsRef}
        className="py-20 bg-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="text-4xl font-bold text-purple-400 mb-2">99.99%</div>
              <div className="text-gray-400">Uptime Guaranteed</div>
            </div>
            <div className={`text-center transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="text-4xl font-bold text-purple-400 mb-2">500ms</div>
              <div className="text-gray-400">Average Response Time</div>
            </div>
            <div className={`text-center transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-400">Real-time Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-purple-500 transition-colors">
              <Activity className="w-12 h-12 text-purple-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Real-time Monitoring</h3>
              <p className="text-gray-400">
                Track every API endpoint with millisecond precision. Get instant insights into performance, 
                availability, and response times.
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-purple-500 transition-colors">
              <AlertCircle className="w-12 h-12 text-purple-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Smart Alerts</h3>
              <p className="text-gray-400">
                Intelligent notification system that learns from your API's behavior patterns and alerts 
                you only when it matters.
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-purple-500 transition-colors">
              <Gauge className="w-12 h-12 text-purple-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Performance Metrics</h3>
              <p className="text-gray-400">
                Comprehensive analytics dashboard with detailed insights into your API's performance, 
                usage patterns, and potential bottlenecks.
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-purple-500 transition-colors">
              <Workflow className="w-12 h-12 text-purple-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Integration Hub</h3>
              <p className="text-gray-400">
                Seamlessly integrate with your existing tools and workflows. Connect with popular services 
                and customize your monitoring setup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      {/* <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-12">Trusted by Industry Leaders</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center justify-center">
                <Image
                  src="/placeholder-logo.svg"
                  alt={`Company ${i}`}
                  width={120}
                  height={40}
                  className="opacity-50 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Join the next generation of API monitoring and never miss a beat.
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-6"
            onClick={()=>_navigateToGivenPage("/signup")}
          >
            Start Monitoring
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Community</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} APIRadar. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}