import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Internship from './Tables/InternshipTable';
import Courses from './Tables/CoursesTable';
import Absence from './Tables/MajorAbsenceTable';
import Activity from './Tables/IndisciplinaryActivityTable';
import Result from './Tables/Result';
import {Form } from 'react-bootstrap';

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

export default function BasicTabs() {
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
        <Internship/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Courses/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Form>
          <Form.Label>Select Semester</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form>
        <Result/>
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