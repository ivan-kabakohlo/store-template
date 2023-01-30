import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import useReviews from '../../../reviews/api/useReviews'
import CreateReviewForm from '../../../reviews/components/CreateReviewForm/CreateReviewForm'
import ReviewList from '../../../reviews/components/ReviewList/ReviewList'
import ProductGallery from '../ProductGallery/ProductGallery'

interface IProps {
    id: number
    name: string
    description: string
    imageUrl: string
    price: string
}

const ProductDetails = ({
    id,
    name,
    description,
    imageUrl,
    price,
}: IProps) => {
    const { data: reviews } = useReviews(id)

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

                <Box>
                    <CreateReviewForm productId={id} />
                    {reviews &&  <ReviewList reviews={reviews} />}
                </Box>
            </Grid>
        </Grid>
    )
}

export default ProductDetails
