import React, { Component } from 'react'
import Header from './Components/Header'
import List from './Components/List'
// import Footer from './Components/Footer'
 class App extends Component {

  state = {
    todos: [
      {id: '001', name: '吃饭', status: true},
      {id: '002', name: '睡觉', status: false},
      {id: '003', name: '打炮', status: true}
    ]
  }

  addTodo = (todoObj) => {
    const newTodos = [todoObj, ...this.state.todos]
    this.setState({todos:newTodos})
  }

  updateTodo = (id,checked) => {
    console.log(id,checked)
    const newTodos = this.state.todos.map((todo) => {
      if(todo.id === id) {
        return {...todo, status:checked}
      } else {
        return todo // 注意这里一定要返回该对象
      }
    })

    this.setState({todos:newTodos})
  }

  render() {
    return (
      <div style={{width:'400px', margin:'0 auto'}}>
        <Header todos={this.state.todos} addTodo={this.addTodo}/>
        <List todos={this.state.todos} updateTodo={this.updateTodo}/>
        {/* <Footer /> */}
      </div>
    )
  }
}

export default App