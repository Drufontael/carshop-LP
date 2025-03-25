import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import vehicles from "../data/vehicles.json";
import CustomAlert from "./CustomAlert";

const HeroSection: React.FC = () => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const openAlert = (e:React.FormEvent) => {
    e.preventDefault();
    setIsAlertOpen(true);
  };

  const closeAlert = () => {
    setIsAlertOpen(false);
  };

  return (
    <section className="relative italic font-poppins h-svh bg-gray-900 text-white mb-10">
      <Swiper
        modules={[Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        loop
        //effect="fade"
        speed={2000}
      >
        {vehicles.map((vehicle, index) => (
          <SwiperSlide key={index}>
            <img
              src={vehicle.img}
              alt={`Foto do modelo ${vehicle.model}`}
              className="w-full h-svh object-cover opacity-30"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute top-0 left-0 w-full h-full md:flex md:items-center z-10">
        <div className="h-1/3 mx-auto text-center content-center max-w-lg z-10">
          <p className="drop-shadow-lg text-2xl font-bold mb-4 mr-2">
            Carros incríveis, preços imbatíveis! Descubra o seu usado dos sonhos
            aqui. Visite-nos e dirija para casa hoje mesmo!
          </p>
        </div>

        <div className="bg-black bg-opacity-80 max-w-lg mx-auto p-8 rounded">
          <h2 className="text-2xl font-bold mb-4 mx-auto text-center">
            Fale conosco
          </h2>
          <p className="text-center mb-4">
            Preencha o formulário e recebe o contato de um de nossos vendedores
            para ajudar você a encontrar o seu carro.
          </p>
          <form
            className="flex flex-col text-black items-center"
            onSubmit={openAlert}
          >
            <input
              type="text"
              placeholder="Nome"
              className="w-full p-2 mb-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 mb-2 border border-gray-300 rounded"
            />
            <input
              type="tel"
              placeholder="Celular"
              pattern="[0-9]*"
              className="w-full p-2 mb-2 border border-gray-300 rounded"
            />
            <button
              type="submit"
              className="bg-orange-500 text-white px-4 py-2 rounded w-full hover:bg-orange-600 transition-colors"
            >
              Receber contato
            </button>
          </form>
        </div>
      </div>
      {isAlertOpen && (
        <CustomAlert
          message="Esta é uma landing page de portifólio. O botão não possui funcionalidade."
          onClose={closeAlert}
        />
      )}
    </section>
  );
};

export default HeroSection;
