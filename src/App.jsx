import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Calclator from './Components/Calclator/Calclator'
import Weather from './Components/Weather-App/Weather'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/calculator' element={<Calclator/>} />
        <Route path='/weatherapp' element={<Weather/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
