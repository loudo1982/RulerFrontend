
import Charts from "./charts";
import {
 
 
  useMutation,gql

} from "@apollo/client";

import Ruler from './ruler'


import React,{useState} from 'react';

const POST_MESSAGE=gql `
mutation PostMessage($user: String!, $content: String!) {
  postMessage(user: $user, content: $content)
}`

const App = () => {
  const [state,stateSet]=useState({
    user:'ludo1',
    content:'',
})


const handleInputChange = (event) => {
  // console.log(event.target.name)
  // console.log(event.target.value)
  stateSet({
      ...state,
      [event.target.name] : event.target.value
      
  })
 
  
 
}

const [postMessage]=useMutation(POST_MESSAGE)
const enviarDatos = (event) => {
  
  event.preventDefault()
  console.log(state)
  if (state.content.length>0){
    postMessage({
      variables:state,
    })
    

  }
  stateSet({
    ...state,
    content:''
  })

 
}
  return (
   <div>
     <Ruler/>
       <Charts />

                </div>
              
            
          
      
 
  );
};

export default App;