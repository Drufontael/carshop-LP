import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../index.css";
import VehicleCard from "./VehicleCard";
import { Vehicle } from "../types/types";
import vehicles from "../data/vehicles.json";
import CustomAlert from "./CustomAlert";



const InventorySection: React.FC = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const openModal = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
  };

  const closeModal = () => {
    setSelectedVehicle(null);
  };

  const openAlert = () => {
    setIsAlertOpen(true);
  };

  const closeAlert = () => {
    setIsAlertOpen(false);
  };

  return (
    <section
      id="estoque"
      className="px-4 py-8 bg-gray-900 font-poppins text-white mb-10"
    >
      <h2 className="text-2xl font-bold text-center mb-8">
        Escolha Seu Automóvel
      </h2>

      {/* Carrossel com Swiper */}
      <Swiper
        modules={[Pagination, Navigation]} // Habilita os módulos de paginação e navegação
        spaceBetween={20} // Espaçamento entre os cards
        slidesPerView={1} // Número de cards visíveis por página
        breakpoints={{
          640: {
            slidesPerView: 2, // 2 cards em telas médias (sm)
          },
          1024: {
            slidesPerView: 3, // 3 cards em telas grandes (lg)
          },
        }}
        pagination={{ clickable: true }} // Pontinhos clicáveis
        navigation // Setas laterais (< e >)
        className="w-full"
      >
        {vehicles.map((vehicle, index) => (
          <SwiperSlide key={index}>
            <VehicleCard 
            vehicle={vehicle} 
            onInfoClick={openModal}
            onContactClick={openAlert} 
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Modal */}
      {selectedVehicle && (
        <div className="fixed inset-0 bg-black bg-opacity-95 flex flex-col h-screen justify-center items-center p-4 z-50">
          <h1 className="text-3xl font-bold text-white mb-4">
            {selectedVehicle.model} {selectedVehicle.year}
          </h1>
          <div className="flex w-full justify-around items-center">
            <img
              src={selectedVehicle.img}
              alt={`Foto do modelo ${selectedVehicle.model}`}
              className="hidden md:block w-1/3 max-w-screen-lg object-cover"
            />

            <ul className="list-disc text-white max-w-md">
              {selectedVehicle.info?.map((info, index) => (
                <li key={index}>{info}</li>
              ))}
            </ul>
          </div>
          <p className="mt-4 uppercase">Não trabalhamos com veiculos sinistrados ou de leilão!</p>
          <p className="uppercase">Não pegamos imóveis como forma de pagamento!</p>
          <p className="text-2xl font-bold text-white mt-4">
            Preço: R$ {selectedVehicle.price.toLocaleString()}
          </p>
          <div className="flex justify-center w-full mt-4">
            <button
              className="mt-4 mx-4 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition-colors"
              onClick={closeModal}
            >
              Faça sua proposta
            </button>
            <button
              className="mt-4 mx-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
              onClick={closeModal}
            >
              Fechar
            </button>
          </div>
          
        </div>
      )}
      {isAlertOpen && (
        <CustomAlert
          message="Esta é uma landing page de portfólio. O botão não possui funcionalidade."
          onClose={closeAlert}
        />
      )}
    </section>
  );
};

export default InventorySection;
