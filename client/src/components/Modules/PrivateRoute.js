import React from 'react';
import { Redirect, Route } from 'react-router-dom'

export default ({component: Component, isAuthed, ...rest}) => (
  <Route 
    {...rest}
    render={props => (
      isAuthed ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/login"}}/>
      )
    )}
  />
)