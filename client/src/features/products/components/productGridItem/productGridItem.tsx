import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'

import { IProduct } from '../../interfaces/product'

interface IProps {
    product: IProduct
}

const ProductGridItem = ({
    product: {
        id,
        name,
        description,
        imageUrl,
        price,
    },
}: IProps) => {
    return (
        <Card sx={{ maxWidth: 345, height: '100%' }}>
            <CardActionArea
                sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'initial',
                    justifyContent: 'flex-start',
                }}
                component={Link}
                to={`/products/${id}`}
            >
                <CardContent>
                    <CardMedia
                        sx={{ height: 150, backgroundSize: 'contain' }}
                        image={imageUrl}
                        title={name}
                    />
                </CardContent>

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Typography variant="h6">
                        {price}$
                    </Typography>
                </CardContent>

                <CardActions sx={{ marginTop: 'auto' }}>
                    <Button size="small">Add to Cart</Button>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}

export default ProductGridItem
