import React, { useState } from 'react'

const list = [{id: 0, todo:"Wake up"}, {id:1, todo:"Eat breakfast"}, {id:2, todo:"Shower"}, 
{id:3, todo:"Attend lecture"}, {id: 4, todo:"Work on Project"}
]

function Todos(){

    const [listTodos, updateList] = useState(list)
    const [activeTodo, updateTodo] = useState(true)

    const styleTodo = {
        text-decoration : "line-through"
    }

    function clickHandler(){
       console.log("clicked")
    }

    console.log(listTodos)
     return(
         <div className ="container">
            {
                
                    
                    listTodos.map((item) =>
                      <div key={item.id} style = {styleTodo} onClick = {clickHandler}>
                        <button>X</button>{item.todo} 
                      </div>
                    )
                  
            }
        </div>
          
     )
     
}

export default Todos