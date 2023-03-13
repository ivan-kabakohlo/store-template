import Alert from '@mui/material/Alert'

interface IProps {
    error?: string
}

const Error = ({
    error = 'Unexpected Error!',
}: IProps) => {
    return (
        <Alert severity="error">{error}</Alert>
    )
}

export default Error
