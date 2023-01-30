import { AxiosError } from 'axios'
import { useQuery } from 'react-query'

import axios from '../../../config/axios'
import { IProduct } from './../interfaces/product'

export const PRODUCT_LIST_QUERY_KEY = 'PRODUCT_LIST'

const useProductList = () =>
    useQuery<IProduct[], AxiosError>(
        PRODUCT_LIST_QUERY_KEY,
        async () => (await axios.get<IProduct[]>('/products')).data,
    )

export default useProductList
