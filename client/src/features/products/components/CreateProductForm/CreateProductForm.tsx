import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { isAxiosError } from 'axios'
import { useFormik } from 'formik'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Error from '../../../../components/Error/Error'
import useCreateProduct from '../../api/useCreateProduct'

const CreateProductForm = () => {
    const navigate = useNavigate()

    const { mutate, isLoading, isSuccess, data, error } = useCreateProduct()

    const errorMessage = isAxiosError(error) ? error.response?.data : ''

    const formik = useFormik({
        initialValues: {
            name: '',
            price: '',
            description: '',
            imageUrl: '',
        },
        onSubmit: (values) => {
            mutate({ ...values, price: +values.price })
        },
    })

    useEffect(() => {
        if (isSuccess) {
            navigate(`/products/${data.id}`)
            formik.resetForm()
        }
    }, [isSuccess, data, navigate])

    return (
        <Box
            component="form"
            width={450}
            display="flex"
            flexDirection="column"
            gap={2}
            onSubmit={formik.handleSubmit}
        >
            {error && (
                <Box width="100%" mb={2}>
                    <Error error={errorMessage} />
                </Box>
            )}

            <TextField
                id="name"
                name="name"
                type="text"
                label="Product Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                required
            />

            <TextField
                id="price"
                name="price"
                type="number"
                label="Price"
                value={formik.values.price}
                onChange={formik.handleChange}
                required
            />

            <TextField
                id="description"
                name="description"
                type="text"
                label="Description"
                value={formik.values.description}
                onChange={formik.handleChange}
                multiline
                rows={3}
            />

            <TextField
                id="imageUrl"
                name="imageUrl"
                type="text"
                label="Image URL"
                value={formik.values.imageUrl}
                onChange={formik.handleChange}
            />

            <Button
                variant="contained"
                sx={{ width: '100%' }}
                size="large"
                type="submit"
                disabled={isLoading}
            >
                Create
            </Button>
        </Box>
    )
}

export default CreateProductForm