import React, { Component } from 'react'

export default class StateExampleConstructor extends Component {
    constructor(){
        super();
        this.state={
            name:"Arman"
        }
    }
    HandleChange=()=>{
        this.setState({name:"Ali"})
    }

  render() {
    
    return (
      <>
      <h1>State in constructor</h1>
      <h3>{this.state.name}</h3>
      <button onClick={this.HandleChange}>Change</button>
      </>
    )
  }
}
