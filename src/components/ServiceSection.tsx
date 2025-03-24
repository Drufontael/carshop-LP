import React, { useState } from "react";
import emailjs from "emailjs-com";

const ServiceSection = () => {
  // Estado para controlar a visibilidade do modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Função para abrir o modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Função para enviar o e-mail usando EmailJS
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Obter os valores do formulário
    const formData = new FormData(e.currentTarget);
    const data = {
      user_name: formData.get("name"),
      user_phone: formData.get("phone"),
      car_brand_model: formData.get("brand-model"),
      car_year: formData.get("year"),
      car_mileage: formData.get("mileage"),
      car_auction: formData.get("auction") ? "Sim" : "Não",
      car_accident: formData.get("accident") ? "Sim" : "Não",
      service_type: formData.get("service-type"), // Valor do radio button
    };

    // Enviar o e-mail via EmailJS
    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID || "", // Substitui o SERVICE_ID
        process.env.REACT_APP_TEMPLATE_ID || "", // Substitui o TEMPLATE_ID
        data,
        process.env.REACT_APP_PUBLIC_KEY || "" // Substitui a PUBLIC_KEY
      )
      .then(
        (result: { text: any }) => {
          console.log(result.text); // Sucesso
          alert("E-mail enviado com sucesso!");
        },
        (error: { text: any }) => {
          console.error(error.text); // Erro
          alert("Ocorreu um erro ao enviar o e-mail. Tente novamente.");
        }
      );

    // Fechar o modal após o envio
    closeModal();
  };

  return (
    <section id="servicos" className="p-4 bg-gray-900 text-white font-poppins">
      {/* Grid de serviços */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="text-center p-4">
          <h2 className="text-2xl italic mb-2">Compramos seu carro</h2>
          <p className="text-lg mb-2">
            Chegou a hora de trocar seu carro, nós compramos o seu usado, traga
            ele para fazermos uma avaliação!
          </p>
          <button
            className="px-4 py-2 mx-auto bg-orange-500 rounded-md shadow-md hover:bg-orange-600 hover:shadow-lg transition-colors"
            onClick={openModal} // Abre o modal ao clicar no botão
          >
            Agendar avaliação
          </button>
        </div>
        <div className="text-center p-4">
          <h2 className="text-2xl italic mb-2">Consignação</h2>
          <p className="text-lg mb-2">
            Não quer se preocupar com a venda do seu carro? Deixe com a gente,
            cuidamos de tudo para você!
          </p>
          <button
            className="px-4 py-2 mx-auto bg-orange-500 rounded-md shadow-md hover:bg-orange-600 hover:shadow-lg transition-colors"
            onClick={openModal} // Abre o modal ao clicar no botão
          >
            Informe os dados de seu carro
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-gray-800 text-white p-6 rounded-lg w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">
              Preencha os dados do seu carro
            </h3>
            <form className="space-y-4" onSubmit={sendEmail}>
              {/* Nome */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Ex.: João Silva"
                  className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              {/* Telefone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-1"
                >
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Ex.: (99) 99999-9999"
                  className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              {/* Marca/Modelo */}
              <div>
                <label
                  htmlFor="brand-model"
                  className="block text-sm font-medium mb-1"
                >
                  Marca/Modelo
                </label>
                <input
                  type="text"
                  id="brand-model"
                  name="brand-model"
                  placeholder="Ex.: Chevrolet Onix"
                  className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              {/* Ano de Fabricação */}
              <div>
                <label
                  htmlFor="year"
                  className="block text-sm font-medium mb-1"
                >
                  Ano de Fabricação
                </label>
                <input
                  type="number"
                  id="year"
                  name="year"
                  placeholder="Ex.: 2020"
                  className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              {/* Quilometragem */}
              <div>
                <label
                  htmlFor="mileage"
                  className="block text-sm font-medium mb-1"
                >
                  Quilometragem
                </label>
                <input
                  type="number"
                  id="mileage"
                  name="mileage"
                  placeholder="Ex.: 30000"
                  className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              {/* Leilão */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="auction"
                  name="auction"
                  className="mr-2"
                />
                <label htmlFor="auction" className="text-sm">
                  Este carro foi leiloado?
                </label>
              </div>

              {/* Sinistro */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="accident"
                  name="accident"
                  className="mr-2"
                />
                <label htmlFor="accident" className="text-sm">
                  Este carro sofreu sinistro?
                </label>
              </div>

              {/* Radio Button: Avaliação ou Consignação */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Tipo de serviço
                </label>
                <div className="flex space-x-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="evaluation"
                      name="service-type"
                      value="Avaliação"
                      className="mr-2"
                      required
                    />
                    <label htmlFor="evaluation" className="text-sm">
                      Avaliação
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="consignment"
                      name="service-type"
                      value="Consignação"
                      className="mr-2"
                      required
                    />
                    <label htmlFor="consignment" className="text-sm">
                      Consignação
                    </label>
                  </div>
                </div>
              </div>

              {/* Botões de Ação */}
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="px-4 py-2 bg-red-500 rounded-md hover:bg-red-600 transition-colors"
                  onClick={closeModal}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 rounded-md hover:bg-green-600 transition-colors"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServiceSection;
