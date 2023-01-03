import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'

 class Header extends Component {

    static propTypes = {
      addTodo: PropTypes.func.isRequired
    }

    HandelKeyUp = (event) => {
        const {target, keyCode} = event
        if(keyCode !== 13 || target.value === '') {
            return
        }

        const newTodo = {id: nanoid(), name: target.value, status:false}
        this.props.addTodo(newTodo)
    }
  render() {
    return (
        <div>
            检索框：<input type="text" onKeyUp={this.HandelKeyUp}/>
        </div>
    )
  }
}

export default Header