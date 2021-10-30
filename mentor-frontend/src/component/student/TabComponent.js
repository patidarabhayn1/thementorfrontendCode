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
import LoadingComponent from '../LoadingComponent';
import SemesterComponent from '../Tables/semesterList';

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

function LoadResult(props){
    if(props.result.result != null){
      return(
          <SemesterComponent result = {props.result} student = {props.student}/>
      );
    }
    else if (props.result.errMess) {
      return (
        <h2>{props.result.errMess}</h2>
      );
    }
    else {
      return (
        <LoadingComponent />
      );
    }
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
        <Internship 
            student = {props.student} 
            addInternship = {props.addInternship} 
            deleteInternship = {props.deleteInternship}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Courses 
          student = {props.student} 
          addCourse = {props.addCourse}
          deleteCourse = {props.deleteCourse}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
            <LoadResult 
            result = {props.result}
            student = {props.student} 
            />
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