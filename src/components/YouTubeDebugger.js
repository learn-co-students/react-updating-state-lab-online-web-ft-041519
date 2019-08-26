// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component {
    constructor() {
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

    updateBitrate = () => {
        this.setState({
            settings: { 
                ...this.state.settings, 
                bitrate: 12
            }
        });
        console.log(this.state.settings.bitrate);
    }

    updateResolution = () => {
        this.setState({
            settings: { 
                ...this.state.settings, 
                video: {
                    resolution: '720p'
                }}
        });
    }

    render() {
        return (
            <div>
                <button className="resolution" onClick={this.updateResolution}>Resolution</button>
                <button className="bitrate" onClick={this.updateBitrate}>Bitrate</button>
            </div>
        )
    };
}