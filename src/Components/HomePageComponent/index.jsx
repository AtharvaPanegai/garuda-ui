import React, { useEffect } from 'react';
import { ChevronRight, Zap, Shield, BarChart3, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Button = ({ children, className, variant, onClick}) => (
  <button className={`px-4 py-2 rounded-md ${className} ${
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

export default function LandingPage() {
  const navigate = useNavigate();
  const _navigateToGivenPage = (pagePath) =>{
      navigate(pagePath);
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="px-4 lg:px-6 h-16 flex items-center fixed w-full bg-black/50 backdrop-blur-sm z-50">
        <a href="/" className="flex items-center justify-center">
          <div className="w-8 h-8 bg-gradient-to-br from-[#9333EA] to-[#C084FC] rounded-full" />
          <span className="ml-2 text-lg font-bold">Garuda</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a onClick = {()=>_navigateToGivenPage("/")} href="#" className="text-sm font-medium hover:text-[#9333EA] transition-colors">
            Features
          </a>
          <a  onClick = {()=>_navigateToGivenPage("/pricing")}href="#" className="text-sm font-medium hover:text-[#9333EA] transition-colors">
            Pricing
          </a>
          <a onClick = {()=>_navigateToGivenPage("/docs")} href="#" className="text-sm font-medium hover:text-[#9333EA] transition-colors">
            Docs
          </a>
        </nav>
        <div className="ml-4 flex items-center gap-2">
          <Button onClick = {()=>_navigateToGivenPage("/signin")} className="bg-[#9333EA] hover:bg-[#7E22CE] text-white">
            Login
          </Button>
          <Button onClick = {()=>_navigateToGivenPage("/signup")} className="bg-white text-black hover:bg-gray-200" variant="outline">
            Sign Up
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full pt-32 pb-12 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 bg-gradient-to-br from-black via-[#3B0764] to-black">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                  Monitor Your APIs with
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#9333EA] to-[#C084FC]">
                    Unparalleled Precision
                  </span>
                </h1>
                <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl lg:text-2xl">
                  Garuda empowers you to eliminate downtime and resolve issues before they impact your clients.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button onClick = {()=>_navigateToGivenPage("/signup")} className="bg-[#9333EA] hover:bg-[#7E22CE] text-white px-8 h-12 text-lg">
                  Start Free Trial
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  onClick = {()=>_navigateToGivenPage("/pricing")}
                  className="border-[#9333EA] text-[#9333EA] hover:bg-[#9333EA] hover:text-white h-12 text-lg"
                  variant="outline"
                >
                  View Pricing
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black/50 backdrop-blur-sm">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Radar?</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-white/5 backdrop-blur-sm border-[#3F3F46] p-6">
                <Zap className="h-12 w-12 text-[#9333EA] mb-4" />
                <h3 className="text-xl font-bold mb-2">Real-time Monitoring</h3>
                <p className="text-zinc-400">
                  Monitor your API endpoints in real-time with millisecond precision and instant alerts.
                </p>
              </Card>
              <Card className="bg-white/5 backdrop-blur-sm border-[#3F3F46] p-6">
                <Shield className="h-12 w-12 text-[#9333EA] mb-4" />
                <h3 className="text-xl font-bold mb-2">Advanced Security</h3>
                <p className="text-zinc-400">
                  Enterprise-grade security with end-to-end encryption and compliance certifications.
                </p>
              </Card>
              <Card className="bg-white/5 backdrop-blur-sm border-[#3F3F46] p-6">
                <BarChart3 className="h-12 w-12 text-[#9333EA] mb-4" />
                <h3 className="text-xl font-bold mb-2">Detailed Analytics</h3>
                <p className="text-zinc-400">
                  Gain insights into your API performance with comprehensive analytics and custom reports.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Preview Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-t from-black via-[#3B0764] to-black">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
              <p className="text-xl text-zinc-400">Choose the plan that fits your needs</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-center">
              {['Starter', 'Pro', 'Enterprise'].map((plan) => (
                <Card key={plan} className="bg-white/5 backdrop-blur-sm border-[#3F3F46] p-6">
                  <h3 className="text-2xl font-bold mb-4">{plan}</h3>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-[#9333EA] mr-2" />
                      {plan === 'Starter' ? '1,000' : plan === 'Pro' ? '10,000' : 'Unlimited'} API calls/month
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-[#9333EA] mr-2" />
                      {plan === 'Starter' ? 'Basic' : 'Advanced'} analytics
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-[#9333EA] mr-2" />
                      {plan === 'Enterprise' ? 'Priority' : '24/7'} support
                    </li>
                  </ul>
                  <Button className="w-full bg-[#9333EA] hover:bg-[#7E22CE] text-white">
                    Choose {plan}
                  </Button>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <a href="/pricing" className="text-[#9333EA] hover:text-[#7E22CE] inline-flex items-center">
                View full pricing details
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to eliminate downtime?
                </h2>
                <p className="mx-auto max-w-[600px] text-zinc-400 md:text-xl">
                  Join thousands of companies that trust Radar to keep their APIs running smoothly.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button onClick = {()=>_navigateToGivenPage("/signup")} className="bg-[#9333EA] hover:bg-[#7E22CE] text-white px-8">
                  Start Free Trial
                  <Zap className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  className="border-[#9333EA] text-[#9333EA] hover:bg-[#9333EA] hover:text-white"
                  variant="outline"
                >
                  Schedule a Demo
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
            <a href="/refunds" className="text-sm hover:text-[#9333EA]">
              Refunds
            </a>
            <a href="/privacy" className="text-sm hover:text-[#9333EA]">
              Privacy
            </a>
            <a href="/terms" className="text-sm hover:text-[#9333EA]">
              Terms & Conditions
            </a>
            <a href="/contact" className="text-sm hover:text-[#9333EA]">
              Contact
            </a>
            <a href="/about" className="text-sm hover:text-[#9333EA]">
              About
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}