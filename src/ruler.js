import React from 'react';

import { gql, useMutation } from '@apollo/client';


const CHOIXELEVE = gql`
mutation Mutation($input: ChoixEleve) {
    assignerChoix(input: $input) {
      choix
    }
  }
`;

const Ruler = () => {

    const [choixeleve, { data, loading, error }] = useMutation(CHOIXELEVE);
    if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;
  console.log(data)

    const cliquecuadro=(e)=>{
        const couleur= e.target.style.backgroundColor.toUpperCase()
        console.log('clique premier cuadro',couleur);
        choixeleve({
            variables:{input:{
                choix:couleur
            }}
        });}
    
  
    return (
        <div  style={{

            width:'410px',
            height:'400px',
            backgroundColor:'lightblue',
            margin:'auto',
            display:'flex',
            flexWrap:'wrap',
            justifyContent : 'space-between'
            
          }}>



              <div onClick={cliquecuadro} style={{

                  backgroundColor:'RED',
                  marginBottom:'10px',
                  width:'200px',
                  flex:'none',
                  display:'flex',
                  justifyContent:'center',
                  alignItems:'center' 
}}></div>
  <div onClick={cliquecuadro} style={{

backgroundColor:'yellow',
marginBottom:'10px',
width:'200px',
flex:'none',
display:'flex',
justifyContent:'center',
alignItems:'center' 
}}></div>
  <div onClick={cliquecuadro} style={{

backgroundColor:'blue',
marginBottom:'10px',
width:'200px',
flex:'none',
display:'flex',
justifyContent:'center',
alignItems:'center' 
}}></div>
  <div onClick={cliquecuadro} style={{

backgroundColor:'green',
marginBottom:'10px',
width:'200px',
flex:'none',
display:'flex',
justifyContent:'center',
alignItems:'center' 
}}></div>

         
        </div>
    );
};

export default Ruler;