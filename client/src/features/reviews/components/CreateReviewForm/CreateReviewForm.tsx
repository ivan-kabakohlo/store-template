import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { isAxiosError } from 'axios'
import { ChangeEvent, FormEvent,useEffect,useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import Error from '../../../../components/Error/Error'
import useAuthContext from '../../../auth/contexts/AuthContext'
import useCreateReview from '../../api/useCreateReview'

interface IProps {
    productId: number
}

const CreateReviewForm = ({ productId }: IProps) => {
    const { isAuthenticated } = useAuthContext()
    const [reviewText, setReviewText] = useState('')

    const { mutate, isLoading, error, isSuccess } = useCreateReview(productId)
    const errorMessage = isAxiosError(error) ? error.response?.data : ''

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

    if (!isAuthenticated) {
        return (
            <Box
                p={2}
                gap={2}
                sx={{ maxWidth: 600 }}
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Typography variant="body2" component="p">
                    <Link
                        variant="body2"
                        component={RouterLink}
                        to="/login"
                    >
                        Log in
                    </Link> to leave review.
                </Typography>
            </Box>
        )
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
            {error && (
                <Box width="100%" mb={2}>
                    <Error error={errorMessage} />
                </Box>
            )}

            <TextField
                id="review"
                name="review"
                label="Write a Review"
                value={reviewText}
                onChange={onChangeReviewText}
                multiline
                required
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
