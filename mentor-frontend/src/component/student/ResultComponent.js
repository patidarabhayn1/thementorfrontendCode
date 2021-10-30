import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Result from '../Tables/Result';
import { useParams } from 'react-router';
import LoadingComponent from '../LoadingComponent';

function AddInternshipForm(props) {
    const onFinish = e => {
        e.preventDefault();
        const formData = new FormData(e.target),
              formDataObj = Object.fromEntries(formData.entries());
        props.addSubject(props.resultId, formDataObj);
      };

    return (
            <Form onSubmit={onFinish}>
                <Row>
                    <Col>
                        <Form.Label>Course Code</Form.Label>
                        <Form.Control required name="course" type="text"/>
                    </Col>
                    <Col>
                        <Form.Label>Credits</Form.Label>
                        <Form.Control required name="credits" type="number"/>
                    </Col>
                </Row>
                
                <Row>
                    <Col>
                        <Form.Label>MST 1</Form.Label>
                        <Form.Control name="mst1" type="number"/>
                    </Col>
                    <Col>
                        <Form.Label>MST 2</Form.Label>
                        <Form.Control name="mst2" type="number"/>
                    </Col>
                </Row>
                
                <Row>
                    <Col>
                        <Form.Label>Attendence Theory</Form.Label>
                        <Form.Control name='attendenceT' type="number"/>
                    </Col>
                    <Col>
                        <Form.Label>Attendence Practical</Form.Label>
                        <Form.Control name="attendenceP" type="number"/>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Label>End Semester Theory Grade</Form.Label>
                        <Form.Select name="endSemT" aria-label="Default select example">
                            <option>-</option>
                            <option value="O">O</option>
                            <option value="A+">A+</option>
                            <option value="A">A</option>
                            <option value="B+">B+</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="P">P</option>
                            <option value="G">P(G)</option>
                            <option value="Q">Q</option>
                            <option value="F">F</option>
                            <option value="Ab">Ab</option>
                        </Form.Select>
                    </Col>
                    <Col>
                        <Form.Label>End Semester Practical Grade</Form.Label>
                        <Form.Select name="endSemP" aria-label="Default select example">
                            <option>-</option>
                            <option value="O">O</option>
                            <option value="A+">A+</option>
                            <option value="A">A</option>
                            <option value="B+">B+</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="P">P</option>
                            <option value="G">P(G)</option>
                            <option value="Q">Q</option>
                            <option value="F">F</option>
                            <option value="Ab">Ab</option>
                        </Form.Select>
                    </Col>
                </Row>
            
                <Row>
                    <Col>
                        <Form.Check 
                            defaultValue
                            type="checkbox"
                            id="isTheory"
                            label="isTheory"
                            name="isTheory"
                            aria-label="isTheory"
                        />
                        <Form.Check 
                            defaultValue
                            type="checkbox"
                            id="isPractical"
                            label="isPractical"
                            name="isPractical"
                        />
                    </Col>
                </Row>
                <Form.Group>
                    <Button type="primary" htmlType="submit" className="login-form-button" style={{ marginTop: "10px" }}>
                    Submit
                    </Button>
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
            Add Subject in this Semester
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddInternshipForm addSubject = {props.addSubject} resultId = {props.resultId}/>
        </Modal.Body>
      </Modal>
    );
  }

function LoadSubjects(props) {
    if(props.subjects.subjects != null) {
        return(
            <Result subjects = {props.subjects}
                    studentId = {props.studentId}
                    resultId = {props.resultId}
                    deleteSubject = {props.deleteSubject}
            />
        );
    }
    else if(props.subjects.errMess){
        return(
            <h2>{props.subjects.errMess}</h2>
        );
    }
    else {
        return(
             <LoadingComponent />
        );
    }
}

function AddResult(props){
    const [modalShow, setModalShow] = React.useState(false);

    const { studentId, resultId }  = useParams();
    if(props.auth.isTeacher){
        if (!props.subjects.errMess && !props.subjects.isLoading) {
            if(props.subjects.subjects == null)
                props.loadSubjectsTeacher(studentId, resultId);
            // else if(props.subjects.subjects._id != resultId)
            //     props.loadSubjectsTeacher(studentId, resultId);
        }
    }
    else {
        if (!props.subjects.errMess && !props.subjects.isLoading) {
            if(props.subjects.subjects == null)
                props.loadSubjectsStudent(resultId);
            // else if(props.subjects.subjects._id != resultId)
            //     props.loadSubjectsStudent(resultId);
        }
    }
    return(
        <>
            <div  className="addButton">
                <Button variant="success" onClick={() => setModalShow(true)}>
                    Add Subject
                </Button>

                <AddInternshipModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    addSubject = {props.addSubject}
                    resultId = {resultId}
                />
            </div>
            <LoadSubjects 
                    subjects = {props.subjects}
                    studentId = {studentId}
                    resultId = {resultId}
                    deleteSubject = {props.deleteSubject}
            />
        </>
    );
}
export default AddResult;