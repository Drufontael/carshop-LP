// src/components/ContactSection.tsx
import React from 'react';
import ContactMap from './ContactMap';
import logo from '../assets/images/logo-mm.png';
import contactInfo from '../data/contact.json'



const ContactSection: React.FC = () => {
  // Coordenadas da loja (podem ser alteradas dinamicamente)
  const coordinates = {
    latitude: -16.6982,
    longitude: -49.269657,
  };

  return (
    <section id='localizacao' className="py-12 bg-gray-900 text-white font-poppins z-1">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Mapa */}
        <div>
          <ContactMap latitude={coordinates.latitude} longitude={coordinates.longitude} />
        </div>

        {/* Informações de Contato */}
        <div>
          <div className='flex content-center align-middle mb-3'>
            <img src={logo} alt="Logo da loja" className="w-auto h-32 mx-auto object-cover" />
          </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">Entre em Contato</h2>
          <p className="mb-2">{contactInfo.address}</p>
          <p className="mb-2">Telefone: {contactInfo.phone}</p>
          <p className="mb-4">E-mail: {contactInfo.email}</p>
          <div className="flex space-x-4">
            {contactInfo.socialMedia.map((media, index) => (
              <a
                key={index}
                href={media.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity"
              >
                <img src={media.icon} alt={`${media.name} Icon`} className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;