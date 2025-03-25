import React from 'react';

interface CustomAlertProps {
  message: string;
  onClose: () => void;
}

const CustomAlert: React.FC<CustomAlertProps> = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md">
        <h3 className="text-xl font-bold mb-4">Portfólio</h3>
        <p className="text-gray-700 mb-6">{message}</p>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          onClick={onClose}
        >
          Entendido
        </button>
      </div>
    </div>
  );
};

export default CustomAlert;