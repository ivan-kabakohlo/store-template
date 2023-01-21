import Box from '@mui/material/Box'
import { LazyLoadImage } from 'react-lazy-load-image-component'

interface IProps {
    imageUrl: string
}

const ProductGallery = ({ imageUrl }: IProps) => {
    return (
        <Box>
            <LazyLoadImage
                src={imageUrl}
                style={{
                    width: '100%',
                    maxHeight: '80vh',
                    objectFit: 'contain',
                }}
            />
        </Box>
    )
}

export default ProductGallery
