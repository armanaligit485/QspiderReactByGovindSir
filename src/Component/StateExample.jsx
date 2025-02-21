import React, { Component } from 'react'

export default class StateExample extends Component {
  state={
    name:"Dhoni"
}
// eslint-disable-next-line no-undef
Handlechange=()=>{
  this.setState({name:"Virat"})
}
  render() {
    // eslint-disable-next-line no-undef
    
    return (
      <>
      <h1>State using State Object</h1>
      <h3>{this.state.name}</h3>
      <button onClick={this.Handlechange}>Change</button>
      </>
    )
  }
}
