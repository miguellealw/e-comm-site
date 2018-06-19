import React, { Component } from 'react';

const HomePageStyles = {
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 0
}

export default class Home extends Component {
  render() {
    return (
      <div style={HomePageStyles}>
        <h1>E-Comm</h1>
      </div>
    );
  }
}