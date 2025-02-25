import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import LandingPage from './pages/LandingPage.jsx'
import FeaturesPage from './pages/FeaturesPage.jsx'
import ResumePage from './pages/ResumePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SignupPage from './pages/SignupPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1>Error, Page Not Found</h1>,
    children: [
      {
        index: true,
        element: <LandingPage />
      },
      {
        path: '/features',
        element: <FeaturesPage />
      },
      {
        path: '/resume',
        element: <ResumePage />
      },
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/signup',
        element: <SignupPage />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
