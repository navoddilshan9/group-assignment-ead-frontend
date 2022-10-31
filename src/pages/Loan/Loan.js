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
import { styled } from "@mui/material/styles";
import { TableContainer } from "@mui/material";
import {
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
} from "@mui/material";

import LoanDataComponent from "../../components/LoanDataComponent/LoanDataComponent";
const Loan = () => {
  const [loanData, setLoanData] = useState([]);
  const [value, setValue] = React.useState("1");
  const [customerId, setCustomerId] = useState("");
  const [showTable, setShowTable] = useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCustomerIdChange = (event, newValue) => {
    console.log(event.target.value);
    setCustomerId(event.target.value);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const getLoanDataByUserId = () => {
    setShowTable(false);
    console.log(customerId);
    const uid = customerId;
    axios
      .get(`http://localhost:8080/loan/user/${customerId}`)
      .then((res) => {
        console.log(res.data);
        setLoanData(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const con = () => {
    console.log(loanData);
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
                  onChange={handleCustomerIdChange}
                />
              </div>
              <div align="center">
                <Box sx={{ m: 2 }}>
                  {" "}
                  <Button variant="contained" onClick={getLoanDataByUserId}>
                    Search
                  </Button>
                </Box>
              </div>

              <div style={{ height: 10 }} />
              <TableContainer component={Paper} hidden={showTable}>
                <Table
                  sx={{ minWidth: 650, backgroundColor: "#f3e5f5" }}
                  size="small"
                  aria-label="a dense table"
                >
                  <TableHead sx={{ backgroundColor: "#512da8" }}>
                    <TableRow>
                      <TableCell sx={{ color: "white" }}>LoanId</TableCell>
                      <TableCell align="center" sx={{ color: "white" }}>
                        Amount
                      </TableCell>
                      <TableCell align="center" sx={{ color: "white" }}>
                        Type
                      </TableCell>
                      <TableCell align="center" sx={{ color: "white" }}>
                        Installment
                      </TableCell>
                      <TableCell align="center" sx={{ color: "white" }}>
                        Status
                      </TableCell>
                      <TableCell align="center" sx={{ color: "white" }}>
                        Action
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {loanData != null ? (
                      loanData.map((loanDetails) => (
                        <LoanDataComponent
                          LoanId={loanDetails.loanId}
                          Amount={loanDetails.amount}
                          Type={loanDetails.type}
                          Installments={loanDetails.installments}
                          Status={loanDetails.loanStatus}
                          Description={loanDetails.description} 
                          GuaranteeNIC={loanDetails.guaranteeNIC} 
                          GuaranteeName={loanDetails.guaranteeName} 
                          InterestRate={loanDetails.interestRate} 
                          UserId={loanDetails.userId}
                        />
                      ))
                    ) : (
                      <></>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
};

export default Loan;
