import React, { useReducer } from 'react';
import axios from 'axios';

import Context from './context.js';
import WhaleReducer from './whaleReducer.js';
import {GET_WHALES, GET_DESCRIPTION} from './types.js';

export default function WhaleState (props){
  console.log('inside whalestate.js')
  let initState = {
    whales: [{"id": "5a049b7e686f743ec5040000",
    "species": "orca",
    "quantity": "5",
    "description": "Spotted from the Edmonds-Kingston ferry, near fishing boats.",
    "url": "http://hotline.whalemuseum.org/sightings/5a049b7e686f743ec5040000",
    "latitude": 47.79953,
    "longitude": -122.47996699999999,
    "location": "",
    "sighted_at": "2017-11-09T18:11:00Z",
    "created_at": "2017-11-09T18:16:30Z",
    "updated_at": "2017-11-14T22:20:45Z",
    "orca_type": "unknown"}]
  }

  const[state, dispatch] = useReducer(WhaleReducer, initState);

  const getDeWhales = async () => {
   console.log('INSIDE getDeWhales, Before Try');
   try {
     let res = await axios.get('http://hotline.whalemuseum.org/api.json');
     let {data} = res;
     console.log('RES FROM GETDEWHALES', res);

     dispatch({ type: GET_WHALES, payload: data});
   } catch (e) {
     console.error('SHOOTSKIES! We have a whale of a problem: ', e);
   }
 };

  const getDeWhaleInfo = async (id) => {
    try{
    let res = await axios.get('http://hotline.whalemuseum.org/api/${id}.json');

    let {data} = res;
    dispatch({type: GET_DESCRIPTION, payload: data})
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