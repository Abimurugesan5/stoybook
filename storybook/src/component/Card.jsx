// import React from 'react';
// import PropTypes from 'prop-types';
// import { Card, Avatar, Col, Typography, Row, Divider, Space ,Anchor,Image,Input} from 'antd';
// import {GlobalOutlined,FormOutlined} from '@ant-design/icons';

// export const CardComp = (dataSet) => {
//     console.log("dataSet",dataSet)
//     const renderCards=  dataSet.data.map((data, index) => {
//   return (
//     <Col style={{display:'flex'}} xl={6} lg={8} md={8} xs={24} >
//     <Card className="card_divider" bordered={false} style={{   borderTop:" 4px solid #18C438",borderBottom:" 1px solid #18C438",borderLeft:" 1px solid #18C438",borderRight:" 1px solid #18C438"}}>
//         <span className="product_management">{data.department} </span><br />
//         <span className="role"> {data.role}</span>
//         <div className="container1">
//             <span className="product_management"> Candidates:</span>
//             <Card >
//                 <Card.Grid hoverable={false} style={{borderRadius:'4px 0 0 4px'}}>
//                 <span className="product_management"> Total</span><br/>
//                 <span className="role">{data.total}</span>

//                 </Card.Grid>
//                 <Card.Grid hoverable={false}>
//                 <span className="product_management">New</span><br/>
//                 <span className="role">{data.new_value}</span>
//                 </Card.Grid>
//                 <Card.Grid hoverable={false} style={{  height:'100%',textAlign:'center',borderRadius:'0 4px 4px 0'}} >
// <span className="product_management" >Offered</span><br/>
// <span className="role">{data.offered_value}</span>
//                 </Card.Grid>
//             </Card>
//         </div>
//         <div className="location">
//         <span style={{float:'left'}} >{data.location} </span>
//         <span style={{float:'right'}} > {data.time}</span>
//         </div>
//         <Divider />
//         <span  style={{float:'left',color:'gray'}} >                 <Space size={[4, 8]} wrap>
//             <GlobalOutlined /> {data.status}</Space>
//             </span>
//         <span style={{float:'right'}}><a href="https://stackoverflow.com/">See Details</a></span>
//     </Card>
// </Col>
//   );
// })

// return (
//     <Row  gutter={[24, 24]} style={{minWidth:"100%"
// }}>
//         {renderCards}
//         <Col style={{display:'flex'}} xl={6} lg={8} md={8} xs={24} >
//         <Card style={{height:'100%',width:'100%',border:'2px dashed #AFAFAF'}} key="10">
//             <div className='image_align' >
//                 <Input
//                 placeholder='Placeholder'
                
//                 />
//                <img preview="false" src={require("../assests/icon.png")}
//                 /><br />
//                 <a className='font_align' href="https://google.com/">Add New Job</a>
//             </div>
//         </Card>
//         </Col>
//     </Row>

// )

// };
