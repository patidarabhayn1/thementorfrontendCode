import React from 'react';
import StudentList from '../Tables/StudentList';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
              <Form.Group>
                <Form.Label>Student's Enrollment No.</Form.Label>
                <Form.Control type="email" placeholder="ex. EN19CS306016" />
                <Form.Text className="text-muted">
                  We will show his details
                </Form.Text>
              </Form.Group>
                <Button variant="primary" type="submit">
                  Fetch Details
                </Button>
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
