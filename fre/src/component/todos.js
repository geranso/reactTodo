import React, { Component } from "react";
import Todo from './todo'
import Form from './form'
class Todos extends Component {
  //this is a local state that will hold the data that we recieve on api call
  state = {
    todos: [],
  };

  //this lifecycle method triggers when the page loads. only when the page loads
  componentDidMount() {
    const url ="https://jsonplaceholder.typicode.com/todos"
    fetch(url)
      .then((response) => response.json())
      .then((res) => {
        this.setState({
          todos: res,
        });
      });
  }
 deleteOne=(id)=>{
   const url = `https://jsonplaceholder.typicode.com/todos/${id}`
   fetch(url,{method:'delete'}).then(resp=>resp.json()).then(ro=>{
      this.setState({
        //   we are filtering the array as the respons after the delete request is empty
          todos:this.state.todos.filter(t=>t.id!==id)
          //if the response contains the data after deletion we do the following 
        //   todos:ro
      })
   })
 }
 addOne=(todo)=>{


 }
  render() {
    return (
      <div>
          <h1>My Todo List</h1>
          <Form/>
          {/* we map through the todo list and render a Todo component for each object */}
        {/* {this.state.todos.map((todo) =><Todo todo={todo}></Todo>)} */}
        {/* just to display five of them */}
        {this.state.todos.filter(todo=>todo.id<6).map((todo) =><Todo todo={todo} deleteOne={this.deleteOne}></Todo>)}
      </div>
    );
  }
}

export default Todos;
