import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "../Cards/Cards.module.css";

const Cards  = ()=>{
  const characters = useSelector(state => state.characters);
  console.log(characters);

  return(
    <div className={style.container}>
   
      {
        characters.map((character)=>{
          return <Card  
            key ={character.id}
            name = {character.name}
            species ={character.species}
            image = {character.image}
          
          />

        })

      }
    </div>
  )


};

export default Cards;