import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import QuizScreen from './screens/QuizScreen/'
import Router from './routes/router'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
   <Router/>
  </React.StrictMode>,
)
