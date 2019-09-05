import React from 'react'

export default class YouTubeDebugger extends React.Component {
  //set initial state
  constructor(){
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  }
}
//deep state change for bitrate
  changeBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

//deep state change for resolution
  changeResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
  }
  //render buttons with onClick events to call state change functions
  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.changeBitrate}>Bitrate</button>
        <button className="resolution" onClick={this.changeResolution}>Resolution</button>
      </div>
    )
  }
}
