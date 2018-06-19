import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const Navigation = () => (
  <Layout>
    <Header>
      <Menu
        theme="dark"
        mode="horizontal"
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item>
          <Link to="/">
            Home
          </Link>
        </Menu.Item>

        <Menu.Item>
          <Link to="/store">
          Store
          </Link>
        </Menu.Item>   

        <Menu.Item>
          <Link to="/login">
            Login
          </Link>
        </Menu.Item>

        <Menu.Item>
          <Link to="/signup">
            Signup
          </Link>
        </Menu.Item>

      </Menu>
    </Header>
  </Layout>
)

export default Navigation;