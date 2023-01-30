import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { isAxiosError } from 'axios'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Error from '../../../../components/Error/Error'
import useCreateProduct from '../../api/useCreateProduct'

const CreateProductForm = () => {
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const { mutate, isLoading, isSuccess, data, error } = useCreateProduct()
    const errorMessage = isAxiosError(error) ? error.response?.data : ''

    useEffect(() => {
        if (isSuccess) {
            navigate(`/products/${data.id}`)
        }
    }, [isSuccess, data, navigate])

    const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }
    const onChangePrice = (event: ChangeEvent<HTMLInputElement>) => {
        setPrice(event.target.value)
    }
    const onChangeDescription = (event: ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value)
    }
    const onChangeImageUrl = (event: ChangeEvent<HTMLInputElement>) => {
        setImageUrl(event.target.value)
    }

    const onSubmit = (event: FormEvent) => {
        event.preventDefault()

        mutate({
            name,
            description,
            price: +price,
            imageUrl,
        })
    }

    return (
        <Box
            component="form"
            width={450}
            display="flex"
            flexDirection="column"
            gap={2}
            onSubmit={onSubmit}
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
                value={name}
                onChange={onChangeName}
                required
            />

            <TextField
                id="price"
                name="price"
                type="number"
                label="Price"
                value={price}
                onChange={onChangePrice}
                required
            />

            <TextField
                id="description"
                name="description"
                type="text"
                label="Description"
                value={description}
                onChange={onChangeDescription}
                multiline
                rows={3}
            />

            <TextField
                id="imageUrl"
                name="imageUrl"
                type="text"
                label="Image URL"
                value={imageUrl}
                onChange={onChangeImageUrl}
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