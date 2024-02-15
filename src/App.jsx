
import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './Pages/LandingPage'
import RegisterPage from './Pages/RegisterPage'
import AllStudents from './Pages/AllStudents'

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/allStudents' element={<AllStudents/>}/>
     </Routes>
    </>
  )
}

export default App