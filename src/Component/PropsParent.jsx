import React, { Component } from 'react'
import PropsChild from './PropsChild'

class PropsParent extends Component {
  render() {
    return (
      <PropsChild name="Arman"/>
    )
  }
}
export default PropsParent;

