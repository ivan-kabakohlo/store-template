import { AxiosError } from 'axios'
import { useQuery } from 'react-query'

import axios from '../../../config/axios'
import { IReview } from './../interfaces/review'

const useReviews = (productId: number) =>
    useQuery<IReview[], AxiosError>({
        queryKey: ['reviewsByProductId', productId],
        queryFn: async () => (await axios.get<IReview[]>(`/comments?productId=${productId}`)).data,
        enabled: !!productId,
    })

export default useReviews
