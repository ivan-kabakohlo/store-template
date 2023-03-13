import Box from '@mui/material/Box'
import { LazyLoadImage } from 'react-lazy-load-image-component'

interface IProps {
    imageUrl: string
}

const ProductGallery = ({ imageUrl }: IProps) => {
    return (
        <Box
            sx={{
                height: '50vh',
                '@media (max-width: 768px)': {
                    height: '40vh',
                },
            }}
        >
            <LazyLoadImage
                src={imageUrl}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                }}
            />
        </Box>
    )
}

export default ProductGallery
