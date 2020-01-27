import React from "react";
import { Form, Icon, Input, Button, Checkbox, Card } from "antd";

class SignIn extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };
  render() {
    // let { getFieldDecorator } = this.props.form;
    return (
      <div
        style={{
          background: "#ECECEC",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "-webkit-fill-available"
        }}
      >
        <Card title="Sign Up" bordered={false} style={{ width: 300 }}>
          <Form onSubmit={this.handleSubmit} className="signUp-form">
            <Form.Item>
              {/* {getFieldDecorator("username", {
            rules: [{ required: true, message: "Please input your username!" }]
          }) */}
              {/* ( */}
              <Input
                prefix={
                  <Icon type="firstName" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="First Name"
              />
              {/* )} */}
            </Form.Item>
            <Form.Item>
              {/* {getFieldDecorator("username", {
            rules: [{ required: true, message: "Please input your username!" }]
          }) */}
              {/* ( */}
              <Input
                prefix={
                  <Icon type="lastName" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Last Name"
              />
              {/* )} */}
            </Form.Item>
            <Form.Item>
              {/* {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          }) */}
              {/* ( */}
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
              {/* )} */}
            </Form.Item>
            <Form.Item>
              {/* {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true
          }) */}
              {/* ( */}
              <Checkbox>Remember me</Checkbox>
              {/* )} */}
              <a className="login-form-forgot" href="">
                Forgot password
              </a>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
              Or <a href="">register now!</a>
            </Form.Item>
          </Form>
        </Card>
      </div>
      // mountNode,
    );
  }
}
export default SignIn;
