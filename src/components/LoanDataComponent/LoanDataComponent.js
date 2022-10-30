import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
// import { styled } from '@mui/material/styles';

const LoanDataComponent = (LoanId,Amount,Type,Installments,Status) => {

    // const Item = styled(Paper)(({ theme }) => ({
    //     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    //     ...theme.typography.body2,
    //     padding: theme.spacing(1),
    //     textAlign: 'center',
    //     color: theme.palette.text.secondary,
    //   }));
  return (
    <>
      <Grid container spacing={2}>
        {/* <Grid item xs={2}>
          <div>{LoanId}</div>
        </Grid>
        <Grid item xs={2}>
          <Item>{Amount}</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>{Type}</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>{Installments}</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>{Status}</Item>
        </Grid>
        <Grid item xs={2}>
          <Item><Button variant="outlined">Update</Button><Button variant="outlined">Delete</Button></Item>
        </Grid> */}
      </Grid>
    </>
  );
};

export default LoanDataComponent;
