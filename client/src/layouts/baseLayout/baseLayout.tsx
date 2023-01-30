import Container from '@mui/material/Container'
import { ReactNode } from 'react'

import Navbar from '../../components/Navbar/Navbar'

interface IProps {
    children: ReactNode
}

const BaseLayout = ({ children }: IProps) => {
    return (
        <>
            <Navbar />

            <Container
                component="main"
                maxWidth={false}
                sx={{ py: 4, px: 0 }}
            >
                {children}
            </Container>
        </>
    )
}

export default BaseLayout
