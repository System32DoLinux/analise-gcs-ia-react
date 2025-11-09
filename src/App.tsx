import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <div className="App">
      <h1>Contador</h1>
      <p>Valor: {count}</p>
      <div>
        <button onClick={() => setCount((prev) => prev - 1)}>Decrementar</button>
        <button onClick={() => setCount((prev) => prev + 1)}>Incrementar</button>
      </div>
    </div>
  )
}

export default App
