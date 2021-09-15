import { Button, Input } from '..';
import './css/index.css'
import React from 'react';


function Container() {
  const [value, setValue] = React.useState("");
  const [todo, setTodo] = React.useState([]);
  // console.log("todos ==>>", todo);
  const addTodo = () => {
    let arr = [...todo];
    arr.push(value);
    setTodo(arr);
    setValue("")
  }
  const deleteTodo = (i) => {
    let arr = [...todo];
    arr.splice(i,1)
    setTodo(arr);
  }

  return (
    <div className="board" >
      <h1 className="heading">Todo List</h1>
      <Input onChange={(e) => setValue(e.target.value)} value={value} type="text" placeholder="Enter Your Desire ToDo" />
      <Button onClick={addTodo} myClass="myAddBtn">Add ToDo</Button>
      <div className="list">
        <ul>
          {todo.map((v,i)=>{
            return(
              <li key={i}><Input value={v}/> <Button myClass="myEditBtn">Edit</Button><Button onClick={()=>deleteTodo(i)} myClass="myDeleteBtn">Delete</Button></li>
            )
          })}
        </ul>
      </div>
    </div>

  );
}
export default Container;