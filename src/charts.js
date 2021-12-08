
import React, { PureComponent, useState,useEffect } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {gql,useQuery} from '@apollo/client'

const LESELEVES=gql `
query ObtenerChoix {
    obtenerChoix {
      choix
    }
  }`
const data2 = [
    {
      name: 'yellow',
      uv: 4000,
      pv: 24,
      amt: 2400,
    },
    {
      name: 'green',
      uv: 3000,
      pv: 18,
      amt: 2210,
    },
    {
      name: 'blue',
      uv: 2000,
      pv: 90,
      amt: 2290,
    },
    {
      name: 'red',
      uv: 2780,
      pv: 38,
      amt: 2000,
    },
    
  ];

const Charts = () => {

    const[couleurs,setCouleurs]=useState([])

    //const[lesjaunes,setLesjaunes]=useState(0)
    //const[lesbleus,setLesbleus]=useState(0)
    //const[lesverts,setLesverts]=useState(0)
    //const[lesrouges,setLesrouges]=useState(0)


   const {data,loading,error,startPolling,stopPolling}=useQuery(LESELEVES);

   useEffect(()=>{
       startPolling(1000);
       return ()=>{
           stopPolling()
       }
   },[startPolling,stopPolling])
   console.log(data)
   console.log(loading)
   console.log(error)

   if(loading) return 'cargando...';
   console.log(data.obtenerChoix)
   const {obtenerChoix}=data;

  
  

   const elevegrafica=[{
    name: 'yellow',
    uv: 4000,
    pv: 1,
    amt: 2400,
  },{
    name: 'yellow',
    uv: 4000,
    pv: 1,
    amt: 2400,
  },{
    name: 'yellow',
    uv: 4000,
    pv: 2,
    amt: 2400,
  },{
    name: 'yellow',
    uv: 4000,
    pv: 2,
    amt: 2400,
  }];
      
     const vendedorGrafica=[];
     var lesjaunes=0;
     var lesbleus=0;
     var lesverts=0;
     var lesrouges=0;

    obtenerChoix.map((vendedor,index)=>{ 

        
           
        if(vendedor.choix==='BLUE'){lesbleus=lesbleus+1} ;
        if(vendedor.choix==='YELLOW'){lesjaunes=lesjaunes+1} ;
        if(vendedor.choix==='GREEN'){lesverts=lesverts+1} ;
        if(vendedor.choix==='RED'){lesrouges=lesrouges+1} ;

        

        

        vendedorGrafica[0]={
            name: 'yellow',
            uv: 4000,
            pv: lesjaunes,
            amt: 2400,
        };
        vendedorGrafica[1]={
            name: 'red',
            uv: 4000,
            pv: lesrouges,
            amt: 2400,
        };
        vendedorGrafica[2]={
            name: 'blue',
            uv: 4000,
            pv: lesbleus,
            amt: 2400,
        }
        vendedorGrafica[3]={
            name: 'green',
            uv: 4000,
            pv: lesverts,
            amt: 2400,
        }
    
    
    
    })
        

        

        


   


    return (
        <div>
            <h1>Animo de los alumnos el día de hoy</h1>
           
        <BarChart
          width={500}
          height={300}
          data={vendedorGrafica}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          
        </BarChart>
     
        </div>
    );
};

export default Charts;