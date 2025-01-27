/** @format */

import { useState } from "react";
import { Send, Lightbulb, ArrowLeft } from "lucide-react";
import { toast } from "../../hooks/use-toast";
import { useAuth } from "../../hooks/useAuth";

export default function SuggestionPage() {
  const { sendMessageToGaruda } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill out all fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      let garudaMessageObject = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };
      await sendMessageToGaruda(garudaMessageObject);

      toast({
        title: "Success",
        description: "Your suggestion has been submitted. Thank you!",
        variant: "success",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting suggestion:", error);
      toast({
        title: "Error",
        description: "Failed to submit suggestion. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='min-h-screen bg-black text-white flex flex-col'>
      {/* Background pattern */}
      <div className='fixed inset-0 bg-black z-0'>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNNTQuMDggMzlsLTEwLjYyIDEwLjYyTDMwIDYzLjA4IDE2LjU0IDQ5LjYyIDUuOTIgMzkgMCAzMy4wOGwxNi41NC0xNi41NEwzMCAzLjA4IDQzLjQ2IDE2LjU0IDYwIDMzLjA4bC01LjkyIDUuOTJ6IiBmaWxsPSIjMzMzIiBmaWxsLW9wYWNpdHk9Ii4wMiIgZmlsbC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPg==')]"></div>
      </div>

      {/* Content */}
      <div className='relative z-10 flex-grow flex flex-col items-center justify-center px-4 py-12'>
        <div className='w-full max-w-4xl bg-gray-900 rounded-lg shadow-xl overflow-hidden'>
          <div className='md:flex'>
            {/* Left side - Form */}
            <div className='md:w-1/2 p-6 sm:p-8'>
              <h1 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text'>
                Make a Suggestion
              </h1>
              <form onSubmit={handleSubmit} className='space-y-4'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-gray-400 mb-1'>
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleInputChange}
                    className='w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500'
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-400 mb-1'>
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    className='w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500'
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium text-gray-400 mb-1'>
                    Suggestion
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleInputChange}
                    rows='4'
                    className='w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500'
                    required></textarea>
                </div>
                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full flex items-center justify-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors'>
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      <Send className='mr-2' size={20} />
                      Submit Suggestion
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Right side - Additional content */}
            <div className='md:w-1/2 bg-purple-900 p-6 sm:p-8 flex flex-col justify-between'>
              <div>
                <h2 className='text-2xl font-bold mb-4 flex items-center'>
                  <Lightbulb className='mr-2' size={24} />
                  Why Your Feedback Matters
                </h2>
                <p className='text-gray-300 mb-4'>
                  Your suggestions help us improve and shape the future of our
                  platform. We value every idea and use your feedback to make
                  Garuda better for everyone.
                </p>
                <ul className='list-disc list-inside text-gray-300 space-y-2'>
                  <li>Influence future features</li>
                  <li>Help us prioritize improvements</li>
                  <li>Share your unique perspective</li>
                  <li>Be part of our growing community</li>
                </ul>
              </div>
              <div className='mt-8'>
                <a
                  href='/dashboard'
                  className='inline-flex items-center text-white hover:text-purple-300 transition-colors'>
                  <ArrowLeft className='mr-2' size={20} />
                  Back to Dashboard
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
