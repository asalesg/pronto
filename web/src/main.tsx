import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

import './global.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    
    <h1 className='m-5 p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center'>Esse "botãozinho" é meu primeiro projeto feito em React com Typescript.</h1>
    <p className='m-5 p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center'>Foram muitos erros até conseguir deixar 100% funcional. Agora ele tem um servidor onde recebo os feedbacks e até a imagem.</p>
    <button className='text-xs m-5 p-2 white rounded-md border border-violet-500 font-bold flex justify-center items-center center'><a target="_blank" href="https://asalesg.github.io/portfolio/">Clique para acessar uma página com mais informações sobre mim.</a></button>
    <App />
  </React.StrictMode>
)
