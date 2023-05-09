import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [valor, novovalor] = useState(0)

  return (
    <>
      <div>
        <h1>Contador simples</h1>
        <h2>{valor}</h2>
        <button className="btn" onClick={() => novovalor(valor + 1)}>
          Aumenta
        </button>
        <button className="btn" onClick={() => novovalor(valor - 1)}>
          Diminui
        </button>
        <button className="btn" onClick={() => novovalor(0)}>
          Reinicia
        </button>
      </div>
    </>
  )
}

export default App
