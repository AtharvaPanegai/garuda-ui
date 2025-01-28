/** @format */

import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  CheckCircle,
  XCircle,
  Info,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { setUserInfo, signUpStart } from "../../redux/slices/userSlice";
import { useAuth } from "../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    username: "",
    emailId: "",
    phoneNumber: "",
    role: "",
    companyName: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [error, setError] = useState({});

  // custom hooks
  const { signUp } = useAuth();

  // redux states
  const dispatch = useDispatch();

  // navigation
  const navigate = useNavigate();

  const _navigateToGivenPage = (pagePath) => {
    navigate(pagePath);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isStrongPassword = (password) => password.length >= 8;
  const isValidPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);

  const renderFieldFeedback = (
    field,
    isValid,
    validMessage,
    invalidMessage
  ) => {
    if (focusedField === field) {
      return (
        <p className='mt-2 text-sm flex items-center'>
          {isValid ? (
            <>
              <CheckCircle className='w-4 h-4 text-green-500 mr-2' />
              <span className='text-green-500'>{validMessage}</span>
            </>
          ) : (
            <>
              <XCircle className='w-4 h-4 text-red-500 mr-2' />
              <span className='text-red-500'>{invalidMessage}</span>
            </>
          )}
        </p>
      );
    }
    return null;
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <>
            <div>
              <label
                htmlFor='username'
                className='block text-sm font-medium text-gray-300 mb-1'>
                username
              </label>
              <input
                id='username'
                name='username'
                type='text'
                value={formData.username}
                onChange={handleChange}
                className='w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#9333EA]'
                required
              />
            </div>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-300 mb-1'>
                Email Address
              </label>
              <input
                id='emailId'
                name='emailId'
                type='email'
                value={formData.emailId}
                onChange={handleChange}
                onFocus={() => setFocusedField("emailId")}
                onBlur={() => setFocusedField(null)}
                className='w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#9333EA]'
                required
              />
              {renderFieldFeedback(
                "email",
                isValidEmail(formData.emailId),
                "Valid email format",
                "Please enter a valid email address"
              )}
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div>
              <label
                htmlFor='role'
                className='block text-sm font-medium text-gray-300 mb-1'>
                Role in Company
              </label>
              <input
                id='role'
                name='role'
                type='text'
                value={formData.role}
                onChange={handleChange}
                className='w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#9333EA]'
                required
              />
            </div>
            <div>
              <label
                htmlFor='companyName'
                className='block text-sm font-medium text-gray-300 mb-1'>
                Company Name
              </label>
              <input
                id='companyName'
                name='companyName'
                type='text'
                value={formData.companyName}
                onChange={handleChange}
                className='w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#9333EA]'
                required
              />
            </div>
            <div>
              <label
                htmlFor='phoneNumber'
                className='block text-sm font-medium text-gray-300 mb-1'>
                Phone Number
              </label>
              <input
                id='phoneNumber'
                name='phoneNumber'
                type='tel'
                value={formData.phoneNumber}
                onChange={handleChange}
                onFocus={() => setFocusedField("phoneNumber")}
                onBlur={() => setFocusedField(null)}
                className='w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#9333EA]'
                required
              />
              {renderFieldFeedback(
                "phoneNumber",
                isValidPhoneNumber(formData.phoneNumber),
                "Valid phone number",
                "Please enter a valid phone number"
              )}
            </div>
          </>
        );
      case 3:
        return (
          <div>
            <label
              htmlFor='password'
              className='block text-sm font-medium text-gray-300 mb-1'>
              Password
            </label>
            <div className='relative'>
              <input
                id='password'
                name='password'
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                onFocus={() => setFocusedField("password")}
                onBlur={() => setFocusedField(null)}
                className='w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#9333EA]'
                required
              />
              <button
                type='button'
                onClick={() => setShowPassword(!showPassword)}
                className='absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white'>
                {showPassword ? (
                  <EyeOff className='w-5 h-5' />
                ) : (
                  <Eye className='w-5 h-5' />
                )}
              </button>
            </div>
            {renderFieldFeedback(
              "password",
              isStrongPassword(formData.password),
              "Strong password",
              "Password must be at least 8 characters long"
            )}
          </div>
        );
      default:
        return null;
    }
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    dispatch(signUpStart());

    try {
      const userData = await signUp(formData);
      console.log("user signup sucessfully", userData);
      localStorage.setItem("token", userData.token);
      dispatch(setUserInfo(userData));
      _navigateToGivenPage("/createproject");
    } catch (err) {
      console.error("Sign-up failed:", err.message);
      setError(err.message || "Failed to sign up. Please try again.");
    }
  };
  return (
    <div className='min-h-screen bg-gradient-to-br from-black to-[#3B0764] flex items-center justify-center p-4'>
      <div className='w-full max-w-md'>
        <div className='bg-black/50 backdrop-blur-md p-8 rounded-lg shadow-lg'>
          <h2 className='text-3xl font-bold text-white mb-6 text-center'>
            Sign Up for Garuda
          </h2>
          <form onSubmit={handleSubmit} className='space-y-4'>
            {renderStepContent()}
            <div className='flex justify-between mt-6'>
              {step > 1 && (
                <button
                  type='button'
                  onClick={handlePrev}
                  className='flex items-center text-[#9333EA] hover:text-[#7E22CE]'>
                  <ArrowLeft className='w-4 h-4 mr-2' />
                  Previous
                </button>
              )}
              {step < 3 && (
                <button
                  type='button'
                  onClick={handleNext}
                  className='flex items-center text-[#9333EA] hover:text-[#7E22CE] ml-auto'>
                  Next
                  <ArrowRight className='w-4 h-4 ml-2' />
                </button>
              )}
              {step === 3 && (
                <button
                  type='submit'
                  className='w-full ml-5 bg-gradient-to-r from-[#9333EA] to-[#C084FC] text-white py-2 px-4 rounded-md hover:from-[#7E22CE] hover:to-[#A855F7] focus:outline-none focus:ring-2 focus:ring-[#9333EA] focus:ring-offset-2 focus:ring-offset-gray-900'>
                  Sign Up
                </button>
              )}
            </div>
          </form>
          <div className='mt-4 text-sm text-gray-400 flex items-start'>
            <Info className='w-5 h-5 text-[#9333EA] mr-2 flex-shrink-0 mt-0.5' />
            <p>
              We value your privacy. Your information is safe with us and will
              never be shared or sold to third parties.
            </p>
          </div>
          <p className='mt-4 text-sm text-gray-400 text-center'>
            By signing up, you agree to our{" "}
            <a href='/refunds' className='text-[#9333EA] hover:underline'>
              Refund Policy
            </a>{" "}
            and{" "}
            <a href='/privacy' className='text-[#9333EA] hover:underline'>
              Privacy Policy
            </a>
          </p>
          <p className='mt-4 text-sm text-gray-400 text-center'>
            Already have an account?{" "}
            <a href='/signin' className='text-[#9333EA] hover:underline'>
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
