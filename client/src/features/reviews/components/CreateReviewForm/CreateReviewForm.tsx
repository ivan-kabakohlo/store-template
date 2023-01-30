import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { ChangeEvent, FormEvent,useEffect,useState } from 'react'

import useCreateReview from '../../api/useCreateReview'

interface IProps {
    productId: number
}

const CreateReviewForm = ({ productId }: IProps) => {
    const [reviewText, setReviewText] = useState('')

    const { mutate, isLoading, isSuccess } = useCreateReview(productId)

    useEffect(() => {
        if (isSuccess) {
            setReviewText('')
        }
    }, [isSuccess])

    const onChangeReviewText = (event: ChangeEvent<HTMLInputElement>) => {
        setReviewText(event.target.value)
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        mutate(reviewText)
    }

    return (
        <Box
            component="form"
            p={2}
            gap={2}
            sx={{ maxWidth: 600 }}
            display="flex"
            flexDirection="column"
            onSubmit={onSubmit}
        >
            <TextField
                id="review"
                name="review"
                label="Write a Review"
                value={reviewText}
                onChange={onChangeReviewText}
                multiline
                rows={2}
            />

            <Box display="flex" justifyContent="flex-end" width="100%">
                <Button
                    type="submit"
                    variant="contained"
                    disabled={isLoading}
                    sx={{ width: 120 }}
                >
                    Send
                </Button>
            </Box>
        </Box>
    )
}

export default CreateReviewForm
