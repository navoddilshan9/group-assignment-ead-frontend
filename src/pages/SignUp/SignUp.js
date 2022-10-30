import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import RadioBox from '../../components/RadioBox/Title'
import PersonalInfo from './PersonalInfo'
import ConatctInfo from './ContactInfo'
import AccountInfo from './AccountInfo'

function Copyright(props) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <Link color='inherit'>FIT19</Link> {new Date().getFullYear()}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const theme = createTheme()

export default function SignUp() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    // const body = {
    //   lastName,
    //   password,
    //   email,
    // }
    // axios.post()
  }
  const changeStep = (mode) => {
    if (mode === 'plus' && step != 3) {
      setStep((prevStep) => prevStep + 1)
    } else if (mode == 'minus' && step != 1) {
      setStep((prevStep) => prevStep - 1)
    } else {
      handleForm()
    }
  }
  const handleForm = () => {
    alert('asd')
  }
  return (
    <ThemeProvider theme={theme}>
      <Container component='main'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {step === 1 ? (
            <>
              <PersonalInfo changeStep={changeStep} />
            </>
          ) : step === 2 ? (
            <>
              <ConatctInfo changeStep={changeStep} />
            </>
          ) : step === 3 ? (
            <>
              <AccountInfo changeStep={changeStep} step={step} />
            </>
          ) : (
            <></>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  )
}
