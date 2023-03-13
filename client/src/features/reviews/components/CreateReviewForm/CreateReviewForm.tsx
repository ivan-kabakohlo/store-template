import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { isAxiosError } from 'axios'
import { useFormik } from 'formik'
import { useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import Error from '../../../../components/Error/Error'
import useAuthContext from '../../../auth/contexts/AuthContext'
import useCreateReview from '../../api/useCreateReview'

interface IProps {
    productId: number
}

const CreateReviewForm = ({ productId }: IProps) => {
    const { isAuthenticated } = useAuthContext()

    const { mutate, isLoading, error, isSuccess } = useCreateReview(productId)

    const errorMessage = isAxiosError(error) ? error.response?.data : ''

    const formik = useFormik({
        initialValues: {
            reviewText: '',
        },
        onSubmit: (values, { resetForm }) => {
            mutate(values.reviewText)
            resetForm()
        },
    })

    useEffect(() => {
        if (isSuccess) {
            formik.resetForm()
        }
    }, [formik, isSuccess])

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
            onSubmit={formik.handleSubmit}
        >
            {error && (
                <Box width="100%" mb={2}>
                    <Error error={errorMessage} />
                </Box>
            )}

            <TextField
                id="reviewText"
                name="reviewText"
                label="Write a Review"
                value={formik.values.reviewText}
                onChange={formik.handleChange}
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
