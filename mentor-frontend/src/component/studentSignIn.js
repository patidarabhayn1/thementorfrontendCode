import React, {useState,useEffect} from 'react';
import 'antd/dist/antd.css';
import '../styles/Register.css'
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import Button from "antd/lib/button";

export default function studentSignIn() {
    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <Form
                name="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                
                <p className="form-title">Welcome back</p>
                <p>SignIn to the Mentor</p>
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input
                        placeholder="Username"
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

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        SIGNIN
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}