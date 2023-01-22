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

const ProductCard = ({
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

                <CardContent
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Typography
                        variant="h5"
                        component="h2"
                        mb={2}
                        sx={{
                            height: '2lh',
                            display: '-webkit-box',
                            overflow: 'hidden',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 2,
                        }}
                    >
                        {name}
                    </Typography>
                    <Typography
                        gutterBottom
                        variant="body2"
                        color="text.secondary"
                        mb={3}
                        sx={{
                            height: '3lh',
                            display: '-webkit-box',
                            overflow: 'hidden',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 3,
                        }}
                    >
                        {description}
                    </Typography>
                    <Typography variant="h5" component="p">
                        {price}$
                    </Typography>
                </CardContent>

                <CardActions sx={{ marginTop: 'auto', padding: '16px' }}>
                    <Button variant="contained" sx={{ width: '100%' }}>
                        Add to Cart
                    </Button>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}

export default ProductCard
