"use client"

import React from 'react';
import { ChevronRight, Zap, Shield, BarChart3, Users, Code, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Button = ({ children, className, variant, onClick }) => (
  <button 
    className={`px-4 py-2 rounded-md ${className} ${
      variant === 'outline' ? 'border border-current' : ''
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);

const Card = ({ children, className }) => (
  <div className={`rounded-lg ${className}`}>
    {children}
  </div>
);

export default function AboutUs() {
  const navigate = useNavigate()

  const navigateToPage = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="px-4 lg:px-6 h-16 flex items-center fixed w-full bg-black/50 backdrop-blur-sm z-50">
        <a href="/" className="flex items-center justify-center">
          <div className="w-8 h-8 bg-gradient-to-br from-[#9333EA] to-[#C084FC] rounded-full" />
          <span className="ml-2 text-lg font-bold">Garuda</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a onClick={() => navigateToPage("/")} className="text-sm font-medium hover:text-[#9333EA] transition-colors">
            Home
          </a>
          <a onClick={() => navigateToPage("/pricing")} className="text-sm font-medium hover:text-[#9333EA] transition-colors">
            Pricing
          </a>
          <a onClick={() => navigateToPage("/docs")} className="text-sm font-medium hover:text-[#9333EA] transition-colors">
            Docs
          </a>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full pt-32 pb-10 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 bg-gradient-to-br from-black via-[#3B0764] to-black">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                  Empowering Developers with
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#9333EA] to-[#C084FC]">
                    Cutting-Edge API Monitoring
                  </span>
                </h1>
                <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl lg:text-2xl">
                  Discover the story behind Garuda and our mission to revolutionize API management.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black/50 backdrop-blur-sm">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Story</h2>
                <p className="text-zinc-400 md:text-lg">
                  Founded in 2025, Garuda was born from the frustration of dealing with unreliable and opaque API monitoring tools. 
                  Our team of experienced developers and DevOps engineers set out to create a solution that we ourselves would love to use.
                </p>
                <p className="text-zinc-400 md:text-lg">
                  Today, we're proud to serve thousands of developers and companies worldwide, helping them build more reliable and performant applications. 
                  Our commitment to innovation and customer satisfaction drives us to continuously improve our platform and services.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Garuda team"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-t from-black via-[#3B0764] to-black">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-white/5 backdrop-blur-sm border-[#3F3F46] p-6">
                <Zap className="h-12 w-12 text-[#9333EA] mb-4" />
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-zinc-400">
                  We constantly push the boundaries of what's possible in API monitoring and management.
                </p>
              </Card>
              <Card className="bg-white/5 backdrop-blur-sm border-[#3F3F46] p-6">
                <Shield className="h-12 w-12 text-[#9333EA] mb-4" />
                <h3 className="text-xl font-bold mb-2">Reliability</h3>
                <p className="text-zinc-400">
                  We build robust systems that our customers can depend on, 24/7.
                </p>
              </Card>
              <Card className="bg-white/5 backdrop-blur-sm border-[#3F3F46] p-6">
                <Users className="h-12 w-12 text-[#9333EA] mb-4" />
                <h3 className="text-xl font-bold mb-2">Customer-Centric</h3>
                <p className="text-zinc-400">
                  Our customers' success is our success. We listen, learn, and improve based on their feedback.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-black/50 backdrop-blur-sm">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {['John Doe', 'Jane Smith', 'Alex Johnson'].map((name) => (
                <Card key={name} className="bg-white/5 backdrop-blur-sm border-[#3F3F46] p-6 text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#9333EA] to-[#C084FC] mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{name}</h3>
                  <p className="text-zinc-400">Co-Founder & CEO</p>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        {/* Join Us Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-black via-[#3B0764] to-black">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Join Us in Shaping the Future of API Management
                </h2>
                <p className="mx-auto max-w-[600px] text-zinc-400 md:text-xl">
                  We're always looking for passionate individuals to join our team and help us push the boundaries of what's possible.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button onClick={() => navigateToPage("/careers")} className="bg-[#9333EA] hover:bg-[#7E22CE] text-white px-8">
                  View Open Positions
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  onClick={() => navigateToPage("/culture")}
                  className="border-[#9333EA] text-[#9333EA] hover:bg-[#9333EA] hover:text-white"
                  variant="outline"
                >
                  Learn About Our Culture
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-[#3F3F46] py-6 md:py-8">
        <div className="container flex flex-col gap-4 px-4 md:px-6 md:flex-row md:items-center md:justify-between mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-[#9333EA] to-[#C084FC] rounded-full" />
            <span className="text-sm">© 2024 Shreejis Ventures. All rights reserved.</span>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <a href="/privacy" className="text-sm hover:text-[#9333EA]">
              Privacy
            </a>
            <a href="/refunds" className="text-sm hover:text-[#9333EA]">
              Refunds
            </a>
            <a href="/contact" className="text-sm hover:text-[#9333EA]">
              Contact
            </a>
            <a href='/terms' className='text-sm hover:text-[#9333EA]'>
              Terms & Conditions
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
