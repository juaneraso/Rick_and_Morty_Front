import { useDispatch } from "react-redux"

import { useEffect } from "react";
import { getCharacters } from "../../redux/actions";
import Cards from "../../components/Cards/Cards";
import style from "../Home/Home.module.css";

const Home = () =>{
    const dispatch = useDispatch();

    useEffect (()=>{
  
      dispatch(getCharacters());
  
    },[dispatch]);

  return(
     <div className={style.homeStyle}>
      <h1>Rick and Morty</h1>
      <Cards/>   

     </div>

  )


};

export default Home;