import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Manifest from './pages/Manifest'
import Research from './pages/Research'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manifest" element={<Manifest />} />
        <Route path="/research" element={<Research />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
