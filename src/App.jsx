import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
import Sharpe from './Sharpe.jsx'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sharpe" element={<Sharpe />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
