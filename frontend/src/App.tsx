import { Route, Routes } from 'react-router'
import { HomePage } from './routes/Home/HomePage'
import Login from './components/PageLoyout/components/Login'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path="/home" element={<HomePage />} />,
    </Routes>
  )
}

export default App
