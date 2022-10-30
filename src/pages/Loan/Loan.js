import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TextField from "@mui/material/TextField";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
const Loan = () => {
  const [loanData, setLoanData] = useState({});
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const getLoanDataByUserId = (id) => {
    const uid = id;
    axios
      .get(`/loan/user/${uid}`)
      .then((res) => {
        console.log(res.data);
        setLoanData(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value} centered>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Add Loan" value="1" />
              <Tab label="Search Loan" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">Item One</TabPanel>
          <TabPanel value="2">
            <h1>Search Loan</h1>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
            </Box>
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
};

export default Loan;
