import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Result from '../Tables/Result';

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
                <Row>
                    <Col>
                        <Form.Label>Course Code</Form.Label>
                        <Form.Control type="text"/>
                    </Col>
                    <Col>
                        <Form.Label>Credits</Form.Label>
                        <Form.Control type="number"/>
                    </Col>
                </Row>
                
                <Row>
                    <Col>
                        <Form.Label>MST 1</Form.Label>
                        <Form.Control type="number"/>
                    </Col>
                    <Col>
                        <Form.Label>MST 2</Form.Label>
                        <Form.Control type="number"/>
                    </Col>
                </Row>
                
                <Row>
                    <Col>
                        <Form.Label>Attendence Theory</Form.Label>
                        <Form.Control type="number"/>
                    </Col>
                    <Col>
                        <Form.Label>Attendence Practical</Form.Label>
                        <Form.Control type="number"/>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Label>End Semester Theory Grade</Form.Label>
                        <Form.Select aria-label="Default select example">
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
                        <Form.Select aria-label="Default select example">
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
                            type="checkbox"
                            id="isTheory"
                            label="isTheory"
                        />
                        <Form.Check 
                            type="checkbox"
                            id="isPractical"
                            label="isPractical"
                        />
                    </Col>
                </Row>
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
          <AddInternshipForm/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="success">Save</Button>
          <Button onClick={props.onHide} variant="danger">Discard</Button>
        </Modal.Footer>
      </Modal>
    );
  }

function AddResult(){
  const [modalShow, setModalShow] = React.useState(false);
    return(
        <>
            <div  className="addButton">
                <Button variant="success" onClick={() => setModalShow(true)}>
                    Add Subject
                </Button>

                <AddInternshipModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
            <Result/>
        </>
    );
}
export default AddResult;