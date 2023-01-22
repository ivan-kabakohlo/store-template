import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { isAxiosError } from 'axios'
import { useParams } from 'react-router-dom'

import Error from '../../../../components/Error/Error'
import useProductDetails from '../../api/useProductDetails'
import ProductGallery from '../../components/ProductGallery/ProductGallery'

const ProductDetailsPage = () => {
    const { id } = useParams()
    const { isLoading, data, error } = useProductDetails(Number(id))

    if (isLoading) {
        return (
            <Grid container justifyContent="center">
                <Grid item>
                    <CircularProgress />
                </Grid>
            </Grid>
        )
    }
    if (error) {
        const errorMessage = isAxiosError(error) ? error.response?.data : ''
        return <Error error={errorMessage} />
    }
    if (!data) {
        return (
            <Typography variant="body1" component="p">
                Product details is not available.
            </Typography>
        )
    }

    const { name, description, imageUrl, price } = data

    return (
        <Grid container spacing={6}>
            <Grid item sm={6}>
                <Box p={2} mb={2}>
                    <ProductGallery imageUrl={imageUrl} />
                </Box>

                <Box p={2}>
                    <Typography variant="h4" mb={2} component="h1">{name}</Typography>
                    <Typography variant="body2" component="p">{description}</Typography>
                </Box>
            </Grid>

            <Grid item sm={6}>
                <Box p={2} mb={2}>
                    <Grid container spacing={4}>
                        <Grid item xl={6}>
                            <Typography variant="h4" component="p">{price}$</Typography>
                        </Grid>

                        <Grid item xl={6}>
                            <Button
                                variant="contained"
                                sx={{
                                    width: '200px',
                                    '@media (max-width: 768px)': {
                                        width: 'unset',
                                    },
                                }}
                            >
                                Add to Cart
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
}

export default ProductDetailsPage
