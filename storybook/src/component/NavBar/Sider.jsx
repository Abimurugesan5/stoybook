
import Icon, { MenuUnfoldOutlined, MenuFoldOutlined, DashboardOutlined, SearchOutlined, BellOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

import './NavBar.css'
import { Layout, Menu, Input, Row, Col, Divider, Button } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const { Header, Content, Sider } = Layout;
const HeartSvg = () => (
    <svg class="anticon ant-menu-item-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="7" y="6" width="6" height="11.5" stroke="#36C185" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
        <rect x="2.5" y="6" width="15" height="11.5" rx="1" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M7 3.5C7 2.94772 7.44772 2.5 8 2.5H12C12.5523 2.5 13 2.94772 13 3.5V6H7V3.5Z" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
);

const SideBar = () => {

    const [collapsed, setState] = useState(false)


    const onCollapse = (collapsed) => {
        setState({ collapsed });
    }
    const toggle = () => {
        setState({
            collapsed: !this.state.collapsed,
        });
    }
    const onSearch = (value) => console.log(value);
    return (
        <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            onCollapse={onCollapse}
            style={{ backgroundColor: '#0C3F4A', height: "720px" }}
        >
            <div className="logo" >
                {(collapsed) }
            </div>
            <Menu
                style={{ backgroundColor: '#0C3F4A' }}
                defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1"className='menuDashboard' disabled icon={<DashboardOutlined style={{ color: 'white' }} />} >
                    <span>Dashboard</span>
                    <a to="/" />
                </Menu.Item>
                <Menu.Item key="2" icon={<HeartSvg />}>
                    <span>Jobs</span>
                    <a to="/addjob" />
                </Menu.Item>
                <Menu.Item>

                </Menu.Item>
                <Button style={{ backgroundColor: "#EBBE21", marginTop: "350px", justifyContent: "flex-end", postion: "center", marginLeft: "18%" }}>Upgrade Plan</Button>

                <Menu.Divider style={{ color: "#FFFFFF", marginTop: "10%", justifyContent: "flex-end" }}></Menu.Divider>

                <Menu.Item>
                    <h3 style={{ color: "white" }}>© 2022</h3>

                </Menu.Item>
                <span></span>
                <Menu.Item>
                    <h4 style={{ color: "#36C185" }}>About Us | Help | Contact Us</h4>
                </Menu.Item>
            </Menu>
        </Sider>
    );
}
export default SideBar