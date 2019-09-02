import React from 'react';
import ReactDOM from 'react-dom';
 
export default class DigitalClicker extends React.Component {
  constructor() {
    super()
    this.state = {
        timesClicked: 0 
    }    
}
 
  handleClick = () => {
    const newclicks = this.state.timesClicked + 1
    this.setState({
        timesClicked: newclicks
      })
  };
 
  render() {
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>  
    )
  }
}