import React, { useState } from "react";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import ThankYou from "./components/ThankYou";

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  });
  const [errors, setErrors] = useState({});

  const nextStep = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const prevStep = () => setStep(step - 1);

  // Validation function for each step
  const validateStep = () => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = "Name is required.";
      if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
        newErrors.email = "Valid email is required.";
      if (!formData.dob) newErrors.dob = "Date of birth is required.";
      if (!formData.gender) newErrors.gender = "Gender is required.";
    } else if (step === 2) {
      if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone))
        newErrors.phone = "Valid 10-digit phone number is required.";
      if (!formData.alternatePhone || !/^\d{10}$/.test(formData.alternatePhone))
        newErrors.alternatePhone = "Valid alternate phone number is required.";
      if (!formData.address.trim()) newErrors.address = "Address is required.";
      if (!formData.country.trim()) newErrors.country = "Country is required.";
      if (!formData.city.trim()) newErrors.city = "City is required.";
    } else if (step === 3) {
      if (!formData.education) newErrors.education = "Education level is required.";
      if (!formData.experience.trim()) newErrors.experience = "Experience is required.";
      if (!formData.qualification.trim()) newErrors.qualification = "Qualification is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  return (
    <div className="flex min-h-screen bg-gray-100 items-center justify-center px-4 sm:px-8">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl overflow-hidden">
        {/* Left Side */}
        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/2 bg-gradient-to-br from-green-500 to-green-700 text-white flex flex-col items-center justify-center p-8 relative transition-transform duration-300">
            <h2 className="absolute top-8 text-2xl font-semibold text-center animate-bounce">
              JOB APPLICATION FORM
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-24 h-24 mt-6"
            >
              <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
            </svg>
            <h1 className="text-3xl font-bold mt-16">Welcome!</h1>
            <p className="mt-4 text-lg">Get started with your registration.</p>
          </div>

          {/* Right Side */}
          <div className="w-full sm:w-1/2 p-8">
            {/* Progress Bar */}
            <div className="flex mb-6">
              <div
                className={`flex-1 h-2 rounded ${step >= 1 ? "bg-green-500" : "bg-gray-300"} transition-all duration-300`}
              ></div>
              <div
                className={`flex-1 h-2 mx-2 rounded ${step >= 2 ? "bg-green-500" : "bg-gray-300"} transition-all duration-300`}
              ></div>
              <div
                className={`flex-1 h-2 mx-2 rounded ${step >= 3 ? "bg-green-500" : "bg-gray-300"} transition-all duration-300`}
              ></div>
              <div
                className={`flex-1 h-2 rounded ${step >= 4 ? "bg-green-500" : "bg-gray-300"} transition-all duration-300`}
              ></div>
            </div>

            {/* Steps */}
            {step === 1 && (
              <StepOne
                formData={formData}
                setFormData={setFormData}
                errors={errors}
              />
            )}
            {step === 2 && (
              <StepTwo
                formData={formData}
                setFormData={setFormData}
                errors={errors}
              />
            )}
            {step === 3 && (
              <StepThree
                formData={formData}
                setFormData={setFormData}
                errors={errors}
              />
            )}
            {step === 4 && <ThankYou />}

            {/* Navigation Buttons */}
            {step <= 3 && (
              <div className="mt-6 flex justify-between flex-col sm:flex-row">
                {step > 1 && (
                  <button
                    onClick={prevStep}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-all duration-300 mb-4 sm:mb-0"
                  >
                    Back
                  </button>
                )}
                {step < 3 && (
                  <button
                    onClick={nextStep}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-all duration-300"
                  >
                    Next
                  </button>
                )}
                {step === 3 && (
                  <button
                    onClick={() => {
                      if (validateStep()) setStep(4); // Final validation
                    }}
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-all duration-300"
                  >
                    Submit
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
