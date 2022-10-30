import * as React from 'react'
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
import Gender from '../../components/RadioBox/Gender'

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

export default function PersonalInfo({ changeStep, step }) {
  const navigate = useNavigate()
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

  return (
    <>
      <Avatar sx={{ m: 1 }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component='h1' variant='h5'>
        Personal Information
      </Typography>
      <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <RadioBox />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete='given-name'
              name='initials'
              required={true}
              fullWidth
              id='initials'
              label='Initials'
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required={true}
              fullWidth
              id='lastName'
              label='Last Name'
              name='lastName'
              autoComplete='family-name'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required={true}
              fullWidth
              id='fullName'
              label='Full Name'
              name='fullName'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required={true}
              fullWidth
              id='otherName'
              label='Other Name'
              name='otherName'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required={true}
              fullWidth
              id='nic'
              label='NIC'
              name='nic'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required={true}
              fullWidth
              id='passport'
              label='Passport No'
              name='passport'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required={true}
              fullWidth
              id='birthday'
              label='Birthday'
              name='birthday'
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Gender />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required={true}
              fullWidth
              id='noDependents'
              label='No of Dependents'
              name='noDependents'
            />
          </Grid>
          {/* <Grid item xs={12}>
            <TextField
              required={true}
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='new-password'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required={true}
              fullWidth
              name='re-password'
              label='Re-Password'
              type='password'
              id='re-password'
              autoComplete='new-password'
            />
          </Grid> */}
        </Grid>
        {/* <Button
          type='submit'
          fullWidth
          variant='contained'
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button> */}
        <Grid container justifyContent='space-between'>
          <Grid item>
            <Button
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
              disabled
            >
              previous
            </Button>
          </Grid>
          <Grid item>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
              onClick={() => {
                changeStep('plus')
              }}
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
