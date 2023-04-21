import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './assets/component/Home'
import Footer from './assets/component/Footer'
import Header from './assets/component/Header'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App
