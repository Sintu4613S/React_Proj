import React, { Component } from 'react'

class Greet extends Component {
  constructor() {
    super();
    this.state = {
      color: "red"
    }
  }
  render() {
    return (
      <div>
        <h2>I am a {this.state.color} Car</h2>
      </div>
    )
  }

}
export default Greet

