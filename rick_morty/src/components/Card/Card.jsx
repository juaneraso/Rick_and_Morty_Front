import style from "../Card/Card.module.css";

const Card = (props) =>{

 return(
    <div className={style.card}>
      <h1>{props.name}</h1>
      <p>{props.species}</p>
      <img className={style.image} src= {props.image} alt = "imagen Rick and Morty"/>
    </div>
 )




};

export default Card;