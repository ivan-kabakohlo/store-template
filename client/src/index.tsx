import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { RouterProvider } from 'react-router-dom'

import queryClient from './config/queryClient'
import { AuthProvider } from './contexts/AuthContext'
import reportWebVitals from './reportWebVitals'
import router from './router'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
)
root.render(
    <React.StrictMode>
        <AuthProvider>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
                <ReactQueryDevtools />
            </QueryClientProvider>
        </AuthProvider>
    </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
