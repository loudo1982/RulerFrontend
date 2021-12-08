
import {
 
 
    useQuery,gql
  
  } from "@apollo/client";


 


  const GET_MESSAGES=gql `
  query Messages {
    messages {
      id
      user
      content
    }
  }
  `
const Composant=({user})=>{

    

  const { loading, error, data}= useQuery(GET_MESSAGES
     
  );
  console.log(data.obtenerChoix)
  console.log(loading)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(loading)
  console.log(error)
  console.log('okok',data)
  if(!data){
    console.log('no hay datos')
    console.log(data)
    return <div>no hay datos</div>
  }
  return (
      <>
      
      {data.messages.map(({id,user:messageUser,content})=>(<div 
      key={id}
       style={{
        display: 'flex',
       
        justifyContent: user===messageUser?'flex-start':'flex-end',
        marginBlockEnd:'20px',
        padding:'1em',
        
       
        
      
      
          
      }}>
          {user!==messageUser &&(
              <div style={{
                  height:50,
                  width:50,
                  marginRight:"0.5em",
                  border:"2px solid #e5e6ea",
                  borderRadius:25,
                  textAlign:"center",
                  fontSize:"18pt",
                  paddingTop:5
              }}>

                  {messageUser.slice(0,2).toUpperCase()}

              </div>
          )}
          <div   style={{
              
              background: user===messageUser? '#58bf56':'#e5e6ea',
              color:user===messageUser? "white":"black",
              padding:'1em',
              borderRadius:'1em',
              maxWidth:"60%"
             
             
             
          }}>
              {content}
          </div>
        
      </div>))}
      </>
  )
  
 }

  export default Composant;