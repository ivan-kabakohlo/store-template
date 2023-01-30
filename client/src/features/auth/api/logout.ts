const logout = () => {
    localStorage.removeItem('ACCESS_TOKEN')
    localStorage.removeItem('REFRESH_TOKEN')

    window.location.replace('/login')
}

export default logout
