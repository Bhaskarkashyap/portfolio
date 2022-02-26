import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Project from './Pages/Project'


const App = () => {
  return (
<Routes>
<Route path='/' element={<Home />} />
<Route path='/project' element={<Project />} />
</Routes>
  )
}

export default App