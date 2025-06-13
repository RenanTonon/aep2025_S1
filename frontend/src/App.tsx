import { Route, Routes } from 'react-router-dom'
import { HomePage } from './routes/Home/HomePage'
import {Login} from './routes/Login/Login'

function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path="/home" element={<HomePage />} />,
    </Routes>
  )
}

export default App
