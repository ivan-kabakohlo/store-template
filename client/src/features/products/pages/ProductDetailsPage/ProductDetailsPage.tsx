import CircularProgress from '@mui/material/CircularProgress'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { isAxiosError } from 'axios'
import { useParams } from 'react-router-dom'

import Error from '../../../../components/Error/Error'
import useProductDetails from '../../api/useProductDetails'
import ProductDetails from '../../components/ProductDetails/ProductDetails'

const ProductDetailsPage = () => {
    const { id } = useParams()
    const { isLoading, data, error } = useProductDetails(Number(id))

    if (isLoading) {
        return (
            <Grid container justifyContent="center">
                <Grid item pt={30}>
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

    return <ProductDetails {...data} />
}

export default ProductDetailsPage
