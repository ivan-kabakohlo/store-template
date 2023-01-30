import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import { Fragment } from 'react'

import { IReview } from '../../interfaces/review'
import Review from '../Review/Review'

interface IProps {
    reviews: IReview[]
}

const ReviewList = ({ reviews }: IProps) => {
    return   (
        <List sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper' }}>
            {reviews.map(review => (
                <Fragment key={review.id}>
                    <ListItem>
                        <Review {...review} />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </Fragment>
            ))}
        </List>
    )
}

export default ReviewList
