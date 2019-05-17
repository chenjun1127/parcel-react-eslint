import React from 'react';

export default class About extends React.Component {
  state = {
    time: new Date().toLocaleString()
  };
  render() {
    return <div>Today is {this.state.time}</div>;
  }
}
