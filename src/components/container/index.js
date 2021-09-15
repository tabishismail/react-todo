import { Button, Input } from '..';
import './css/index.css'



function Container() {

    return (
      <div className="board" >
        <h1 className="heading">Todo List</h1>
        <div className="list">
          <Input type="text" placeholder="Enter Your Desire ToDo"/>
          <Button myClass="myAddBtn">Add ToDo</Button>
        </div>
      </div>
  
    );
  }
  export default Container;