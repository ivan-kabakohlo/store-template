import Container from '@mui/material/Container'
import { ReactNode } from 'react'

import Navbar from '../../components/navbar/navbar'

interface IProps {
    children: ReactNode
}

const BaseLayout = ({ children }: IProps) => {
    return (
        <>
            <Navbar />
            <Container component="main" maxWidth={false}>{children}</Container>
        </>
    )
}

export default BaseLayout