import React, {useState,useEffect} from 'react';
import 'antd/dist/antd.css';
import '../styles/Register.css'
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import { Menu, Dropdown, Button, message } from "antd";
import { Link, NavLink } from 'react-router-dom';

export default function facultySignUp() {
    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    function handleButtonClick(e) {
        message.info("Click on left button.");
        console.log("click left button", e);
      }
      
    function handleMenuClick(e) {
        message.info("Click on menu item.");
        console.log("click", e);
      }
      let dropdown= 'Degree';
    const menu = (
            <Menu onClick={handleMenuClick}>
              <Menu.Item key="1" >
                BTECH
              </Menu.Item>
              <Menu.Item key="2" >
                BSC
              </Menu.Item>
              <Menu.Item key="3" >
                BCOM
              </Menu.Item>
            </Menu>  
      );
    const menu1 = (
            <Menu onClick={handleMenuClick}>
              <Menu.Item key="1" >
                CS
              </Menu.Item>
              <Menu.Item key="2" >
                EC
              </Menu.Item>
              <Menu.Item key="3" >
                ME
              </Menu.Item>
            </Menu>  
      );
    return (
        <div className="formfs">
            <Form
                name="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <p className="form-title">Welcome To "The Mentor"</p>
                <p>Sign Up </p>
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
                        placeholder="Staff Id"
                    />
                </Form.Item>
                
                <Form.Item
                    name="email"
                    rules={[{ required: true,type: "email", message: 'Please input valid email!' }]}
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