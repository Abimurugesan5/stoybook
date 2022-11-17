import React from 'react';
import { Menu } from 'antd';
import Icon from '@ant-design/icons';


function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="rules">
      <a href="/home"><Icon type="double-right" />Rules</a>
    </Menu.Item>
    <Menu.Item key="contest">
      <a href="add_job"><Icon type="snippets" />Contest</a>
    </Menu.Item>
  </Menu>
  )
}

export default LeftMenu
