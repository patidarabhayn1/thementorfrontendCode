import React from 'react';
import {Card, Button} from 'react-bootstrap';
import {Row } from 'reactstrap';
import {Link } from 'react-router-dom';

function TeacherHome() {
    return (
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
    )
}

export default TeacherHome;
