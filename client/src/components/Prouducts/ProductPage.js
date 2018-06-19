import React, { Component } from 'react';

export default class ProductPage extends Component {
  render() {
    const {match: { params }} = this.props;
    return (
      <div>
        <h1>{params.name}</h1>
      </div>
    );
  }
}