import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HeroesRoutes } from '../heroes'
import { LoginPage } from '../auth'
// import { MarvelPage } from '../heroes/pages/MarvelPage'
// import { DCPage } from '../heroes/pages/DCPage'
// import { LoginPage } from '../auth/pages/LoginPage'
// import { Navbar } from '../ui'

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='login' element={<LoginPage />} />
                <Route path='/*' element={<HeroesRoutes />} />
            </Routes>
        </>
    )
}
