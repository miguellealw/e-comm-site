import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Sidebar,
  Segment,
  Menu,
} from 'semantic-ui-react';

export default class SidebarNav extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })
  
  render() {
    const {render: Content} = this.props;

    return (
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation='push'
          width='thin'
          visible={this.state.visible}
          icon='labeled'
          vertical
          inverted
        >
          <Link to="/">
            <Menu.Item name='home'>
              Home
            </Menu.Item>
          </Link>
          
          <Link to="/store">
            <Menu.Item name='store'>
              Store
            </Menu.Item>
          </Link>

          <Link to="/login">
            <Menu.Item name='login'>
              Login
            </Menu.Item>
          </Link>

          <Link to="/signup">
            <Menu.Item name='signup'>
              Signup
            </Menu.Item>
          </Link>

        </Sidebar>

        <Sidebar.Pusher>
          <Segment basic>
            <Content toggleVisibility={this.toggleVisibility}/>
          </Segment>
        </Sidebar.Pusher>

      </Sidebar.Pushable>      
    );
  }
}