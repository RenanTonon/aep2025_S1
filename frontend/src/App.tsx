import { Route, Routes } from 'react-router'
import { HomePage } from './routes/Home/HomePage'
import { Login } from './routes/Login/Login'
import { PostagemPage } from './routes/Postagem/PostagemPage'
import { SignupPage } from './routes/Signup/SingupPage'
import { CommentPage } from './routes/Comment/CommentPage'


function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />,
      <Route path="/home" element={<HomePage />} />,
      <Route path="/postagem" element={<PostagemPage/>}/>,
      <Route path="/signup" element={<SignupPage />} />,
      <Route path='/comentarios/:id' element={<CommentPage/>}/>
    </Routes>
  )
}

export default App
