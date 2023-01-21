import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useParams } from 'react-router-dom'

import useProductDetails from '../../api/useProductDetails'
import ProductGallery from '../../components/productGallery/productGallery'

const ProductDetails = () => {
    const { id } = useParams()
    const { data } = useProductDetails(Number(id))

    if (!data) {
        return null
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
