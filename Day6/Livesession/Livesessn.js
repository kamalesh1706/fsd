import React from 'react';

class LiveSession extends React.Component {
  render() {
    return (
      <div className="live-session">
        <h2>Live Session</h2>
        <div className="live-session-info">
          <h3>Upcoming Session</h3>
          <p>Date: {this.props.date}</p>
          <p>Time: {this.props.time}</p>
          <p>Instructor: {this.props.instructor}</p>
        </div>
        <div className="live-session-video">
          <iframe src={this.props.videoUrl} width="560" height="315" frameborder="0" allowfullscreen></iframe>
        </div>
        <div className="live-session-chat">
          <h3>Chat</h3>
          <ul>
            {/* Render chat messages here */}
          </ul>
          {/* Chat input field */}
          <input type="text" placeholder="Enter your message" />
          <button>Send</button>
        </div>
      </div>
    );
  }
}

export default LiveSession;
