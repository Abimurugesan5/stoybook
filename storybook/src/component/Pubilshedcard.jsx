import React from "react";
import PropTypes from 'prop-types';
import { Card, Avatar, Col, Typography, Row, Divider, Space ,Anchor,Image,Input} from 'antd';
import {GlobalOutlined,FormOutlined} from '@ant-design/icons';
 const  Cards = (dataSet)=>{
    console.log("dattaset",dataSet)

    return(
        <>
         <Card  bordered={true} style={{   borderTop:" 4px solid #18C438",borderBottom:" 4px solid #FFFFFF",borderLeft:" 4px solid #FFFFFF",borderRight:" 4px solid #FFFFFF",width:"400px"}}>
        <span className="product_management"> Department </span><br />
        <span className="role">Job Title</span>
        <br></br>
            <span className="product_management">Candidates:</span>
            <Card >
                <Card.Grid hoverable={false} style={{borderRadius:'4px 0 0 4px'}}>
                <span className="product_management"> Total</span><br/>
                <span className="role"></span>

                </Card.Grid>
                <Card.Grid hoverable={false}>
                <span className="product_management">New</span><br/>
                <span className="role"></span>
                </Card.Grid>
                <Card.Grid hoverable={false} style={{  height:'100%',textAlign:'center',borderRadius:'0 4px 4px 0'}} >
<span className="product_management" >Offered</span><br/>
<span className="role"></span>
                </Card.Grid>
            </Card>
       
        <div className="location">
        <span style={{float:'left'}} >Location </span>
        <span style={{float:'right'}} >Full Time </span>
        </div>
        <Divider />
        <span  style={{float:'left',color:'gray'}} >                 <Space size={[4, 8]} wrap>
            <GlobalOutlined /> </Space>
            </span>
        <span style={{float:'right'}}><a href="https://stackoverflow.com/">See Details</a></span>
    </Card>
        </>
    )


} 
export default Cards
