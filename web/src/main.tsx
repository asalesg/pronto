import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

import './global.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    
    <h1 className='m-5 p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center center'>Esse "botãozinho" é meu primeiro projeto feito em React com Typescript.</h1>
    <p className='m-5 p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center center'>Foram muitos erros até conseguir deixar 100% funcional. Agora ele tem um servidor onde recebo os feedbacks e até a imagem.</p>
    
    <App />
  </React.StrictMode>
)
