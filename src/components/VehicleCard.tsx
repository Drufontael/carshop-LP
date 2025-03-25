import React from 'react';
import { Vehicle } from '../types/types';
import { transform } from 'typescript';



interface VehicleCardProps {
  vehicle: Vehicle;
  onInfoClick: (vehicle: Vehicle) => void;
  onContactClick: () => void;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle, onInfoClick, onContactClick }) => {
  

  return (
    <article className="relative group rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 hover:translate-x-1 bg-black bg-opacity-60 font-poppins">
      {/* Imagem do Carro */}
      <div className='relative'>
        <img
          src={vehicle.img}
          alt={`Foto do modelo ${vehicle.model}`}
          className="w-full h-48 object-cover"
        />
        {vehicle.km < 25000 && (
          <div className='absolute w-48 top-0 right-0 bg-orange-600 text-white px-2 py-1 text-xs text-center font-bold uppercase transform rotate-45 translate-x-16 translate-y-5'>
            SEMI-NOVO
          </div>
        )}
      </div>

      {/* Informações do Carro */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-white">{vehicle.model}</h3>
        <p className="text-sm text-gray-200">
          {vehicle.year} | {vehicle.km.toLocaleString()} km
        </p>
        <p className="text-lg font-semibold text-green-600 mt-2">
          R$ {vehicle.price.toLocaleString()}
        </p>

        {/* Botões */}
        <div className="flex justify-between mt-4">
          <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors" onClick={() => onInfoClick(vehicle)}>
            Info
          </button>
          <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition-colors" onClick={() => onContactClick()}>
            Contato
          </button>
        </div>
      </div>

    </article>
  );
};

export default VehicleCard;