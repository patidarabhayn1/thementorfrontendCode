import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import '../../styles/Register.css'
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import { Menu, Dropdown, Button, message, Select } from "antd";
import { Link, NavLink } from 'react-router-dom';


export default function StudentSignUp() {
    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="formss">
            <Form
                name="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <p className="form-title">Welcome To "The Mentor"</p>
                <p>SignUp</p>
                <Form.Item
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                >
                    <Input
                        placeholder="Name"
                    />
                </Form.Item>
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your enrollment number!' }]}
                >
                    <Input
                        placeholder="Enrollment Number"
                    />
                </Form.Item>
                
                <Form.Item label="Branch">
                <Select showSearch>
                    <Select.Option value="demo">Demo</Select.Option>
                    <Select.Option value="demo">Demo</Select.Option>
                    <Select.Option value="demo">Demo</Select.Option>
                    <Select.Option value="demo">Demo</Select.Option>
                    <Select.Option value="demo">Demo</Select.Option>
                    <Select.Option value="demo">Demo</Select.Option>
                    <Select.Option value="demo">Demo</Select.Option>
                    <Select.Option value="demo">Demo</Select.Option>
                    <Select.Option value="demo">Demo</Select.Option>
                    <Select.Option value="demo">Demo</Select.Option>
                    <Select.Option value="demo">Demo</Select.Option>
                    <Select.Option value="demo">Demo</Select.Option>
                    <Select.Option value="demo">Demo</Select.Option>
                    <Select.Option value="demo">Demo</Select.Option>
                    <Select.Option value="demo">Demo</Select.Option>
                    <Select.Option value="demo">Demo</Select.Option>
                    <Select.Option value="demo">Demo</Select.Option>
                    <Select.Option value="demo">Demo</Select.Option>

                </Select>
                </Form.Item>
                <Form.Item label="Degree">
                <Select  showSearch>
                    <Select.Option value="demo">Demo</Select.Option>
                    <Select.Option value="1demo">ADemo</Select.Option>
                    <Select.Option value="demo">BDemo</Select.Option>
                    <Select.Option value="demo">CDemo</Select.Option>
                    <Select.Option value="demo">EDemo</Select.Option>
                    <Select.Option value="demo">FDemo</Select.Option>
                    <Select.Option value="demo">GDemo</Select.Option>
                    <Select.Option value="demo">FDemo</Select.Option>
                    <Select.Option value="demo">Demo</Select.Option>
                    <Select.Option value="demo">Demo</Select.Option>
                    <Select.Option value="demo">Demo</Select.Option>
                    <Select.Option value="demo">Demo</Select.Option>
                    <Select.Option value="demo">Demo</Select.Option>
                    <Select.Option value="demo">Demo</Select.Option>
                    <Select.Option value="demo">Demo</Select.Option>
                    <Select.Option value="demo">Demo</Select.Option>
                    <Select.Option value="demo">Demo</Select.Option>
                    <Select.Option value="demo">Demo</Select.Option>

                </Select>
                </Form.Item>
                <Form.Item
                    name="email"
                    rules={[{ required: true, type: "email", message: 'Please input valid email!' }]}
                >
                    <Input
                        placeholder="Email"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password
                        placeholder="Password"
                    />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked">
                    <a href="#">Forgot Password</a>
                </Form.Item>
                <Form.Item name="remember" valuePropName="checked">
                    <Link to="/login">
                        <span>Already have an account </span>
                    </Link>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        SIGNIN
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
