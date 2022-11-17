import React from "react";
import PropTypes from 'prop-types';
import { Card, Avatar, Col, Typography, Row, Divider, Space ,Anchor,Image,Input} from 'antd';
import {GlobalOutlined,FormOutlined} from '@ant-design/icons';
 const AddCard =()=>{
    return (
        <Row  gutter={[24, 24]} style={{minWidth:"100%"
    }}>
            {/* {renderCards} */}
            <Col style={{display:'flex'}} xl={6} lg={8} md={8} xs={24} >
            <Card style={{height:'100%',width:'100%',border:'2px dashed #AFAFAF'}} key="10">
                <div className='image_align' >
                    <Input
                    placeholder='Placeholder'
                    
                    />
                   <img preview="false" src={require("../assests/icon.png")}
                    /><br />
                    <a className='font_align' href="https://google.com/">Add New Job</a>
                </div>
            </Card>
            </Col>
        </Row>
    
    )
 }
export default AddCard