import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Item extends Component {

    static propTypes = {
        updateTodo: PropTypes.func.isRequired,
        id: PropTypes.string,
        name:PropTypes.string,
        status: PropTypes.bool
    }
    state = {mouse: false}
    
    handleMouse = (value) => {
        return () => {
            this.setState({mouse: value})
        }
    }

    handleCheck = (id) => {
        return (event) => {
            this.props.updateTodo(id, event.target.checked)
        }
    }

  render() {

    const {id,name,status} = this.props
    return (
        <li style={{padding:'5px', backgroundColor: this.state.mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
            <input type="checkbox" defaultChecked={status} style={{display:'inline-block'}} onChange={this.handleCheck(id)}/>
            {name}

            <button style={{marginLeft: "20px", display: this.state.mouse ? "inline-block" : "none"}}>删除</button>
        </li>
    )
  }
}
