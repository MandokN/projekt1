import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Speed from './components/Speed.jsx'
import Weight from './components/Weight.jsx'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/Speed' element={<Speed />}/>
        <Route path='/Weight' element={<Weight />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
