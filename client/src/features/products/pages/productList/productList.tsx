import CircularProgress from '@mui/material/CircularProgress'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { isAxiosError } from 'axios'

import Error from '../../../../components/error/error'
import useProductList from '../../api/useProductList'
import ProductGrid from '../../components/productGrid/productGrid'

const ProductList = () => {
    const { isLoading, error, data } = useProductList()

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
                Products are not available.
            </Typography>
        )
    }

    return  (
        <Container>
            <ProductGrid products={data} />
        </Container>
    )
}

export default ProductList
