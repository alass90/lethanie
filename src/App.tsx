import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Manifest from './pages/Manifest'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manifest" element={<Manifest />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
