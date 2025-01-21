"use client"

import React from 'react';
import { ChevronRight } from 'lucide-react';
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

export default function TermsAndConditions() {
    const navigate = useNavigate();


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
          <a onClick={() => navigateToPage("/about")} className="text-sm font-medium hover:text-[#9333EA] transition-colors">
            About
          </a>
          <a onClick={() => navigateToPage("/contact")} className="text-sm font-medium hover:text-[#9333EA] transition-colors">
            Contact
          </a>
        </nav>
      </header>

      <main className="flex-1 pt-16">
        <section className="w-full pt-32 pb-12 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 bg-gradient-to-br from-black via-[#3B0764] to-black">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                  Terms and Conditions
                </h1>
                <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl lg:text-2xl">
                  Please read these terms carefully before using our services.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6 mx-auto">
            <Card className="bg-white/5 backdrop-blur-sm border-[#3F3F46] p-6">
              <div className="space-y-8 text-zinc-300">
                <div>
                  <h2 className="text-2xl font-bold text-purple-500 mb-4">1. Acceptance of Terms</h2>
                  <p>By accessing or using Garuda's services, you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, you may not use our services.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-purple-500 mb-4">2. Description of Service</h2>
                  <p>Garuda provides API monitoring and management services. We reserve the right to modify, suspend, or discontinue any part of the service at any time.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-purple-500 mb-4">3. User Accounts</h2>
                  <p>You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-purple-500 mb-4">4. Privacy Policy</h2>
                  <p>Your use of Garuda's services is also governed by our Privacy Policy. Please review our Privacy Policy, which also governs the site and informs users of our data collection practices.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-purple-500 mb-4">5. Intellectual Property</h2>
                  <p>The service and its original content, features, and functionality are owned by Garuda and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-purple-500 mb-4">6. Termination</h2>
                  <p>We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-purple-500 mb-4">7. Limitation of Liability</h2>
                  <p>In no event shall Garuda, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-purple-500 mb-4">8. Changes to Terms</h2>
                  <p>We reserve the right to modify these terms at any time. We will always post the most current version on our site. By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms.</p>
                </div>
              </div>
            </Card>

            <div className="mt-12 text-center">
              <Button onClick={() => navigateToPage("/contact-us")} className="bg-[#9333EA] hover:bg-[#7E22CE] text-white">
                Contact Us for Questions
                <ChevronRight className="ml-2 h-5 w-5 inline" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-[#3F3F46] py-6 md:py-8">
        <div className="container flex flex-col gap-4 px-4 md:px-6 md:flex-row md:items-center md:justify-between mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-[#9333EA] to-[#C084FC] rounded-full" />
            <span className="text-sm">© 2025 Shreejis Ventures. All rights reserved.</span>
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
          </nav>
        </div>
      </footer>
    </div>
  );
}

