import { IUser } from './../../users/interfaces/user'

export interface IProduct {
    id: number
    name: string
    description: string
    price: string
    imageUrl: string
    createdAt: string
    updatedAt: string
    user: IUser
}
