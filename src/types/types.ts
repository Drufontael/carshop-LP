export interface Vehicle {
    img: string; // URL da imagem do carro
    model: string; // Modelo do carro
    km: number; // Quilometragem
    year: number; // Ano do carro
    price: number; // Preço
    info?: string[]; // Informações adicionais (opcional)
  }          