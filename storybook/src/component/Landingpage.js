import React, { useEffect, useState } from 'react'
import { Card, Avatar, Col, Typography, Row, Divider, Space ,Anchor,Image,Menu} from 'antd';
import {GlobalOutlined,FormOutlined} from '@ant-design/icons';
import axios from 'axios'; 
import '../component/Landingpage.css';
const gridStyle = {
    height:'100%',
    textAlign:'center',
    width:"33.33%"
  };
const gridempty={
    width:'100%',
    borderRadius:'4px',
    backgroundImage: `url(${require("../assests/empty_image.png")})`,  
    backgroundRepeat: 'no-repeat', 
    backgroundPosition:'center',
    height:'93.34px',
    backgroundColor:'#E9E9E9'

}
  const { Link } = Anchor;

const Landingpage = () => {

    const [Data, setData] = useState([])

    useEffect(() => {
        // axios.get('https://jsonplaceholder.typicode.com/users')
        //     .then(response => {
        //         if (response.data.length!==0) {
        //             console.log(response.data)
        //             setData(response.data)
        //         } else {
        //             alert('Failed to get Data')
        //         }
        //     })

        var data=[{
            "department":"Product Management", 
            "role":"Senior Product Manager", 
            "total":10,
            "new_value":0,
            "offered_value":10,
            "location":"Bengaluru",
            "time":"Full Time",
            "status":"Published"

        },
        {
            "department":"Sales & Business Development", 
            "role":"Senior Business Development Executive", 
            "total":21,
            "new_value":10,
            "offered_value":2,
            "location":"Bengaluru",
            "time":"Full Time",
            "status":"Published",

        }
        ,{
            "department":"Finance", 
            "role":"Senior Financial Analyst - Sales Compensation Tool", 
            "total":49,
            "new_value":1,
            "offered_value":0,
            "location":"Chennai",
            "time":"Full Time",
            "status":"Published"

        },
        {
            "department":"Finance", 
            "role":"Senior Financial Analyst - Sales Compensation Tool", 
            "total":49,
            "new_value":1,
            "offered_value":0,
            "location":"Chennai",
            "time":"Full Time",
            "status":"Published"

        },
        {
            "department":"Finance", 
            "role":"Senior Financial Analyst - Sales Compensation Tool", 
            "total":49,
            "new_value":1,
            "offered_value":0,
            "location":"Chennai",
            "time":"Full Time",
            "status":"Published"

        }   ,{
            "department":"Finance", 
            "role":"Senior Financial Analyst - Sales Compensation Tool", 
            "total":49,
            "new_value":1,
            "offered_value":0,
            "location":"Chennai",
            "time":"Full Time",
            "status":"Draft"

        },{
            "department":"Finance data", 
            "role":"Senior Financial Analyst - Sales Compensation Tool", 
            "total":0,
            "new_value":0,
            "offered_value":0,
            "location":"Chennai",
            "time":"Full Time",
            "status":"Draft"

        }
    ]
    setData(data)



    }, [])
    const renderCards = Data.map((data, index) => {
        let status_value=data.status;
   
        if((status_value.toLowerCase()!=="draft"))
        {
        return(         
        <Col style={{display:'flex'}} xl={6} lg={8} md={8} xs={24} >
            <Card className="card_divider" bordered={false} style={{   borderTop:" 4px solid #18C438"}}>
                <span className="product_management">{data.department} </span><br />
                <span className="role"> {data.role}</span>
                <div className="container1">
                    <span className="product_management"> Candidates:</span>
                    <Card >
                        <Card.Grid hoverable={false} style={{gridStyle,borderRadius:'4px 0 0 4px'}}>
                        <span className="product_management"> Total</span><br/>
                        <span className="role">{data.total}</span>

                        </Card.Grid>
                        <Card.Grid hoverable={false} style={gridStyle}>
                        <span className="product_management">New</span><br/>
                        <span className="role">{data.new_value}</span>
                        </Card.Grid>
                        <Card.Grid hoverable={false} style={{  height:'100%',textAlign:'center',borderRadius:'0 4px 4px 0'}} >
        <span className="product_management" >Offered</span><br/>
        <span className="role">{data.offered_value}</span>
                        </Card.Grid>
                    </Card>
                </div>
                <div className="location">
                <span style={{float:'left'}} >{data.location} </span>
                <span style={{float:'right'}} > {data.time}</span>
                </div>
                <Divider />
                <span  style={{float:'left',color:'gray'}} >                 <Space size={[4, 8]} wrap>
                    <GlobalOutlined /> {data.status}</Space>
                    </span>
                <span style={{float:'right'}}><a href="https://stackoverflow.com/">See Details</a></span>
            </Card>
        
        </Col>
        )
        }
        else{
        return (
            <Col style={{display:'flex'}} xl={6} lg={8} md={8} xs={24} >
            <Card className="card_divider" bordered={false} style={{borderTop:"4px solid  #E9E9E9"}}>
                <span className="product_management">{data.department} </span><br />
                <span className="role"> {data.role}</span>
                <div className="container1">
                    <span className="product_management"> Candidates:</span>
                    <Card>
                        <Card.Grid hoverable={false} style={gridempty}>

                        </Card.Grid>
        
                    </Card>
                </div>
                <div className="location">
                <span style={{float:'left'}} >{data.location} </span>
                <span style={{float:'right'}} > {data.time}</span>
                </div>
                <Divider />
                <span  style={{float:'left',color:'gray'}} > 
                <Space size={[8, 16]} wrap>

                <FormOutlined />
                 {data.status}  </Space> </span>
                
                <span style={{float:'right'}}><a href="https://stackoverflow.com/">See Details</a></span>
            </Card>          
            </Col>
        )
        }
})
  return (
            <Row  gutter={[24, 24]} style={{minWidth:"100%"
}}>
                {renderCards}
                <Col style={{display:'flex'}} xl={6} lg={8} md={8} xs={24} >
                <Card style={{height:'100%',width:'100%',border:'2px dashed #AFAFAF'}}>
                    <div className='image_align' >
                       
                        <a className='font_align' href="https://google.com/">Add New Job</a>
                    </div>
                </Card>
                </Col>
            </Row>
 
    )
};

export default Landingpage;