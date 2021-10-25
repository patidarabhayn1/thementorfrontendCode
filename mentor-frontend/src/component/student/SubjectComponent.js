import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const subject = {
    courseCode: "EN13BS01",
    subjectName: "XUZ",
    attendenceT: 99,
    attendenceP: 99,
    endSemT: "A+",
    endSemP: "A+",
    mst1: 40,
    mst2: 35,
    isTheory: true,
    isPractical: false,
    credits: 4
}

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
            Edit Subject
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

function ShowResult(){
    const [modalShow, setModalShow] = React.useState(false);
    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    
    return(
        <>
            <div  className="addButton">
                <Button onClick={() => setModalShow(true)}>
                    Edit Subject
                </Button>

                <AddInternshipModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
            <Form
                name="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Row style={{marginTop: "10px", marginBottom: "20px"}}>
                    <Col>
                        <Form.Label>Course Code</Form.Label>
                        <Form.Control type="text" readOnly value={subject.courseCode}/>
                    </Col>
                    <Col>
                        <Form.Label>Subject name</Form.Label>
                        <Form.Control type="text" readOnly value={subject.subjectName}/>
                    </Col>
                    <Col>
                        <Form.Label>Credits</Form.Label>
                        <Form.Control type="number" readOnly value={subject.credits}/>
                    </Col>
                </Row>
                
                <Row style={{marginTop: "10px", marginBottom: "20px"}}>
                    <Col>
                        <Form.Label>MST 1</Form.Label>
                        <Form.Control type="number" readOnly value={subject.mst1}/>
                    </Col>
                    <Col>
                        <Form.Label>MST 2</Form.Label>
                        <Form.Control type="number" readOnly value={subject.mst2}/>
                    </Col>
                    <Col>
                        <Form.Label>Attendence Theory</Form.Label>
                        <Form.Control type="number" readOnly value={subject.attendenceT}/>
                    </Col>
                    <Col>
                        <Form.Label>Attendence Practical</Form.Label>
                        <Form.Control type="number" readOnly value={subject.attendenceP}/>
                    </Col>
                </Row>

                <Row style={{marginTop: "10px", marginBottom: "20px"}}>
                    <Col>
                        <Form.Label>End Semester Theory Grade</Form.Label>
                        <Form.Select aria-label="Default select example" disabled="true" value={subject.endSemT}>
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
                        <Form.Select aria-label="Default select example" disabled="true" value={subject.endSemP}>
                            <option>-</option>
                            <option value="O">O</option>
                            <option value="A+">A+</option>
                            <option value="A">A</option>
                            <option value="B+">B+</option>
                            <option value="B" selected>B</option>
                            <option value="C">C</option>
                            <option value="P">P</option>
                            <option value="G">P(G)</option>
                            <option value="Q">Q</option>
                            <option value="F">F</option>
                            <option value="Ab">Ab</option>
                        </Form.Select>
                    </Col>
                </Row>
            
                <Row style={{marginTop: "10px", marginBottom: "20px"}}>
                    <Col>
                        <Form.Check 
                            type="checkbox"
                            id="isTheory"
                            label="isTheory"
                            disabled="true"
                            style= {{float:  "left", marginRight: "10px"}}
                            checked = {subject.isTheory}
                        />
                        <Form.Check 
                            type="checkbox"
                            id="isPractical"
                            label="isPractical"
                            disabled="true"
                            style= {{float:  "left"}}
                            checked = {subject.isPractical}
                        />
                    </Col>
                </Row>
            </Form>
    
        </>
    );
}
export default ShowResult;