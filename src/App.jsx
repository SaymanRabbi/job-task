import { Route, Routes } from 'react-router-dom'
import './App.css'
import AddDataForm from './Components/AddDataForm'
import Navbar from './Components/Navbar'
import ViewData from './Components/ViewData'

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<AddDataForm />} />
        <Route path="/view" element={<ViewData />} />

      </Routes>
    </div>
  )
}

export default App
