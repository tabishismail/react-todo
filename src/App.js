import './App.css';
import React from 'react';
import { Button, Container } from './components';

function App() {
  const [value, setValue] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  return (
    <div className="main">
      <Container/>
    </div>

  );
}

export default App;
