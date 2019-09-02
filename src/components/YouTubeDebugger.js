import React from 'react';
import ReactDOM from 'react-dom';
 
export default class YouTubeDebugger extends React.Component {
 
  constructor() {
    super()
    this.state ={
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

  increment = () => {
    this.setState({
      settings: {
        bitrate: 12,
        video: {
          resolution: '1080p'
        }
      }
    })
  }

  resolve = () => {
    this.setState({
      settings: {
        bitrate: 8,
        video: {
          resolution: '720p'
        }
      }
    })
  }
 
  render() {
    return (
      <div>
        <button className='bitrate' onClick={this.increment} />
        <button className='resolution' onClick={this.resolve} />
     </div>
    )
  }
}