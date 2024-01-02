import axios from "axios";

export const GET_CHARACTERS = "GET_CHARACTERS";
// Variables entorno

const back = import.meta.env.VITE_APP_BACK;

export const getCharacters = () => {
  return async function (dispatch) {
    try {
      const apiData = await axios.get(`${back}/characters`);
      const characters = apiData.data;
      dispatch({ type: GET_CHARACTERS, payload: characters });
    } catch (error) {
      alert("algo salio mal");
      console.log("Error", error);
    }
  };
};
