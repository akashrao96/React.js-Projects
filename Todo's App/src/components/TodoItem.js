import React, { Component } from 'react'

export class TodoItem extends Component {
  
      getStyle = () => {
        return{
        backgroundColor : '#f4f4f4',
        padding : '10px',
        borderBottom : '1px dotted #ccc',
        textDecoration : this.props.todo.completed ? 'line-through' : 'none'
          } 
        }
    render() {
        const{id,title} = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p> <input type='checkbox' onChange = {this.props.markComplete.bind(this,id)}/>{' '} {title} 
        <button onClick={this.props.deleteTodo.bind(this,id)} style={btn}>x</button></p>
      </div>
    )
  }
}
const btn = {
  backgroundColor : '#ccc',
  float : 'right',
  borderRadius : '50%',
  padding : '3px 6px',
  curser : 'pointer',
  border : 'none'
}
export default TodoItem
