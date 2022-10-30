import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { margin } from "@mui/system";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from '@mui/material/styles';


import LoanDataComponent from "../../components/LoanDataComponent/LoanDataComponent";
const Loan = () => {
  const [loanData, setLoanData] = useState({});
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
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
            <div align="center">
              <h1>Search Loan</h1>
              <div align="center">
                <TextField
                  id="outlined-basic"
                  label="Enter Customer Id Here."
                  variant="outlined"
                />
              </div>
              <div align="center">
                <Box sx={{ m: 2 }}>
                  {" "}
                  <Button variant="contained">Search</Button>
                </Box>
              </div>
              <div align="center">
                <Grid container spacing={2}>
                  <Grid item xs={2}>
                    <Item align="center">
                      <h5>LoanId</h5>
                    </Item>
                  </Grid>
                  <Grid item xs={2}>
                    <Item align="center">
                      <h5>Amount</h5>
                    </Item>
                  </Grid>
                  <Grid item xs={2}>
                    <Item align="center">
                      <h5>Type</h5>
                    </Item>
                  </Grid>
                  <Grid item xs={2}>
                    <Item align="center">
                      <h5>Install</h5>
                    </Item>
                  </Grid>
                  <Grid item xs={2}>
                    <Item align="center">
                      <h5>Status</h5>
                    </Item>
                  </Grid>
                  <Grid item xs={2}>
                    <Item align="center">
                      <h5>Actions</h5>
                    </Item>
                  </Grid>
                  <Grid item xs={12}>
                    <Item align="center">
                    <LoanDataComponent/>
                    </Item>
                  </Grid>
                </Grid>
              </div>
            </div>
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
};

export default Loan;
