import React, { Component } from 'react'
// import loading from './loading.gif'

export default class Spinner extends Component {
  render() {
    return (
    <div className="icon text-center">
        <img src='./loading.gif' alt='loading'/>
      </div>
    )
  }
}
