import Box from '@mui/material/Box'

import LoginForm from '../../components/LoginForm/LoginForm'

const LoginPage = () => {
    return (
        <Box
            pt={15}
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <LoginForm />
        </Box>
    )
}

export default LoginPage
