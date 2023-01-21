import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'

const ProductGridItem = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea component={Link} to="/products/id">
                <CardMedia
                    sx={{ height: 150 }}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="green iguana"
                />

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button size="small">Add to Cart</Button>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}

export default ProductGridItem
