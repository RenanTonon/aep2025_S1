import { Route, Routes } from 'react-router'
import { HomePage } from './routes/Home/HomePage'

function App() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />,
    </Routes>
  )
}

export default App
