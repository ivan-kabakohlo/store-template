import { AxiosError } from 'axios'
import { useMutation, useQueryClient } from 'react-query'

import axios from '../../../config/axios'
import { IProduct } from './../interfaces/product'
import { PRODUCT_LIST_QUERY_KEY } from './useProductList'


interface ICreateProductRequestBody {
    name: string
    description: string
    price: number
    imageUrl: string
}

const useCreateProduct = () => {
    const queryClient = useQueryClient()

    return useMutation<IProduct, AxiosError, ICreateProductRequestBody>({
        mutationFn: async (product: ICreateProductRequestBody) =>
            (await axios.post<IProduct>('/products', product)).data,
        onSuccess: data => {
            queryClient.setQueryData<IProduct[]>(
                PRODUCT_LIST_QUERY_KEY,
                (currentProducts?: IProduct[]) => [
                    data,
                    ...(currentProducts ? currentProducts : []),
                ],
            )
        },
    })
}

export default useCreateProduct
