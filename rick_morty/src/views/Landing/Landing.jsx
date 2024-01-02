import { Link } from "react-router-dom";
import style from "../Landing/Landing.module.css";

const Landing = () =>{

   return(
     <div className={style.container}>

      <img className={style.backgroundImage}           
         src = "https://shorturl.at/gvGO9"
         alt="landing"           
          />
        <h1 className={style.heading}>Bienvenido al proyecto Rick and Morty</h1>

        <Link to= "/home"> 
          <button  className={style.centeredButton} >INGRESAR</button>
        </Link>

     </div>

   )



};

export default Landing;