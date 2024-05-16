import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header/Header'
import Kampaniyalar from './pages/Kampaniyalar'
import Papadias from './pages/Papadias'
import Pizza from './pages/Pizza'
import Qelyanalti from './pages/Qelyanalti'
import Salat from './pages/Salat'
import Pasta from './pages/Pasta'
import Icki from './pages/Icki'
import Desert from './pages/Desert'
import Sous from './pages/Sous'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/kampaniyalar' element={<Kampaniyalar />} />
        <Route path='/papadias' element={<Papadias />} />
        <Route path='/pizza' element={<Pizza />} />
        <Route path='/qelyanalti' element={<Qelyanalti />} />
        <Route path='/salat' element={<Salat />} />
        <Route path='/pasta' element={<Pasta />} />
        <Route path='/icki' element={<Icki />} />
        <Route path='/desert' element={<Desert />} />
        <Route path='/sous' element={<Sous />} />
      </Routes>
    </>
  )
}

export default App