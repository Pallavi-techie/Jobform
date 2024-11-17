// import React from "react";

// function StepThree({ formData, setFormData, errors }) {
//   return (
//     <div className="animate-fade-in max-w-3xl mx-auto p-4">
//       <h2 className="text-xl font-semibold mb-4 text-center sm:text-2xl">Step 3: Education and Experience</h2>

//       {/* Education Level */}
//       <div className="mb-4">
//         <label className="block text-sm font-medium mb-1">Education Level</label>
//         <select
//           value={formData.education}
//           onChange={(e) =>
//             setFormData({ ...formData, education: e.target.value })
//           }
//           className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 sm:text-lg"
//         >
//           <option value="">Select Education Level</option>
//           <option value="High School">High School</option>
//           <option value="Undergraduate">Undergraduate</option>
//           <option value="Postgraduate">Postgraduate</option>
//         </select>
//         {errors.education && (
//           <p className="text-red-500 text-sm">{errors.education}</p>
//         )}
//       </div>

//       {/* Experience Input */}
//       <div className="mb-4">
//         <label className="block text-sm font-medium mb-1">Work Experience</label>
//         <textarea
//           value={formData.experience}
//           onChange={(e) =>
//             setFormData({ ...formData, experience: e.target.value })
//           }
//           className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 sm:text-lg"
//         />
//         {errors.experience && (
//           <p className="text-red-500 text-sm">{errors.experience}</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default StepThree;


import React from "react";

function StepThree({ formData, setFormData, errors }) {
  return (
    <div className="animate-fade-in">
      <h2 className="text-xl font-semibold mb-4">Step 3: Education and Experience</h2>

      {/* Education Level */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Education Level</label>
        <select
          value={formData.education}
          onChange={(e) =>
            setFormData({ ...formData, education: e.target.value })
          }
          className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="">Select Education Level</option>
          <option value="High School">High School</option>
          <option value="Undergraduate">Undergraduate</option>
          <option value="Postgraduate">Postgraduate</option>
        </select>
        {errors.education && (
          <p className="text-red-500 text-sm">{errors.education}</p>
        )}
      </div>

      {/* Experience Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Work Experience</label>
        <textarea
          value={formData.experience}
          onChange={(e) =>
            setFormData({ ...formData, experience: e.target.value })
          }
          className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          rows="4"
        />
        {errors.experience && (
          <p className="text-red-500 text-sm">{errors.experience}</p>
        )}
      </div>

      {/* Qualification Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Qualification</label>
        <input
          type="text"
          value={formData.qualification}
          onChange={(e) =>
            setFormData({ ...formData, qualification: e.target.value })
          }
          className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        {errors.qualification && (
          <p className="text-red-500 text-sm">{errors.qualification}</p>
        )}
      </div>

      {/* Submit Message */}
      <div className="mt-6">
        <p className="text-lg font-semibold text-gray-700">
          You're almost done! Review your information and click "Submit" to
          complete your registration.
        </p>
      </div>
    </div>
  );
}

export default StepThree;