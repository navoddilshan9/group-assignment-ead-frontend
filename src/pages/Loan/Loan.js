import { render } from '@testing-library/react';
import {useState , useEffect} from 'react';
import React from 'react';
import axios from 'axios';

const Loan = () => {
    const [loanData,setLoanData] = useState({});

    const getLoanDataByUserId = () =>{
        axios.get(`/loan/user/015`)
        .then((res)=>{
            console.log(res.data);
        })
        .catch((e)=>{
            console.log(e);
        })
    }
    useEffect (()=>{
        getLoanDataByUserId();
    },[]);
 return(
    <>
    <div>
    <h1>hi</h1>
    </div>
    </>
 )
} 

export default Loan;