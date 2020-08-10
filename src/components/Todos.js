import React, { useState } from 'react'

const list = [{id: 0, todo:"Wake up", done: false}, {id:1, todo:"Eat breakfast", done: false}, {id:2, todo:"Shower", done: false}, 
{id:3, todo:"Attend lecture",  done: false}, {id: 4, todo:"Work on Project", done: false}
]

function Todos(){

    

    const [listTodos, updateList] = useState(list)
    
    function handleClick(id){
        let newArr = [...listTodos]
        newArr[id].done = !newArr[id].done
        updateList(newArr)
     }

     console.log(listTodos)
      return(
          <div className ="container">
             {
                 
                     
                     listTodos.map((item) =>
                       <div key={item.id} style = {item.done? {textDecoration: 'line-through'} : {textDecoration: 'none'}} >
                         <button onClick={()=> handleClick(item.id)}>X</button>{item.todo} 
                       </div>
                     )
                   
             }
         </div>
           
      )
   
    }
    
    export default Todos

       


     