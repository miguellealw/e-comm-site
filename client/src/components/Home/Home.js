import React, { Component } from 'react';
import Search from '../Modules/Search'

const HomePageStyles = {
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  padding: 0
}

const searchBarStyles = {
  display: 'block',
  textAlign: 'center',
}

export default class Home extends Component {
  render() {
    return (
      <div style={HomePageStyles}>
        <h1>E-Comm</h1>
        <div style={searchBarStyles}>
          <h3>Start Looking Now!</h3>
          <Search />
        </div>
      </div>
    );
  }
}