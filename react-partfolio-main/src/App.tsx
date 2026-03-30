import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Project from './pages/Project'
import History from './pages/History'
import Notfound from './pages/Notfound'
import HomeLayout from './pages/HomeLayout'

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<HomeLayout/>}>
      {/* <Route path='/' element={<Home/>}/> */}
      <Route index element={<Home/>}/>
      <Route path='/Project' element={<Project/>}/>
      <Route path='/History' element={<History/>}/>
      </Route>
      <Route path='/*' element={<Notfound/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
