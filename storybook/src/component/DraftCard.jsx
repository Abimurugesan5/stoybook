import React from "react";
import PropTypes from 'prop-types';
import { Card, Avatar, Col, Typography, Row, Divider, Space ,Anchor,Image,Input} from 'antd';
import {GlobalOutlined,FormOutlined} from '@ant-design/icons';
const DarftCatd =()=>{
    return (
        <>
            
        <Card className="card_divider" bordered={false} style={{ width:"330px",  borderTop:" 4px solid #D9D9D9",borderBottom:" 1px solid #D9D9D9",borderLeft:" 0px solid #D9D9D9",borderRight:" 0px solid #D9D9D9"}}>
        <span className="product_management"> Department </span><br />
        <span className="role" style={{gap:"15px"}}>Job Title</span>
        <br></br>
            <span  style={{gap:"12px",padding:"0px 0px 16px",marginTop:"120px",margin: '0px 10px',paddingTop: '50px'}}>Candidates:</span>
            <br></br>
            <img preview="false" style={{width:"300px"}} src={require("../assests/Group.png")}></img>
             {/* <Card > */}
                {/* <Card.Grid hoverable={false} style={{borderRadius:'4px 0 0 4px'}}>
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
                </Card.Grid> */}
            {/* </Card>  */}
       
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
export default DarftCatd