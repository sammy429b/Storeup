import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AuthProvider } from './context/AuthContext'

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement || document.createElement('div')).render(
  <AuthProvider>
    <App />
  </AuthProvider>
)
