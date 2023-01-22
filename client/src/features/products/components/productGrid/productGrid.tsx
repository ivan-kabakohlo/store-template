import Grid from '@mui/material/Grid'

import { IProduct } from '../../interfaces/product'
import ProductCard from '../ProductCard/ProductCard'

interface IProps {
    products: IProduct[]
}

const ProductGrid = ({ products }: IProps) => {
    return (
        <Grid
            container
            maxWidth="1150px"
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
        >
            {products.map((product) => (
                <Grid item xs={2} sm={4} md={4} key={product.id}>
                    <ProductCard product={product} />
                </Grid>
            ))}
        </Grid>
    )
}

export default ProductGrid
