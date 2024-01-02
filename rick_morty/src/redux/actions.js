import axios from "axios";

export const GET_CHARACTERS = "GET_CHARACTERS";

export const getCharacters = () => {
  return async function (dispatch) {
    try {
      const apiData = await axios.get("http://localhost:3001/characters/");
      const characters = apiData.data;
      dispatch({ type: GET_CHARACTERS, payload: characters });
    } catch (error) {
      alert("algo salio mal");
      console.log("Error", error);
    }
  };
};
