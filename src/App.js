import React from 'react';
import { Form, Input, Card , Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import "antd/dist/antd.css";
import "./index.css";


function App() {
  const onFinish = (values) => {
    // console.log('Success:', values);
    alert('Success');
  };

  const onFinishFailed = (errorInfo) => {
    // console.log('Failed:', errorInfo);
    alert('Failed');
  };

  return (
    <div className="App">\
     <Row justify="space-around" align="middle">
      <Col span={12} offset={5}>
    <Card title="Login form" style={{ width: 400}}>
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            type: 'email',
            message: 'Please enter a valid email',
          },
          {
            required: true,
            message: 'Please input your E-mailll23!',
          },
          () => ({
            validator(_, value) {
              const pattern = /^([a-zA-Z0-9-_]{1,30}(?:[.]{0,1})[a-zA-Z0-9]{1,})@[a-z0-9]{2,}(\.[a-z0-9]{2,4})$/;
              if (!value || pattern.test(value) ){
                return Promise.resolve();
              }
              return Promise.reject(new Error('Please enter a valid email'));
            },
          })
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      {/* <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </Card>
    </Col>
    </Row>
    </div>
    
  );
}

export default App;
