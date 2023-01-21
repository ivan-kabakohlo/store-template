import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Login from './features/auth/pages/login/login'
import Signup from './features/auth/pages/signup/signup'
import ProductDetails from './features/products/pages/productDetails/productDetails'
import ProductList from './features/products/pages/productList/productList'
import CreateProduct from './features/products/pages/createProduct/createProduct'
import UserList from './features/users/pages/userList/userList'
import UserDetails from './features/users/pages/userDetails/userDetails'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'login',
                element: <Login />,
            },
            {
                path: 'signup',
                element: <Signup />,
            },
            {
                path: 'users',
                element: <UserList />,
            },
            {
                path: 'users/:id',
                element: <UserDetails />,
            },
            {
                path: 'products',
                element: <ProductList />,
            },
            {
                path: 'products/:id',
                element: <ProductDetails />,
            },
            {
                path: 'products/create',
                element: <CreateProduct />,
            },
        ],
    },
])

export default router