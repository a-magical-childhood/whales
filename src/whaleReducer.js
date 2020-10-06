import { GET_WHALES, GET_DESCRIPTION } from "./types.js";

export default (state, action) => {
  console.log('inside WhaleReducer.js in the state, action thing')
  const { payload, type } = action;
  
  console.log('insdie reducer.js payload', payload);
  console.log('insdie reducer.js action', action);


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