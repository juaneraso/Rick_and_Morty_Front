import Home from "./views/Home/Home"
import {  Route, Routes} from "react-router-dom";
import Landing from "./views/Landing/Landing";
function App() {



  return (
     <div>
   
     
     <Routes>

      <Route path="/" element ={<Landing/>} />
      <Route path="/home" element ={<Home/>} />
     
     </Routes>
      
   

     </div>
  )
}

export default App
