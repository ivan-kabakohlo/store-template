import Grid from '@mui/material/Grid'

import { IProduct } from '../../interfaces/product'
import ProductGridItem from '../productGridItem/productGridItem'

interface IProps {
    products: IProduct[]
}

const ProductGrid = ({ products }: IProps) => {
    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {products.map((product) => (
                <Grid item xs={2} sm={4} md={4} key={product.id}>
                    <ProductGridItem product={product} />
                </Grid>
            ))}
        </Grid>
    )
}

export default ProductGrid
