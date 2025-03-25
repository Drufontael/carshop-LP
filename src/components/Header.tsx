import React from "react";
import { ReactComponent as Icon } from "../assets/images/whatsapp-icon.svg";
import logo from "../assets/images/logo-carshop.png";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import contactInfo from "../data/contact.json"; // Componente de menu toggle

const Header: React.FC = () => {
  // Definir os links de navegação
  const navigation = [
    { name: "Estoque", href: "#estoque" },
    { name: "Serviços", href: "#servicos" },
    { name: "Localização", href: "#localizacao" },
  ];

  return (
    <header className="bg-black text-white font-poppins py-2">
      <Disclosure>
        {({ open }) => (
          <>
            {/* Container principal */}
            <div className="mx-auto flex justify-between items-center px-4">
              <div className="flex items-center space-x-1">
                {/* Logo */}
                <img
                  src={logo}
                  alt="Logo da loja"
                  className="w-auto h-16 object-cover"
                />
                <h1 className="text-xl">CARSHOP</h1>
              </div>

              {/* Links de navegação (visível apenas em telas maiores) */}
              <div className="hidden md:flex space-x-3 items-center">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="hover:underline"
                  >
                    {item.name}
                  </a>
                ))}

                {/* Botão "Fale conosco" (visível apenas em telas maiores) */}
                <a
                  href="https://wa.me/5562984471302"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-green-500 px-4 py-2 rounded-lg shadow-md hover:bg-green-600 hover:translate-y-0.5 transition-transform"
                >
                  <Icon className="w-6 h-6 mr-2" />
                  Fale conosco
                </a>
              </div>

              {/* Ícones do menu toggle e WhatsApp (visível apenas em telas menores) */}
              <div className="md:hidden flex items-center space-x-4">
                {/* Botão WhatsApp simplificado */}
                <a
                  href={contactInfo.socialMedia[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-green-500 rounded-full shadow-md hover:bg-green-600 hover:translate-y-0.5 transition-transform"
                >
                  <Icon className="w-6 h-6" />
                </a>

                {/* Ícone do menu toggle */}
                <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </DisclosureButton>
              </div>
            </div>

            {/* Menu toggle (visível apenas em telas menores) */}
            <DisclosurePanel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    </header>
  );
};

export default Header;
