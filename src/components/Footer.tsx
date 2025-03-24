import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-4 text-center font-poppins">
      <p className="text-sm">
        Criado por{' '}
        <a
          href="https://github.com/Drufontael" // Substitua pelo seu link
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:underline"
        >
          Eduardo Estigarribia
        </a>
      </p>
    </footer>
  );
};

export default Footer;