import React from "react";

function StepTwo({ formData, setFormData, errors }) {
  return (
    <div className="animate-fade-in max-w-3xl mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4 text-center sm:text-2xl">Step 2: Contact Information</h2>

      {/* Phone Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Phone Number</label>
        <input
          type="text"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 sm:text-lg"
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
      </div>

      {/* Alternate Phone Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Alternate Phone Number</label>
        <input
          type="text"
          value={formData.alternatePhone}
          onChange={(e) =>
            setFormData({ ...formData, alternatePhone: e.target.value })
          }
          className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 sm:text-lg"
        />
        {errors.alternatePhone && (
          <p className="text-red-500 text-sm">{errors.alternatePhone}</p>
        )}
      </div>

      {/* Address Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Address</label>
        <input
          type="text"
          value={formData.address}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
          className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 sm:text-lg"
        />
        {errors.address && (
          <p className="text-red-500 text-sm">{errors.address}</p>
        )}
      </div>

      {/* Country Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Country</label>
        <input
          type="text"
          value={formData.country}
          onChange={(e) =>
            setFormData({ ...formData, country: e.target.value })
          }
          className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 sm:text-lg"
        />
        {errors.country && (
          <p className="text-red-500 text-sm">{errors.country}</p>
        )}
      </div>

      {/* City Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">City</label>
        <input
          type="text"
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 sm:text-lg"
        />
        {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
      </div>
    </div>
  );
}

export default StepTwo;
