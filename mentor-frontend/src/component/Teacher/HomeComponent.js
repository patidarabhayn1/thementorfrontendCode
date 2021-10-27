import React from 'react';
import {Card} from 'react-bootstrap';
import {Row } from 'reactstrap';
import {Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import LoadingComponent from'../LoadingComponent';

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

function Batches({batches}){
  if(batches.errMess) {
    return(
      <h3>{batches.errMess}</h3>
    );
  }
  else if(batches.batches == null) {
    return(
      <LoadingComponent/>
    );
  }
  else {
    var x = 0;
    return(
      <>
      {
        batches.batches.map((batch) => {
          return(
            <Card className="col-lg-3 offset-lg-1 batchCard">
            <Card.Header>Batch {x=x+1}</Card.Header>
            <Card.Body>
                <Card.Title>{batch.branch}{" " + batch.year}</Card.Title>
                <Card.Text>
                    Meetings Count: {batch.meetings.length}<br/>
                    Mentoring From: {batch.year}
                </Card.Text>
                <Button variant="primary"><Link to={"/teacher/batch/"+batch._id}>View Batch</Link></Button>
            </Card.Body>
          </Card>
          );
        })
      }
      </>
    );
  }
}

function TeacherHome(props) {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
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
              <Batches batches = {props.batches}/>
            </Row>
        </div>
        </>
    )
}

export default TeacherHome;
