import React from 'react'

export default class DigitalClicker extends React.Component {
  // This component has an initial state property called timesClicked, which is initially defined as 0.
  constructor(){
    super()
    this.state = {
      timesClicked: 0
    }
  }
// Whenever the button is clicked, update the state by incrementing the timesClicked by 1
  incrementClick = () => {
    const clickCount = this.state.timesClicked + 1
    this.setState({
      timesClicked: clickCount
    })
  }
// The component renders out a button with a label that shows the timesClicked value.
  render(){
    return (
      <button onClick={this.incrementClick}>{this.state.timesClicked}</button>
    )
  }
}
