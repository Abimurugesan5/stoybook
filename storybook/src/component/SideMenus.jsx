
import Icon, { MenuUnfoldOutlined, MenuFoldOutlined, DashboardOutlined, SearchOutlined, BellOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Input, Row, Col, Divider, Button } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const { Header, Content, Sider } = Layout;


const SideBars = props => {
    console.log("prpossss",props)
    const {disabled, setDisabled,value,type} = props;
    const onChange = (checked) => {
      setDisabled(checked);
    };
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
            value={value}
            type={type}
            defaultValue={value}
            disabled={true}
            collapsible
            // display={display}
            collapsed={collapsed}
            onCollapse={onCollapse}
            style={{ backgroundColor: '#0C3F4A', height: "720px" }}
        >
            
        </Sider>
    );
}
export default SideBars
SideBars.propTypes = {
    value: PropTypes.string,
    // eslint-disable-next-line react/no-typos
    disabled:PropTypes.boolean,
    // display:PropTypes.string,
    validators: PropTypes.array,
    type: PropTypes.string,
    onChange: PropTypes.func.isRequired
  };
  SideBars.defaultProps = {
    value: '',
   
    type: 'text',
    validators: []
    };