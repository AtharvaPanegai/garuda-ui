import React from 'react';
import { ChevronRight, Slack, Bell, Zap, Globe } from 'lucide-react';

const IntegrationGuide = () => {
  const integrations = [
    { icon: <Slack className="w-8 h-8" />, name: "Slack", description: "Get real-time alerts in your Slack channels" },
    { icon: <Bell className="w-8 h-8" />, name: "PagerDuty", description: "Manage incidents with PagerDuty integration" },
    { icon: <Zap className="w-8 h-8" />, name: "Zapier", description: "Connect APIRadar to 1000+ apps with Zapier" },
    { icon: <Globe className="w-8 h-8" />, name: "Webhooks", description: "Send data to any endpoint with custom webhooks" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                APIRadar
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">Docs</a>
              <a href="#" className="text-gray-300 hover:text-white">API</a>
              <a href="#" className="text-gray-300 hover:text-white">Support</a>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
                Log In
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-purple-900/20 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Integrations</h1>
          <p className="text-xl text-gray-400 mb-8">
            Connect APIRadar with your favorite tools and services to streamline your workflow.
          </p>
        </div>
      </section>

      {/* Integrations List */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-600 p-3 rounded-full mr-4">
                    {integration.icon}
                  </div>
                  <h2 className="text-2xl font-semibold">{integration.name}</h2>
                </div>
                <p className="text-gray-400 mb-6">{integration.description}</p>
                <a href="#" className="text-purple-400 hover:text-purple-300 flex items-center">
                  Set up integration
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Process */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">How to Set Up an Integration</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">1. Choose your integration</h3>
              <p className="text-gray-400">
                Select the tool or service you want to integrate with APIRadar from our list of available integrations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">2. Authorize the connection</h3>
              <p className="text-gray-400">
                Follow the prompts to log in to your account for the selected service and authorize APIRadar to connect.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">3. Configure settings</h3>
              <p className="text-gray-400">
                Customize the integration settings, such as which events trigger notifications or how data is shared.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">4. Test the integration</h3>
              <p className="text-gray-400">
                Send a test notification or action to ensure the integration is working correctly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a custom integration?</h2>
          <p className="text-xl text-gray-400 mb-8">
            We can help you build a custom integration tailored to your specific needs.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-4 rounded">
            Contact Our Team
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
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
};

export default IntegrationGuide;