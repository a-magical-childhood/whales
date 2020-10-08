import { GET_WHALES, GET_DESCRIPTION } from "./types.js";

export default (state, action) => {
 
  // console.log('*****************');
  // console.log('inside reducer.js action.type', action.type);
  // console.log('*****************');
  // console.log('ACTION.PAYLOAD', action.payload)
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