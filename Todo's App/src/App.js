import React from 'react';
import Todos from './Todos';
import AddTodo from './AddForm';

class App extends React.Component {
  state = {
    todos:[
      {id:1,content:'Morning workout at 6'},
      {id:2,content:'Breakfast with Fiancee'},
      {id:3,content:'Drive to office at 10...'}
    ]
  }
  deleteTodo=(id)=>
    {
      const todos=this.state.todos.filter(todo => {
        return todo.id !== id
      });
      this.setState({
        todos
      })
    }
    addTodo=(todo) =>{
      todo.id= Math.random();
      let todos=[...this.state.todos,todo];
      this.setState({
        todos
      })
    }


  render() {
    return (
      <div className="App container">
      <h1 className="center red-text">Todo's</h1>
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
