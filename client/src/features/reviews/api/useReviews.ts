import { AxiosError } from 'axios'
import { useQuery } from 'react-query'

import axios from '../../../config/axios'
import { IReview } from './../interfaces/review'

export const REVIEWS_BY_PRODUCT_ID_QUERY_KEY = 'REVIEWS_BY_PRODUCT_ID'

const useReviews = (productId: number) =>
    useQuery<IReview[], AxiosError>({
        queryKey: [REVIEWS_BY_PRODUCT_ID_QUERY_KEY, productId],
        queryFn: async () => (await axios.get<IReview[]>(`/comments?productId=${productId}`)).data,
        enabled: !!productId,
    })

export default useReviews
