import React from 'react';
import {Card, Button} from 'react-bootstrap';
import {Row } from 'reactstrap';

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
                <Button variant="primary" href="/teacher/batch/123">See Batch</Button>
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
                <Button variant="primary">See Batch</Button>
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
                <Button variant="primary">See Batch</Button>
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
                <Button variant="primary">See Batch</Button>
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
                <Button variant="primary">See Batch</Button>
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
                <Button variant="primary">See Batch</Button>
            </Card.Body>
            </Card>
            </Row>
        </div>
    )
}

export default TeacherHome;
