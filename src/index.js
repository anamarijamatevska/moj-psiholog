import React from 'react'
import ReactDOM from 'react-dom/client'

import HomePage from './pages/Home/HomePage'
import LoginPage from './pages/Login/LoginPage'

import 'bootstrap/dist/css/bootstrap.min.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import WelcomePage from './pages/Welcome/WelcomePage'
import ProtectedRoute from './pages/ProtectedRoute/ProtectedRoute'
import ProtectedForLoggedIn from './pages/ProtectedRoute/ProtectedForLoggedIn'
import SurveyPage from './pages/Survey/SurveyPage'

import './index.css'

const hasUser = sessionStorage.getItem('hasUser')

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedForLoggedIn user={hasUser}><HomePage /></ProtectedForLoggedIn>,
  },
  {
    path: '/login',
    element: <ProtectedForLoggedIn user={hasUser}><LoginPage /></ProtectedForLoggedIn>
  },
  {
    path: '/welcome',
    element: <ProtectedRoute user={hasUser}><WelcomePage /></ProtectedRoute>
  },
  {
    path: '/survey',
    element: <ProtectedRoute user={hasUser}><SurveyPage /></ProtectedRoute>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
