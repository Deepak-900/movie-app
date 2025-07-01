import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './src/components/Pages/HomePage'
import Layout from './src/components/layout/Layout'

const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<HomePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes