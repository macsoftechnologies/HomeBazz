import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// Import Bootstrap JS for interactive components (modals, dropdowns, etc)
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// Import custom global styles
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
