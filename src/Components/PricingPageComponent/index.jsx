import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const pricingPlans = [
  {
    name: "Starter",
    price: {
      monthly: 29,
      annually: 290,
    },
    features: [
      "Up to 5 APIs",
      "100 requests per second",
      "7-day data retention",
      "Email alerts",
      "Basic analytics",
    ],
  },
  {
    name: "Pro",
    price: {
      monthly: 99,
      annually: 990,
    },
    features: [
      "Up to 20 APIs",
      "500 requests per second",
      "30-day data retention",
      "Email & SMS alerts",
      "Advanced analytics",
      "Custom dashboards",
      "24/7 support",
    ],
  },
  {
    name: "Enterprise",
    price: {
      monthly: "Custom",
      annually: "Custom",
    },
    features: [
      "Unlimited APIs",
      "Unlimited requests",
      "1-year data retention",
      "Priority support",
      "Custom integrations",
      "Dedicated account manager",
      "On-premise deployment option",
    ],
  },
];

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const navigate = useNavigate();

  const _navigateToGivenPage = (pagePath) =>{
      navigate(pagePath);
  }

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
              <button onClick = {()=>_navigateToGivenPage("/signin")} className="text-gray-300 hover:text-white">Log In</button>
              <button onClick = {()=>_navigateToGivenPage("/signup")} className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
                Try Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Pricing Header */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, transparent pricing</h1>
          <p className="text-xl text-gray-400 mb-8">
            Choose the plan that's right for you. All plans come with a 14-day free trial.
          </p>
          <div className="flex items-center justify-center mb-12">
            <span className={`mr-3 ${isAnnual ? 'text-gray-400' : 'text-white'}`}>Monthly</span>
            <button
              className={`relative w-14 h-8 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                isAnnual ? 'bg-purple-600' : 'bg-gray-600'
              }`}
              onClick={() => setIsAnnual(!isAnnual)}
            >
              <span
                className={`block w-6 h-6 rounded-full bg-white transition-transform duration-300 ${
                  isAnnual ? 'translate-x-6' : ''
                }`}
              />
            </button>
            <span className={`ml-3 ${isAnnual ? 'text-white' : 'text-gray-400'}`}>Annual (Save 20%)</span>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.name}
                className={`bg-gray-900 rounded-lg p-8 border border-gray-800 ${
                  index === 1 ? 'md:scale-105 md:shadow-lg md:shadow-purple-500/20' : ''
                }`}
              >
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    {typeof plan.price[isAnnual ? 'annually' : 'monthly'] === 'number'
                      ? `$${plan.price[isAnnual ? 'annually' : 'monthly']}`
                      : plan.price[isAnnual ? 'annually' : 'monthly']}
                  </span>
                  {typeof plan.price[isAnnual ? 'annually' : 'monthly'] === 'number' && (
                    <span className="text-gray-400 ml-2">
                      /{isAnnual ? 'year' : 'month'}
                    </span>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick = {()=>_navigateToGivenPage("/signup")}
                  className={`w-full py-2 rounded ${
                    index === 1
                      ? 'bg-purple-600 hover:bg-purple-700'
                      : 'bg-gray-800 hover:bg-gray-700'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">What happens after my trial ends?</h3>
              <p className="text-gray-400">
                After your 14-day trial, you'll be automatically switched to the plan you selected. 
                You can cancel or change your plan at any time.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Can I change my plan later?</h3>
              <p className="text-gray-400">
                Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes will be 
                reflected in your next billing cycle.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-400">
                We accept all major credit cards, PayPal, and wire transfers for Enterprise plans.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Is there a setup fee?</h3>
              <p className="text-gray-400">
                No, there are no setup fees for any of our plans. You only pay for the plan you choose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to supercharge your API monitoring?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Start your 14-day free trial today. No credit card required.
          </p>
          <button onClick = {()=>_navigateToGivenPage("/signup")} className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-4 rounded">
            Start Free Trial
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

export default PricingPage;