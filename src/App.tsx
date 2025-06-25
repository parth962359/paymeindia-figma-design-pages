
import {BrowserRouter, Routes,Route} from "react-router-dom"
import { Insurance } from './components/Insurance'
import { Civildetails } from './components/Civildetails'
function App() {
 

  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Insurance/>} />
    <Route path='/Insurancepolicy' element={<Civildetails/>} />
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
