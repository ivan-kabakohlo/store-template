import { createBrowserRouter } from 'react-router-dom'

import App from './App'
import LoginPage from './features/auth/pages/LoginPage/LoginPage'
import SignupPage from './features/auth/pages/SignupPage/SignupPage'
import CreateProductPage from './features/products/pages/CreateProductPage/CreateProductPage'
import ProductDetailsPage from './features/products/pages/ProductDetailsPage/ProductDetailsPage'
import ProductListPage from './features/products/pages/ProductListPage/ProductListPage'
import UserDetailsPage from './features/users/pages/UserDetailsPage/UserDetailsPage'
import UserListPage from './features/users/pages/UserListPage/UserListPage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'login',
                element: <LoginPage />,
            },
            {
                path: 'signup',
                element: <SignupPage />,
            },
            {
                path: 'users',
                element: <UserListPage />,
            },
            {
                path: 'users/:id',
                element: <UserDetailsPage />,
            },
            {
                path: 'products',
                element: <ProductListPage />,
            },
            {
                path: 'products/:id',
                element: <ProductDetailsPage />,
            },
            {
                path: 'products/create',
                element: <CreateProductPage />,
            },
        ],
    },
])

export default router