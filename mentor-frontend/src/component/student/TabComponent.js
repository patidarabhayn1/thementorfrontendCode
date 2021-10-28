import * as React from 'react';
import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Internship from '../Tables/InternshipTable';
import Courses from '../Tables/CoursesTable';
import Absence from '../Tables/MajorAbsenceTable';
import Activity from '../Tables/IndisciplinaryActivityTable';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddSemesterForm() {
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
            
        <p style={{color: "red"}}>PLEASE ENTER DETAILS ONLY WHICH ARE AVAILABLE</p>
            <Form.Group>
              <Form.Label>Semester</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>-</option>
                <option value="1">Odd</option>
                <option value="2">Even</option>
                <option value="3">Makeup</option>
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Label>Year</Form.Label>
              <Form.Control type="number" min="1" max="5" />
            </Form.Group>
            <Form.Group>
              <Form.Label>CGPA</Form.Label>
              <Form.Control type="number" min="1" max="5" />
            </Form.Group>
            <Form.Group>
              <Form.Label>SGPA</Form.Label>
              <Form.Control type="number" min="0" max="10" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Credits Earned</Form.Label>
              <Form.Control type="number" min="0" max="30 "/>
            </Form.Group>
          </Form>
  )
}

function AddSemesterModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Semester
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddSemesterForm/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="success">Save</Button>
        <Button onClick={props.onHide} variant="danger">Discard</Button>
      </Modal.Footer>
    </Modal>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props) {
  const [modalShow, setModalShow] = React.useState(false);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', flexGrow: 1, bgcolor: 'background.paper' }}>
        <Tabs 
        value={value} 
        onChange={handleChange} 
        variant="scrollable"
        scrollButtons
        aria-label="visible arrows tabs example"
        sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              '&.Mui-disabled': { opacity: 0.3 },
            },
          }}
        >
          <Tab label="Internships" {...a11yProps(0)} />
          <Tab label="Courses" {...a11yProps(1)} />
          <Tab label="Semester Details" {...a11yProps(2)} />
          <Tab label="Major Absence" {...a11yProps(3)} />
          <Tab label="InDisciplinary Activities" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Internship student = {props.student}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Courses/>
      </TabPanel>
      <TabPanel value={value} index={2}>
            <div  className="addButton">
                <Button variant="success" onClick={() => setModalShow(true)}>
                    Add Semester
                </Button>

                <AddSemesterModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
        <Form>
          <Form.Group>
            <Form.Label>Select Semester</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>
            <Button variant="success" type="submit" style={{marginTop: 10}}>
              <Link to="/student/:studentId/result/:resutId">
              Submit
              </Link>
            </Button>
        </Form>
        {/* <Result/> */}
      </TabPanel>
      <TabPanel value={value} index={3}>
          <Absence/>
      </TabPanel>
      <TabPanel value={value} index={4}>
          <Activity/>
      </TabPanel>
    </div>
  );
}