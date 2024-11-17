import React from "react";

function StepOne({ formData, setFormData, errors }) {
  return (
    <div className="animate-fade-in max-w-3xl mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4 text-center sm:text-2xl">Step 1: Personal Information</h2>

      {/* Name Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 sm:text-lg"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      {/* Email Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 sm:text-lg"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      {/* Date of Birth */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Date of Birth</label>
        <input
          type="date"
          value={formData.dob}
          onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
          className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 sm:text-lg"
        />
        {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
      </div>

      {/* Gender */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Gender</label>
        <select
          value={formData.gender}
          onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
          className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 sm:text-lg"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
      </div>
    </div>
  );
}

export default StepOne;



