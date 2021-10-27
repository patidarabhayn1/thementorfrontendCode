import React from 'react';
import StudentList from '../Tables/StudentList';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import MeetingList from '../Tables/MeetingTable';
import { useParams } from 'react-router-dom';
import LoadingComponent from '../LoadingComponent';

function AddStudentForm() {
    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
            <Form
                name="student-add-form"
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

function AddStudentModal(props) {
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
          <AddStudentForm/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="success">Save</Button>
          <Button onClick={props.onHide} variant="danger">Discard</Button>
        </Modal.Footer>
      </Modal>
    );
  }

function AddMeetingForm() {
  const onFinish = values => {
      console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
  };

  return (
          <Form
              name="student-add-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
          >
            <Form.Group>
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" placeholder="ex. dd-mm-yy" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Advice</Form.Label>
              <Form.Control type="text" placeholder="Do Some Internships" />
              <Form.Text className="text-muted">
                What advice you have given to mentees
              </Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Label>Attendece</Form.Label>
              <Form.Control type="number" placeholder="ex. 88.33%" />
              <Form.Text className="text-muted">
                  (in %)
              </Form.Text>
            </Form.Group>
          </Form>
  )
}

function AddMeetingModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Meeting Record
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddMeetingForm/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="success">Save</Button>
          <Button onClick={props.onHide} variant="danger">Discard</Button>
        </Modal.Footer>
      </Modal>
    );
}

function LoadBatch({batch}){
  if(batch.batch){
    return(
      <MeetingList meetings = {batch.batch.meetings}/>
  );
  }
  else if(batch.errMess){
    return(
      <h2>{batch.errMess}</h2>
    );
  }
  else{
    return(
      <LoadingComponent/>
    );
  }
}

function LoadStudents({students}){
  if(students.students){
    return(
      <StudentList students = {students.students}/>
  );
  }
  else if(students.errMess){
    return(
      <h2>{students.errMess}</h2>
    );
  }
  else{
    return(
      <LoadingComponent/>
    );
  }
}


function BatchComponent(props) {
    const { batchId } = useParams();
    if(props.batch.batch == null && !props.batch.errMess && !props.batch.isLoading) {
      props.loadBatch();  
    }
    const [modalShow1, setModalShow1] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);

    return (
        <div className="studentList">
            <div  className="addButton">
                <Button variant="success" onClick={() => setModalShow1(true)}>
                    Add Student
                </Button>

                <AddStudentModal
                    show={modalShow1}
                    onHide={() => setModalShow1(false)}
                />
            </div>
            <div className="studentListTable">
                <LoadStudents students = {props.students}/>
            </div>
            <div  className="addButton">
                <Button variant="success" onClick={() => setModalShow2(true)}>
                    Add Meeting
                </Button>

                <AddMeetingModal
                    show={modalShow2}
                    onHide={() => setModalShow2(false)}
                />
            </div>
            <div className="studentListTable">
                <LoadBatch batch = {props.batch}/>
            </div>
        </div>
    )
}

export default BatchComponent;
