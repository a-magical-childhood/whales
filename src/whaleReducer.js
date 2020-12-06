import { GET_WHALES, GET_DESCRIPTION } from "./types.js";

export default (state, action) => {
 

  const { type, payload } = action;
  



  switch (type) {
    case GET_WHALES:
      return {
        ...state,
        whales: payload,
      }
    case GET_DESCRIPTION:
      return {
        ...state,
        description: payload,
      }
    default: 
      return state;
  }
};