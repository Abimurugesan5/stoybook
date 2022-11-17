import "../PlainForm/PlainForm.css"
import TextEditor from "../../TextEditor";
import React from "react";
import { Link } from "react-router-dom";
import {  Form, Input,Button,Select,Slider,PageHeader , Layout,Card, Divider,Row,Col} from "antd";
import { StepPanel } from "./StepPanel";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Typography } from 'antd';
  
const { Title,Text } = Typography;
const { Option } = Select;
const {Container}=Layout;
const marks = {
  0: '0',
  8: '8',
  14: '14',
  100: {
   
    label: 80
  },
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const childrendata=[
  {
    value:"java"
  },{
    value:"c++"
  }
]
const children = [];

for (let i =0; i <childrendata.length; i++) {
  children.push(<Option key={Object.values(childrendata[i])}>{Object.values(childrendata[i])}</Option>);

}
const handleLinkClick = (event, message) => {
  console.log('Link clicked');
  console.log(message);
};
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
function PlainForm() {
  const [stepForm] = Form.useForm();


  const Step1Form = () => {
    return (
      <>
      <h5 style={{color:"#0D3F4B"}}>ADD JOB DETAIL</h5>
     <Form
      name="basic"
      wrapperCol={{ span: 20 }}
      title="Add Job"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
        <Form.Item >
        <Card style={{backgroundColor:"#F3F3F3"}} >
          <h3 style={{color:"#262626"}}>Import a Template</h3>
        <Row style={{color:"#595959"}} >
      <Col span={10}>Select the role you’re hiring for and create your job in less than a minute.<br/>
      <a href="" onClick={event => handleLinkClick(event, 'hello')} to="/about" style={{ textDecorationLine: 'underline',}}>
      Select Template
        </a >
      </Col>
     
      <Col style={{ height: "70px" }}>
     
        <Divider type="vertical" style={{ height: "100%" }} />
      </Col>
      <Col span={11} > Upload a JD file from various places to get your form filled automatically.<br/>
      <a href="" onClick={event => handleLinkClick(event, 'hello')} to="/about" style={{ textDecorationLine: 'underline',}}>
      Upload File
        </a>
        
        <Divider type="vertical" style={{ height: "50%",color:"#BFBFBF" }} />
        <a href="" onClick={event => handleLinkClick(event, 'hello')} to="/about" style={{ textDecorationLine: 'underline',}}>
        Sample File.xlsx
        </a>
      </Col>
     
        
    </Row>
    </Card>

      </Form.Item  >
      <label className="required">Job Title</label>

      <Form.Item
        name="username"
        
        rules={[{ required: true, message: 'Please input your username!'}]}

      >
        <Input />
      </Form.Item>

      <label className="required">Job Description</label>
      <Form.Item >
      <TextEditor />

      </Form.Item>
      <label className="required">Department</label>

      <Form.Item  rules={[
                      {
                        required: true,
                        message: "Please input your email!",
                      },
                    ]}>
        <Select>
         <Option value="demo">Finance</Option>
          <Option value="demo">HR department</Option>
          <Option value="demo">HR department</Option>
        </Select>
      </Form.Item>

     <Row>
      <Col span={12}>
      <label className="required">Job Type</label>
      <Form.Item >
      <Select>
          <Select.Option value="jobtype">Full Time </Select.Option>
          <Select.Option value="jobtype">Part Time</Select.Option>
        </Select>
        </Form.Item>
      </Col>
      <Col span={12} >
      <label className="required">Experience Range (in Years) *</label>
      <Form.Item >
      <Slider range marks={marks} defaultValue={[8, 14]} />
</Form.Item> 
      </Col>
     </Row>
      {/* <label className="required">Experience in Years</label>

      <Form.Item >
        <Select>
          <Select.Option value="jobtype">Full Time </Select.Option>
          <Select.Option value="jobtype">Part Time</Select.Option>
        </Select>
      </Form.Item> */}

     <Row>
      <Col span={12}>
      <label className="required">Salary Range (in Lakhs)</label>

<Form.Item >
<Slider style={{color:"black"}} range={{ draggableTrack: true }} defaultValue={[20, 50]} />
</Form.Item>
      </Col>
      <Col span={12}>
      <label className="required">Location</label>
      <Form.Item>
        <Select>
          <Select.Option value="jobtype">Chennai </Select.Option>
          <Select.Option value="jobtype">Bengaluore</Select.Option>
        </Select>
      </Form.Item>
      </Col>
     </Row>

<Row>
  <Col span={12}>
  <label className="required">Interview Mode *</label>
      <Form.Item>
        <Select>
          <Select.Option value="jobtype">2 in 1 </Select.Option>
          <Select.Option value="jobtype">Bengaluore</Select.Option>
        </Select>
      </Form.Item>
  </Col>
 
  <Col span={12}>
  <label className="required">No. of Rounds *</label>
      <Form.Item>
        <Select>
          <Select.Option value="jobtype">1 </Select.Option>
          <Select.Option value="jobtype">2</Select.Option>
        </Select>
      </Form.Item>
  </Col>
</Row>
<Row>
  <Col span={12}> 
  <label className="required">Projected Monthly Interviews</label>
      <Form.Item >
        <Select placeholder="No. of Counts">
          <Select.Option value="jobtype">1 </Select.Option>
          <Select.Option value="jobtype">2</Select.Option>
        </Select>
      </Form.Item>
  </Col>
  <Col span={12}>
  <label className="required">Priority</label>
      <Form.Item>
        <Select placeholder="Select Priority">
          <Select.Option value="jobtype">1 </Select.Option>
          <Select.Option value="jobtype">2</Select.Option>
        </Select>
      </Form.Item>
  </Col>
</Row>
<label className="required">Hiring Recruiter</label>

<Form.Item >
<Select placeholder="Select Users">
          <Select.Option value="jobtype">1 </Select.Option>
          <Select.Option value="jobtype">2</Select.Option>
        </Select>
        </Form.Item>
        <label className="required"> Skillsets *</label>

      <Form.Item>
      <Select
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="select one country"
    defaultValue={['china']}
    onChange={handleChange}
    optionLabelProp="label"
  >
      <Option value="fullstack" label="FullStack"></Option>
      <Option value="java" label="Java"></Option>
    </Select>
      </Form.Item>

     
     
      {/* <Form  
       layout="vertical"
      name="dynamic_form_item"  onFinish={onFinish}>
      <Form.List
        name="names"
      
      >
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map((field, index) => (
              <Form.Item
              wrapperCol={{ span: 10 }}

              >
              <Select
                mode="tags"
                placeholder="Add Skillset"
                onChange={handleChange}
                tokenSeparators={[',']}
              >
                           {children}
                  </Select>
                {fields.length > 1 ? (
                  <MinusCircleOutlined
                    className="dynamic-delete-button"
                    onClick={() => remove(field.name)}
                  />
                ) : null}
              </Form.Item>
            ))}
                  <label className="required">SkillSet</label>

            <Form.Item wrapperCol={{  span: 16 }}>
              <Button
                type="dashed"
                onClick={() => add()}
                style={{
                  width: '63%',
                }}
                icon={<PlusOutlined />}
              >
                Add field
              </Button>
       
              <Form.ErrorList errors={errors} />
            </Form.Item>
          </>
        )}
      </Form.List>

    </Form> */}

    </Form>

      </>
    );
  };

  const Step2Form = () => {
    return (
      <>
        <Form.Item name="field2" label="Field2">
          <Input />
        </Form.Item>
      </>
    );
  };

  const onFinish = (fieldsValue) => {
    const formData = stepForm.getFieldsValue();

    // POST the data to backend and show Notification
    console.log(formData);
  };

  const steps = [
    {
      title: "Job Details",
      content: <Step1Form />,
      description:"You can publish up to 10 jobs"

    },
    {
      title: "Upload Resume",
      content: <Step2Form />,
      description:"Add the candidates resume"

    }
  ];
  return (
    <div className="container">
      <div className="conatiner">
      <PageHeader
    
      onBack={() => window.history.back()}
      title="Add New Jobs"
     style={{textDecorationColor:"0C3F4B"}}
      extra={[
        // <Button key="3">Operation</Button>,
        // <Button key="2">Operation</Button>,
        <>
         <a href="" onClick={event => handleLinkClick(event, 'hello')} to="/about" style={{ textDecorationLine: 'underline',}}>
         Save Draft & Close
        </a>
        
        <Button key="1" style={{backgroundColor:'#0C3F4A',color:"white"}}>
          Publish & Next
        </Button>,
        </>
      ]}
    />
     <Card>
      
      <Form form={stepForm} onFinish={onFinish} >
        <StepPanel  steps={steps} />
      </Form>
      </Card>
      </div>
    </div>
  );
}
export default PlainForm
