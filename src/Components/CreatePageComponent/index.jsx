/** @format */

import React, { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Copy,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { useProject } from "../../hooks/useProject";
import { useDispatch, useSelector } from "react-redux";
import { setProjectInfo } from "../../redux/slices/projectSlice";
import { useNavigate } from "react-router-dom";

export default function ProjectCreation() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    projectName: "",
    apiKey: "",
    onCallName: "",
    onCallEmail: "",
    onCallPhone: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [createdProject, setCreatedProject] = useState(null);

  // custom hooks
  const { createProject, createapikey, addOnCallPerson } = useProject();

  // redux
  const dispatch = useDispatch();

  // get current user
  let currentUser = useSelector((state) => state.user.userInfo);

  // get created project

  let currentProject = useSelector((state) => state.project.projectInfo);

  // navigation
  const navigate = useNavigate();

  const _navigateToGivenPage = (pagePath) => {
    navigate(pagePath);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "projectName":
        if (!/^[a-zA-Z_]+$/.test(value)) {
          error = "Project name can only contain alphabets and underscores";
        }
        break;
      case "onCallName":
        if (!/^[a-zA-Z\s]+$/.test(value)) {
          error = "Name can only contain alphabets and spaces";
        }
        break;
      case "onCallEmail":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Please enter a valid email address";
        }
        break;
      case "onCallPhone":
        if (!/^\+?[1-9]\d{1,14}$/.test(value)) {
          error = "Please enter a valid phone number";
        }
        break;
    }
    if (value) {
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleNext = async () => {
    console.log(`This is current project : ${currentProject}`);
    if (step === 1) {
      if (!formData.projectName) {
        setErrors((prev) => ({
          ...prev,
          projectName: "Project name is required",
        }));
      }
      console.log(currentUser);
      // add project creation here
      let projectCreationObject = {
        userId: currentUser._id,
        projectName: formData.projectName,
      };

      if( errors.projectName) {
        return; // Prevent proceeding if there are errors
      }

      let project = await createProject(projectCreationObject);
      setCreatedProject(project);
      dispatch(setProjectInfo(project));
    }
    if (step === 2) {
      if (!formData.onCallEmail) {
        setErrors((prev) => ({
          ...prev,
          onCallEmail: "EmailId of OnCall person is required",
        }));
      }
      if (!formData.onCallPhone) {
        setErrors((prev) => ({
          ...prev,
          onCallPhone: "Phone number of OnCall person is required",
        }));
      }
      if (!formData.onCallName) {
        setErrors((prev) => ({
          ...prev,
          onCallName: "Name of OnCall person is required",
        }));
      }

      if (
        errors.onCallEmail ||
        errors.onCallPhone ||
        errors.onCallName
      ) {
        return; 
      }
      // add the oncall person here
      let onCallPersonCreationObject = {
        onCallPersonEmail: formData.onCallEmail,
        onCallPersonPhoneNumber: formData.onCallPhone,
        onCallPersonName: formData.onCallName,
        projectId: createdProject?._id,
      };

      let onCallPeronCreationResponse = await addOnCallPerson(
        onCallPersonCreationObject
      );
    }
    setStep((prevStep) => prevStep + 1);
    return;
  };

  const handlePrev = () => {
    console.log(formData);

    setStep((prevStep) => prevStep - 1);
  };

  const generateApiKey = async () => {
    setLoading(true);
    if (createdProject) {
      let apiKeyCreationObject = {
        userId: currentUser._id,
        projectId: createdProject._id,
      };
      let apiKey = await createapikey(apiKeyCreationObject);
      setFormData((prev) => ({ ...prev, apiKey }));
      return;
    } else {
      setErrors({ message: "Project is not created yet !" });
      return;
    }
  };

  const copyApiKey = () => {
    navigator.clipboard.writeText(formData.apiKey);
    alert("API key copied to clipboard");
  };

  const handleFormKeyDown = async (e) => {
    if (e.key === "Enter") {
      if (step < 3) {
        e.preventDefault();
        await handleNext();
      }
    }
  };
  const handleSubmit = async (e) => {
    console.log("create project handle submit is being called");

    e.preventDefault();
    // Validate all fields before submission
    validateField("onCallName", formData.onCallName);
    validateField("onCallEmail", formData.onCallEmail);
    validateField("onCallPhone", formData.onCallPhone);

    if (Object.values(errors).some((error) => error !== "")) {
      alert("Please correct the errors before submitting");
      return;
    }
    _navigateToGivenPage("/dashboard");
    console.log("Project created:", formData);
    // Here you would typically send the form data to your backend
  };

  const renderInput = (name, label, type = "text") => (
    <div>
      <label
        htmlFor={name}
        className='block text-sm font-medium text-gray-300 mb-1'>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={formData[name]}
        onChange={handleChange}
        className={`w-full px-3 py-2 bg-gray-800 border ${
          errors[name] ? "border-red-500" : "border-gray-700"
        } rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#9333EA]`}
        required
      />
      {errors[name] && (
        <p className='mt-2 text-sm text-red-500'>{errors[name]}</p>
      )}
    </div>
  );

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className='space-y-4'>
            <h2 className='text-2xl font-bold text-white mb-4'>
              Let's get your Radar ready
            </h2>
            {renderInput("projectName", "Project Name")}
          </div>
        );
      case 3:
        return (
          <div className='space-y-4'>
            <h2 className='text-2xl font-bold text-white mb-4'>
              Generate API Key
            </h2>
            <div>
              <label
                htmlFor='apiKey'
                className='block text-sm font-medium text-gray-300 mb-1'>
                API Key for {formData.projectName}
              </label>
              <div className='flex'>
                <input
                  id='apiKey'
                  name='apiKey'
                  type='text'
                  value={formData.apiKey}
                  readOnly
                  className='w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-md text-white focus:outline-none focus:ring-2 focus:ring-[#9333EA]'
                />
                <button
                  onClick={copyApiKey}
                  className='px-3 py-2 bg-[#9333EA] text-white rounded-r-md hover:bg-[#7E22CE] focus:outline-none focus:ring-2 focus:ring-[#9333EA] focus:ring-offset-2 focus:ring-offset-gray-900'>
                  <Copy className='w-5 h-5' />
                </button>
              </div>
            </div>
            {!formData.apiKey && (
              <button
                disabled={loading ? true : false}
                type='button'
                onClick={generateApiKey}
                className='w-full bg-[#9333EA] text-white py-2 px-4 rounded-md hover:bg-[#7E22CE] focus:outline-none focus:ring-2 focus:ring-[#9333EA] focus:ring-offset-2 focus:ring-offset-gray-900'>
                {loading ? "Generating API Key..." : "Generate API key"}
              </button>
            )}
          </div>
        );
      case 2:
        return (
          <div className='space-y-4'>
            <h2 className='text-2xl font-bold text-white mb-4'>
              Add On-Call Person
            </h2>
            {renderInput("onCallName", "Name")}
            {renderInput("onCallEmail", "Email", "email")}
            {renderInput("onCallPhone", "Phone Number", "tel")}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-black to-[#3B0764] flex items-center justify-center p-4'>
      <div className='w-full max-w-md'>
        <div className='bg-black/50 backdrop-blur-md p-8 rounded-lg shadow-lg'>
          <form
            onKeyDown={handleFormKeyDown}
            onSubmit={step < 3 ? (e) => e.preventDefault() : handleSubmit}
            className='space-y-6'>
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
                  Create Project
                </button>
              )}
            </div>
          </form>
          <div className='mt-4 flex items-center justify-center space-x-2'>
            <span
              className={`w-2 h-2 rounded-full ${
                step === 1 ? "bg-[#9333EA]" : "bg-gray-600"
              }`}></span>
            <span
              className={`w-2 h-2 rounded-full ${
                step === 2 ? "bg-[#9333EA]" : "bg-gray-600"
              }`}></span>
            <span
              className={`w-2 h-2 rounded-full ${
                step === 3 ? "bg-[#9333EA]" : "bg-gray-600"
              }`}></span>
          </div>
        </div>
      </div>
    </div>
  );
}
