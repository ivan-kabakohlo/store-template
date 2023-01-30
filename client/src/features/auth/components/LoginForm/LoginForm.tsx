import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { isAxiosError } from 'axios'
import { ChangeEvent, FormEvent } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Error from '../../../../components/Error/Error'
import useLogin from '../../api/useLogin'

const LoginForm = () => {
    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { mutate, isLoading, error } = useLogin({
        onSuccess: () => navigate('/products'),
    })
    const errorMessage = isAxiosError(error) ? error.response?.data : ''

    const onChangeUsername = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    }
    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }
    
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        mutate({ username, password })
    }

    return (
        <Box
            component="form"
            width={300}
            display="flex"
            flexDirection="column"
            gap={2}
            onSubmit={onSubmit}
        >
            {error && (
                <Box width="100%" mb={2}>
                    <Error error={errorMessage} />
                </Box>
            )}

            <TextField
                id="username"
                name="username"
                type="text"
                label="Username"
                value={username}
                onChange={onChangeUsername}
                required
            />

            <TextField
                id="password"
                name="username"
                type="password"
                label="Password"
                value={password}
                onChange={onChangePassword}
                required
            />

            <Button
                variant="contained"
                sx={{ width: '100%' }}
                size="large"
                type="submit"
                disabled={isLoading}
            >
                Sign In
            </Button>
        </Box>
    )
}

export default LoginForm
