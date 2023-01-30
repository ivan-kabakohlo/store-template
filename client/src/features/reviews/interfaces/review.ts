import { IUser } from '../../users/interfaces/user'

export interface IReview {
    id: number
    productId: number
    text: string
    createdAt: string
    updatedAt: string
    user: IUser
}
