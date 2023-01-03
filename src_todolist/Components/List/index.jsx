import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../List/Item'

export default class List extends Component {

  // 对props进行：类型和必要性检查
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired
  }

  render() {
    const todos = this.props.todos
    return (
      <ul style={{listStyle: "none",width:"100%", border:"1px solid #888", padding:"0"}}>
          {
          todos.map(todo => {
              return <Item key={todo.id} {...todo} updateTodo={this.props.updateTodo}/>
          })
          }
      </ul>
    )
  }
}
