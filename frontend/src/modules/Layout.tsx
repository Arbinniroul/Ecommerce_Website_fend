
import { Route, Routes } from 'react-router-dom'
import Todoo from '../Pages/Todoo';



import Feedback from '../Pages/Feedback';
import App from '../App';


const Layout = () => {

  return (
<div>
    <Routes>
         <Route path="/" element={<App />} /> 
        <Route path='/todoo' element={<Todoo/>}/>

        <Route path='/Feedback' element={<Feedback/>}/>


        
    </Routes>
</div>

  )
}

export default Layout