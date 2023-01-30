import { AxiosError } from 'axios'
import { useQuery } from 'react-query'

import axios from '../../../config/axios'
import { IProduct } from './../interfaces/product'

export const PRODUCT_DETAILS_QUERY_KEY = 'PRODUCT_DETAILS'

const useProductDetails = (id: number) =>
    useQuery<IProduct, AxiosError>({
        queryKey: [PRODUCT_DETAILS_QUERY_KEY, id],
        queryFn: async () => (await axios.get<IProduct>(`/products/${id}`)).data,
        enabled: !!id,
    })

export default useProductDetails
