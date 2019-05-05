import React, { Component } from 'react'

export class AddTodo extends Component {
  state = {
    todos : ''
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title:'' });
  }
  onChange = (e) => {
    this.setState({ [e.target.name] : e.target.value}) 
  };
  
  render() {
    return (
    <form onSubmit ={this.onSubmit} style={{ display : 'flex'}}> 
        <input      
        type = 'text' 
        placeholder = 'Add Todo...'
        name = 'title' 
        style = {{ flex : '8' , padding : '5px'}}
        value= {this.state.title}
        onChange={this.onChange}
        />
        <button style = {{ padding : '5px'}}>Submit</button>
    </form>
    )
  }
}


export default AddTodo
