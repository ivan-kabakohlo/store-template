import Box from '@mui/material/Box'

import SignupForm from '../../components/SignupForm/SignupForm'

const LoginPage = () => {
    return (
        <Box
            pt={15}
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <SignupForm />
        </Box>
    )
}

export default LoginPage
