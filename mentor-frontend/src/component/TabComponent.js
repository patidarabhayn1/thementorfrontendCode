import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Table from './TableComponent';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

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
        <Box sx={{ p: 3 }}>
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
          <Tab label="InDisciplinary Activities" {...a11yProps(2)} />
          <Tab label="Major Absence" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
          1
        <Table/>
      </TabPanel>
      <TabPanel value={value} index={1}>
          2
      <Table/>
      </TabPanel>
      <TabPanel value={value} index={2}>
          3
      <Table/>
      </TabPanel>
      <TabPanel value={value} index={3}>
          4
      <Table/>
      </TabPanel>
    </div>
  );
}