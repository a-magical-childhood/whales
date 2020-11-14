import React, { useReducer } from 'react';
import axios from 'axios';

import Context from './context.js';
import WhaleReducer from './whaleReducer.js';
import {GET_WHALES, GET_DESCRIPTION} from './types.js';

export default function WhaleState (props){

  let initState = {
    whales: []
  }

  const[state, dispatch] = useReducer(WhaleReducer, initState);

  const getDeWhales = async () => {
  
   try {

     let res = await axios.get('http://hotline.whalemuseum.org/api.json');
     let {data} = res;
     dispatch({ type: "GET_WHALES", payload: data});

   } catch (e) {

     console.error('SHOOTSKIES! We have a whale of a problem: ', e);

   }
 };

  const getDeWhaleInfo = async (id) => {
    try{

    let res = await axios.get('http://hotline.whalemuseum.org/api/${id}.json');
    let {data} = res;
    dispatch({type: "GET_DESCRIPTION", payload: data})
    
    } catch (e) {
      console.error('Oh no! Your whale is missing from its pod! What are we to do? Follow the error code following to help your whale find its way back to its pod: ', e);
    }

  }

 return (
   <Context.Provider
    value={{
      whales: state.whales,
      getDeWhales,
    }}
   >
     {props.children}
   </Context.Provider>
 )

}