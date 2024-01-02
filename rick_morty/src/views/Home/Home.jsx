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

     <Cards/>   


     </div>

  )


};

export default Home;