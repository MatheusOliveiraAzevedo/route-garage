export interface Customers {
    id: number
    name: string
    email: string
    phone: string
    address: string
    status: string
    birthDate: string
    gender: string
    cpf: string
    rg: string
    createdAt: Date
    updatedAt: Date
}

export enum statusCustomers {
    'ACTIVE' = 'Ativo',
    'INACTIVE' = 'Inativo'
}

export enum genderCustomers {
    
}