// app/components/helper/Modal.js
import React from 'react';

function Modal({ show, onClose, title, company, location, duration, responsibilities }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#1a1443] p-6 rounded-md w-full max-w-lg text-white">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <button onClick={onClose} className="text-white text-2xl">&times;</button>
        </div>
        <p className="text-sm">{company}</p>
        <p className="text-sm">{location}</p>
        <p className="text-sm text-[#16f2b3]">{duration}</p>
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Responsibilities:</h3>
          <ul className="list-disc pl-5 mt-2 text-sm text-gray-300">
            {responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Modal;