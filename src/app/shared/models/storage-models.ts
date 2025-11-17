export interface Car {
    id: number;
    name: string;
    brand: string;
    model: string;
    yearFabrication: number;
    yearModel: number;
    color: string;
    price: number;
    km: number;
    status: string;
    description: string;
    image: string;
}


export enum statusCar {
  "DISPONIVEL" = 'Disponível',
  "VENDIDO" = 'Vendido',
  "RESERVADO" = 'Reservado',
  "EM_MANUTENCAO" = 'Em manutenção',
}

export type optionStorageModal = 'add' | 'edit'