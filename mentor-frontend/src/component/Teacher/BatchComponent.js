import React from 'react';
import StudentList from '../Tables/StudentList';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'antd/dist/antd.css';
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import { Menu, Dropdown, message, Select } from "antd";
import { Link, NavLink } from 'react-router-dom';

function ModalForm() {
    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
            <Form
                name="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
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
            </Form>
    )
}

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Student
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalForm/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="success">Save</Button>
          <Button onClick={props.onHide} variant="danger">Discard</Button>
        </Modal.Footer>
      </Modal>
    );
  }

function BatchComponent() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className="studentList">
            <div  className="addButton">
                <Button variant="success" onClick={() => setModalShow(true)}>
                    Add Student
                </Button>

                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
            <div className="studentListTable">
                <StudentList/>
            </div>
        </div>
    )
}

export default BatchComponent;
