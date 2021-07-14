import React from 'react';
import { Form, Input, Card , Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import "antd/dist/antd.css";
import "./index.css";


function App() {
  const { Option } = Select;

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
      // onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
          // ({ getFieldValue }) => ({
          //   validator(_, value) {
          //     if (!value || getFieldValue('email') === 'hello@gmail.com') {
          //       return Promise.resolve();
          //     }
          //     return Promise.reject(new Error('wrong'));
          //   },
          // }),
          {
                // pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                // pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/,
                // pattern: /^(((?=.*[A-Za-z])|(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                pattern: /^(([^<>()\[\]\\.,;:\s@"]+[a-zA-Z0-9._-](\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/,
                message: 'Please enter a valid email',
            }
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
