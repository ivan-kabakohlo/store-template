import { AxiosError } from 'axios'
import { useQuery } from 'react-query'

import axios from '../../../config/axios'
import { IProduct } from './../interfaces/product'

const useProductDetails = (id: number) =>
    useQuery<IProduct, AxiosError>(
        'productDetails',
        async () => (await axios.get<IProduct>(`/products/${id}`)).data,
        { enabled: !!id },
    )

export default useProductDetails
