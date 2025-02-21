import React, { Component } from 'react'

class PropsChild extends Component {
  render() {
    
    return (<>
      <h1>Props Child CBC</h1>
      <h3>{this.props.name}</h3>
      </>
    )
  }
}
export default PropsChild;
