import { AxiosError } from 'axios'
import { useMutation, useQueryClient } from 'react-query'

import axios from '../../../config/axios'
import { IReview } from './../interfaces/review'

const useCreateReview = (productId: number) => {
    const queryClient = useQueryClient()

    return useMutation<IReview, AxiosError, string>({
        mutationFn: async (review: string) =>
            (await axios.post<IReview>('/comments', { productId, text: review })).data,
        onSuccess: data => {
            queryClient.setQueryData<IReview[]>(
                ['reviewsByProductId', productId],
                (currentReviews?: IReview[]) => [
                    data,
                    ...(currentReviews ? currentReviews : []),
                ],
            )
        },
    })
}

export default useCreateReview
