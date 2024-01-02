import { useDispatch } from "react-redux"

import { useEffect } from "react";
import { getCharacters } from "../../redux/actions";
import Cards from "../../components/Cards/Cards";



const Home = () =>{
    const dispatch = useDispatch();

    useEffect (()=>{
  
      dispatch(getCharacters());
  
    },[dispatch]);



  return(
     <div>
      <h1>Rick and Morty</h1>
      <Cards/>   

     </div>

  )


};

export default Home;