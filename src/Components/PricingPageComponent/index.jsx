/** @format */

"use client";

import { useState, useEffect } from "react";
import { Check, ArrowRight, Zap, Shield, BarChart, X } from "lucide-react";
import { useToast } from "../../hooks/use-toast";
import { useNavigate } from "react-router-dom";
const pricingPlans = [
  {
    name: "Basic",
    price: 9.99,
    features: ["Up to 5 API endpoints", "Basic monitoring", "Email support"],
  },
  {
    name: "Pro",
    price: 29.99,
    features: [
      "Up to 20 API endpoints",
      "Advanced monitoring",
      "Priority email support",
      "Custom alerts",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited API endpoints",
      "Premium monitoring",
      "24/7 phone support",
      "Custom integration",
      "Dedicated account manager",
    ],
  },
];

export default function PricingLandingPage() {
  const { toast } = useToast();
  // navigation
    const navigate = useNavigate();
  
    const _navigateToGivenPage = (pagePath) =>{
        navigate(pagePath);
    }
  

  const [currency, setCurrency] = useState("USD");
  const [exchangeRate, setExchangeRate] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    apiCount: "",
    projectCount: "",
  });

  useEffect(() => {
    const detectCountry = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        if (data.country === "IN") {
          setCurrency("INR");
          const rate = 85; // 1 USD = 85 INR
          setExchangeRate(rate);
        }
      } catch (error) {
        console.error("Error detecting country:", error);
      }
    };

    detectCountry();
  }, []);

  const formatPrice = (price) => {
    if (typeof price === "string") return price;
    const convertedPrice = price * exchangeRate;
    return currency === "USD"
      ? `$${price.toFixed(2)}`
      : `₹${convertedPrice.toFixed(2)}`;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const messageDescription = `
Company: ${formData.company}
Number of APIs: ${formData.apiCount}
Number of Projects: ${formData.projectCount}

The client is interested in our Enterprise plan and would like more information.
    `.trim();

    const garudaMessageObject = {
      name: formData.name,
      email: formData.email,
      message: messageDescription,
    };

    try {
      await sendMessageToGaruda(garudaMessageObject);
      toast({
        title: "Message Sent to Team",
        description: "We will reach out to you soon!",
        variant: "success",
      });
      setIsModalOpen(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        apiCount: "",
        projectCount: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  // Mock function for sending message to Garuda
  const sendMessageToGaruda = async (messageObject) => {
    // Simulating API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Message sent to Garuda:", messageObject);
    // In a real application, you would make an actual API call here
  };

  return (
    <div className='min-h-screen bg-black text-white'>
      {/* Navbar */}
      <header className='px-4 lg:px-6 h-16 flex items-center fixed w-full bg-black/50 backdrop-blur-sm z-50'>
        <a href='/' className='flex items-center justify-center'>
          <div className='w-8 h-8 bg-gradient-to-br from-[#9333EA] to-[#C084FC] rounded-full' />
          <span className='ml-2 text-lg font-bold'>Garuda</span>
        </a>
        <nav className='ml-auto flex gap-4 sm:gap-6'>
          <a
            href='/'
            className='text-sm font-medium hover:text-[#9333EA] transition-colors'>
            Home
          </a>
          <a
            href='#features'
            className='text-sm font-medium hover:text-[#9333EA] transition-colors'>
            Features
          </a>
          <a
            href='#pricing'
            className='text-sm font-medium hover:text-[#9333EA] transition-colors'>
            Pricing
          </a>
          <a
            href='/contact'
            className='text-sm font-medium hover:text-[#9333EA] transition-colors'>
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className='relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-32'>
        <div className='absolute inset-0 bg-gradient-to-br from-purple-900 to-black opacity-50'></div>
        <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h1 className='text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl'>
              Supercharge Your API Monitoring
            </h1>
            <p className='mx-auto mt-6 max-w-2xl text-xl text-gray-300'>
              Get real-time insights, powerful analytics, and unparalleled
              uptime for your APIs with Garuda.
            </p>
            <div className='mt-10 flex justify-center space-x-4'>
              <a
                href='#pricing'
                className='rounded-md bg-purple-600 px-8 py-3 text-lg font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600'>
                View Pricing
              </a>
              <a
                href='#features'
                className='rounded-md bg-gray-800 px-8 py-3 text-lg font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800'>
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id='features' className='py-20 sm:py-32'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl'>
              Why Choose Garuda?
            </h2>
            <p className='mx-auto mt-3 max-w-2xl text-xl text-gray-400'>
              Powerful features to keep your APIs running smoothly
            </p>
          </div>
          <div className='mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            <div className='flex flex-col items-center'>
              <div className='flex h-16 w-16 items-center justify-center rounded-full bg-purple-600'>
                <Zap className='h-8 w-8 text-white' />
              </div>
              <h3 className='mt-6 text-xl font-semibold'>
                Real-time Monitoring
              </h3>
              <p className='mt-2 text-center text-gray-400'>
                Get instant alerts and updates on your API's performance.
              </p>
            </div>
            <div className='flex flex-col items-center'>
              <div className='flex h-16 w-16 items-center justify-center rounded-full bg-purple-600'>
                <Shield className='h-8 w-8 text-white' />
              </div>
              <h3 className='mt-6 text-xl font-semibold'>Advanced Security</h3>
              <p className='mt-2 text-center text-gray-400'>
                Protect your APIs with our state-of-the-art security measures.
              </p>
            </div>
            <div className='flex flex-col items-center'>
              <div className='flex h-16 w-16 items-center justify-center rounded-full bg-purple-600'>
                <BarChart className='h-8 w-8 text-white' />
              </div>
              <h3 className='mt-6 text-xl font-semibold'>Detailed Analytics</h3>
              <p className='mt-2 text-center text-gray-400'>
                Gain valuable insights with our comprehensive analytics tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id='pricing' className='py-20 sm:py-32'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl'>
              Simple, Transparent Pricing
            </h2>
            <p className='mx-auto mt-3 max-w-2xl text-xl text-gray-400'>
              Choose the plan that's right for you
            </p>
          </div>
          <div className='mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className='rounded-lg bg-gray-900 p-8 shadow-lg ring-1 ring-gray-800 flex flex-col justify-between'>
                <div>
                  <h3 className='text-2xl font-semibold text-purple-400'>
                    {plan.name}
                  </h3>
                  <p className='mt-4 flex items-baseline'>
                    <span className='text-5xl font-extrabold tracking-tight text-white'>
                      {formatPrice(plan.price)}
                    </span>
                    {typeof plan.price === "number" && (
                      <span className='ml-1 text-xl font-semibold text-gray-400'>
                        /month
                      </span>
                    )}
                  </p>
                  <ul className='mt-8 space-y-4'>
                    {plan.features.map((feature) => (
                      <li key={feature} className='flex items-start'>
                        <Check className='h-6 w-6 flex-shrink-0 text-purple-500' />
                        <span className='ml-3 text-gray-300'>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  className='mt-8 w-full rounded-md bg-purple-600 px-6 py-3 text-center text-sm font-semibold text-white shadow hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600'
                  onClick={() =>
                    plan.name === "Enterprise" ? setIsModalOpen(true) : null
                  }>
                  Get started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='relative overflow-hidden py-20 sm:py-32'>
        <div className='absolute inset-0 bg-gradient-to-tl from-purple-900 to-black opacity-50'></div>
        <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl'>
              Ready to get started?
            </h2>
            <p className='mx-auto mt-6 max-w-2xl text-xl text-gray-300'>
              Join thousands of developers who trust Garuda for their API
              monitoring needs.
            </p>
            <div className='mt-10 flex justify-center'>
              <a
                href='/signup'
                className='flex items-center rounded-md bg-purple-600 px-8 py-3 text-lg font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600'>
                Start your free trial <ArrowRight className='ml-2 h-5 w-5' />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Currency Switcher */}
      <div className='fixed bottom-4 right-4'>
        <button
          onClick={() => setCurrency(currency === "USD" ? "INR" : "USD")}
          className='rounded-full bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900'>
          Switch to {currency === "USD" ? "INR" : "USD"}
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50'>
          <div className='bg-gray-900 rounded-lg p-8 max-w-md w-full'>
            <div className='flex justify-between items-center mb-4'>
              <h3 className='text-xl font-bold text-white'>
                Enterprise Plan Inquiry
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className='text-gray-400 hover:text-white'>
                <X className='h-6 w-6' />
              </button>
            </div>
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-gray-400'>
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleInputChange}
                  className='mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500'
                  required
                />
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-400'>
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  className='mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500'
                  required
                />
              </div>
              <div>
                <label
                  htmlFor='company'
                  className='block text-sm font-medium text-gray-400'>
                  Company
                </label>
                <input
                  type='text'
                  id='company'
                  name='company'
                  value={formData.company}
                  onChange={handleInputChange}
                  className='mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500'
                  required
                />
              </div>
              <div>
                <label
                  htmlFor='apiCount'
                  className='block text-sm font-medium text-gray-400'>
                  Number of APIs
                </label>
                <input
                  type='number'
                  id='apiCount'
                  name='apiCount'
                  value={formData.apiCount}
                  onChange={handleInputChange}
                  className='mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500'
                  required
                />
              </div>
              <div>
                <label
                  htmlFor='projectCount'
                  className='block text-sm font-medium text-gray-400'>
                  Number of Projects
                </label>
                <input
                  type='number'
                  id='projectCount'
                  name='projectCount'
                  value={formData.projectCount}
                  onChange={handleInputChange}
                  className='mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500'
                  required
                />
              </div>
              <button
                type='submit'
                className='w-full rounded-md bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900'>
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
