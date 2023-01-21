import Container from '@mui/material/Container'

import useProductList from '../../api/useProductList'
import ProductGrid from '../../components/productGrid/productGrid'

const ProductList = () => {
    const { data } = useProductList()

    return (
        <Container>
            {data && <ProductGrid products={data} />}
        </Container>
    )
}

export default ProductList
