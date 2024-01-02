import { useDispatch } from "react-redux"
import Cards from "./components/Cards/Cards"
import { useEffect } from "react";
import { getCharacters } from "./redux/actions";


function App() {

  const dispatch = useDispatch();

  useEffect (()=>{

    dispatch(getCharacters());

  },[dispatch]);

  return (
     <div>
     <h1>Rick and Morty</h1>
     <Cards/>
     

     </div>
  )
}

export default App
