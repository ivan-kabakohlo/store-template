import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { ChangeEvent } from 'react'
import { useState } from 'react'

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onChangeUsername = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    }
    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }
        
    return (
        <Box
            component="form"
            width={300}
            display="flex"
            flexDirection="column"
            gap={2}
        >
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

            <Button variant="contained" sx={{ width: '100%' }} size="large">
                Sign In
            </Button>
        </Box>
    )
}

export default LoginForm
