import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import ProductGallery from '../../components/productGallery/productGallery'

const ProductDetails = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <ProductGallery />
            </Grid>

            <Grid item xs={4}>
                <Typography variant="h3">Product Name</Typography>
                <Typography variant="body2">Product Description</Typography>
            </Grid>
        </Grid>
    )
}

export default ProductDetails
