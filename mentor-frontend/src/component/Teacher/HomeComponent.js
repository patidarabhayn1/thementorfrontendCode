import React from 'react';
import {Card} from 'react-bootstrap';
import {Row } from 'reactstrap';
import {Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import MessageComponent from '../Registration/messageComponent';

function AddInternshipForm() {
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
                <Form.Label>Branch</Form.Label>
                <Form.Control type="text"/>
              </Form.Group>
              <Form.Group>
                <Form.Label>Year</Form.Label>
                <Form.Control type="number"/>
              </Form.Group>
              <Form.Group>
                <Form.Label>From</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
            </Form>
    )
  }
  
  function AddInternshipModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Batch
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddInternshipForm/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="success">Save</Button>
          <Button onClick={props.onHide} variant="danger">Discard</Button>
        </Modal.Footer>
      </Modal>
    );
  }

function TeacherHome(props) {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
          {
            props.message.showMessage ?
              <MessageComponent message={props.message.showMessage}/>
            :
              <div></div>
          }
        <div  className="addButton" style={{marginBottom: "10px"}}>
            <Button variant="success" onClick={() => setModalShow(true)}>
                Add Batch
            </Button>

            <AddInternshipModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>

        <div className="TeacherHome">
            <Row>
            <Card className="col-lg-3 offset-lg-1 batchCard">
            <Card.Header>Batch 1</Card.Header>
            <Card.Body>
                <Card.Title>Computer Science and Business System</Card.Title>
                <Card.Text>
                    20 Members
                    17 Meetings
                </Card.Text>
                <Button variant="primary"><Link to="/teacher/batch/:batchId">The Mentor</Link></Button>
            </Card.Body>
            </Card>
            <Card className="col-lg-3 offset-lg-1 batchCard">
            <Card.Header>Batch 1</Card.Header>
            <Card.Body>
                <Card.Title>Computer Science and Business System</Card.Title>
                <Card.Text>
                    20 Members
                    17 Meetings
                </Card.Text>
                <Button variant="primary"><Link to="/teacher/batch/:batchId">The Mentor</Link></Button>
            </Card.Body>
            </Card>
            <Card className="col-lg-3 offset-lg-1 batchCard">
            <Card.Header>Batch 1</Card.Header>
            <Card.Body>
                <Card.Title>Computer Science and Business System</Card.Title>
                <Card.Text>
                    20 Members
                    17 Meetings
                </Card.Text>
                <Button variant="primary"><Link to="/teacher/batch/:batchId">The Mentor</Link></Button>
            </Card.Body>
            </Card>
            <Card className="col-lg-3 offset-lg-1 batchCard">
            <Card.Header>Batch 1</Card.Header>
            <Card.Body>
                <Card.Title>Computer Science and Business System</Card.Title>
                <Card.Text>
                    20 Members
                    17 Meetings
                </Card.Text>
                <Button variant="primary"><Link to="/teacher/batch/:batchId">The Mentor</Link></Button>
            </Card.Body>
            </Card>
            <Card className="col-lg-3 offset-lg-1 batchCard">
            <Card.Header>Batch 1</Card.Header>
            <Card.Body>
                <Card.Title>Computer Science and Business System</Card.Title>
                <Card.Text>
                    20 Members
                    17 Meetings
                </Card.Text>
                <Button variant="primary"><Link to="/teacher/batch/:batchId">The Mentor</Link></Button>
            </Card.Body>
            </Card>
            <Card className="col-lg-3 offset-lg-1 batchCard">
            <Card.Header>Batch 1</Card.Header>
            <Card.Body>
                <Card.Title>Computer Science and Business System</Card.Title>
                <Card.Text>
                    20 Members
                    17 Meetings
                </Card.Text>
                <Button variant="primary"><Link to="/teacher/batch/:batchId">The Mentor</Link></Button>
            </Card.Body>
            </Card>

            </Row>
        </div>
        </>
    )
}

export default TeacherHome;
