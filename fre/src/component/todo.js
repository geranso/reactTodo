import React, { Component } from "react";
import { MdDeleteForever } from "react-icons/md";
export default class Todo extends Component {
  render() {
    return (
      <table>
        <tr>
            <td> <input type="checkbox"></input></td>
           
          <td>{this.props.todo.id}</td>
          <td>{this.props.todo.title}</td>
          <td>
            {" "}
            <MdDeleteForever
              color="red"
              className="delete-button"
              onClick={() => this.props.deleteOne(this.props.todo.id)}
            />
          </td>
        </tr>
      </table>
    );
  }
}
