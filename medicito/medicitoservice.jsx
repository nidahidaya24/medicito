// File: MedicitoServices.jsx
import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';

export default function MedicitoServices() {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useState('');

  const handleSaveLocation = () => {
    setIsOpen(false);
    alert(Location set to: ${location});
  };

  return (
    <div className="min-h-screen bg-purple-100 p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium text-gray-700">OUR SERVICES</h2>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-100 text-blue-900 font-semibold px-4 py-2 rounded-xl shadow hover:bg-blue-200"
        >
          add location
        </button>
      </div>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-sm rounded bg-white p-6">
            <Dialog.Title className="text-lg font-medium">Set your location</Dialog.Title>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Enter location"
                className="w-full p-2 border border-gray-300 rounded"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <button onClick={() => setIsOpen(false)} className="px-4 py-2 bg-gray-200 rounded">
                Cancel
              </button>
              <button onClick={handleSaveLocation} className="px-4 py-2 bg-blue-500 text-white rounded">
                Save
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <img src="/medicine.png" alt="medicine" className="h-16 mb-4" />
          <h3 className="text-md font-medium">medicine purchase</h3>
          <span className="text-2xl text-blue-400">+</span>
        </div>

        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <img src="/doctor.png" alt="doctor" className="h-16 mb-4" />
          <h3 className="text-md font-medium">Doctor Booking</h3>
          <span className="text-2xl text-blue-400">+</span>
        </div>

        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <img src="/hospital.png" alt="hospital" className="h-16 mb-4" />
          <h3 className="text-md font-medium">Hospitals</h3>
          <span className="text-2xl text-blue-400">+</span>
        </div>
      </div>
    </div>
  );
}