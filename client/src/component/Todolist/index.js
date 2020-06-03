import React from 'react';


function Todolist(){
    var todo=[];
    if(todo.length>0){
    return(
        <div>
          <li>Feed the dog</li> 
          <li>Take a nap</li> 
          <li>Go to the gym</li> 
        </div>
    );
}
else{
    return(<h3>Add To Do!!</h3> )
}
}
export default Todolist;