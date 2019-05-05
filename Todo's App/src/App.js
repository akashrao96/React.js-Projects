import React, { Component } from 'react';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

import './App.css';

class  App extends Component {
  state = {todos : [ 
    {
      id : 1,
      title : 'Go to office',
      completed : false
    },
    {
      id : 2,
      title : 'Talk to BF',
      completed : false
    },
    {
      id : 3,
      title : 'Lunch at 2',
      completed : false
    }
  ]
};
markComplete = (id) => {
  this.setState({ todos : this.state.todos.map(todo => {
    if(todo.id === id){
      todo.completed=!todo.completed
    }
    return todo;
  })});
}
deleteTodo = (id) => {
  this.setState({ todos : [...this.state.todos.filter(todo => todo.id !== id)]
    
  });
}
addTodo = (title) => {
  const newTodo = {
    id : Math.floor(Math.random()*100)+4,
    title,
    completed : false
  }
  this.setState({ todos : [...this.state.todos,newTodo]})
}


  render() {
    return (
      <div className='App'>
        <div id="container">
        <Header />
        <AddTodo addTodo={this.addTodo}/>
        <Todos todos={this.state.todos} deleteTodo = {this.deleteTodo} markComplete = {this.markComplete}/>
      </div>
      </div>
      
    )
  }
}

export default App;
