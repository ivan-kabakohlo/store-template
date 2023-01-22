import CircularProgress from '@mui/material/CircularProgress'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { isAxiosError } from 'axios'
import { useParams } from 'react-router-dom'

import Error from '../../../../components/error/error'
import useProductDetails from '../../api/useProductDetails'
import ProductGallery from '../../components/productGallery/productGallery'

const ProductDetails = () => {
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

    const { name, description, imageUrl } = data

    return (
        <Grid container spacing={6}>
            <Grid item sm={6}>
                <ProductGallery imageUrl={imageUrl} />
            </Grid>

            <Grid item sm={6}>
                <Container maxWidth={false}>
                    <Typography variant="h4" mb={3}>{name}</Typography>
                    <Typography variant="body2">{description}</Typography>
                </Container>
            </Grid>
        </Grid>
    )
}

export default ProductDetails
