import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './src/components/Pages/HomePage'
import Layout from './src/components/layout/Layout'
import MovieDetailsPage from './src/components/Pages/MovieDetailsPage'

const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path='/movie/:id' element={<MovieDetailsPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes