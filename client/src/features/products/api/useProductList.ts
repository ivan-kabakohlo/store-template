import { AxiosError } from 'axios'
import { useQuery } from 'react-query'

import axios from '../../../config/axios'
import { IProduct } from './../interfaces/product'

const useProductList = () =>
    useQuery<IProduct[], AxiosError>(
        'productList',
        async () => (await axios.get<IProduct[]>('/products')).data,
    )

export default useProductList
