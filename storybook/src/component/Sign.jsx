import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Route, Switch} from "react-router-dom";
import FormErrors from "../utility/FormError";
 import validateForm from "../utility/FormValidation";
// import FormErrors from "../../utility/FormErrors";

import {
  Layout,
  Button,
  Row,
  Col,
  Typography,
  Form,
  Input,
} from "antd";


import {
  LockOutlined,
  UserOutlined,
} from "@ant-design/icons";
//import { Auth } from "aws-amplify";

const { Title } = Typography;
const { Header, Content } = Layout;
export default class Sign extends Component {
  state = {
    username: "",
    password: "",
    errors: {
      // cognito: null,
      blankfield: false
    }
  };

  clearErrorState = () => {
    this.setState({
      errors: {
        // cognito: null,
        blankfield: false
      }
    });
  };

  handleSubmit = async event => {
console.log("event",event)
    this.clearErrorState();
     const error = validateForm(event, this.state);
    if (error) {
      this.setState({
        errors: { ...this.state.errors, ...error }
      });
    }
    // try {
    //         console.log(this.state.username,this.state.password);

    //   const user = await Auth.signIn(this.state.username, this.state.password);
    //   //console.log(user);
    //   this.props.auth.setAuthStatus(true);
    //   this.props.auth.setUser(user);
    //   localStorage.setItem("user",JSON.stringify(user))
    //   this.props.history.push("/");
    // }catch(error) {
    //   let err = null;
    //   !error.message ? err = { "message": error } : err = error;
    //   this.setState({
    //     errors: {
    //       ...this.state.errors,
    //       cognito: err
    //     }
    //   });
    // }
  };

  onInputChange = event => {
    console.log("test",event)
    this.setState({
      [event.target.id]: event.target.value
    });
    document.getElementById(event.target.id).classList.remove("is-danger");
  };

  render() {
 

    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };
    return (
      <>
        <Layout className="layout-default layout-signin">
          <Header>
            <div className="header-col header-brand">
           
            </div>
          </Header>
          <Content className="signin">
            <Row gutter={[24, 0]} justify="space-around">
              <Col
                xs={{ span: 24, offset: 0 }}
                lg={{ span: 6, offset: 2 }}
                md={{ span: 12 }}
              >
                <Title className="mb-15">Sign In</Title>
                <Title className="font-regular text-muted" level={5}>
                <FormErrors formerrors={this.state.errors} id="error" />
                </Title>
                <Form
                  onFinish={this.handleSubmit}
                  onFinishFailed={onFinishFailed}
                  layout="vertical"
                  className="row-col"
                >
                  <Form.Item
                    className="username"
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your email!",
                      },
                    ]}
                  >
                    <Input
                    prefix={<UserOutlined />}
                    id="username"
                    aria-describedby="usernameHelp"
                  placeholder="Email"
                  value={this.state.username}
                  onChange={this.onInputChange}
    
                />
                  </Form.Item>

                  <Form.Item
                    className="username"
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password
                       prefix={<LockOutlined />}
                      value={this.state.password}
                      onChange={this.onInputChange}
                    placeholder="Password" />
                  </Form.Item>


                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{ width: "100%" }}
                    >
                      SIGN IN
                    </Button>
                  </Form.Item>
                  <p className="font-semibold text-muted">
                    Don't have an account?{" "}
                    <a to="/sign-up" className="text-dark font-bold">
                      Sign Up
                    </a>
                  </p>
                </Form>
              </Col>
              <Col
                className="sign-img"
                style={{ padding: 12,marginTop:'150px' }}
                xs={{ span: 24 }}
                lg={{ span: 12 }}
                md={{ span: 12 }}
              >
                {/* <img src={signinbg} alt="" /> */}
              </Col>
            </Row>
          </Content>
         
        </Layout>
      </>
    );
  }
}



