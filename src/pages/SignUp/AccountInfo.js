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
import Role from '../../components/RadioBox/Role'

export default function AccountInfo({ changeStep, step, handleChange }) {
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
        Account Information
      </Typography>
      <Box sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <TextField
              required={true}
              fullWidth
              name='email'
              label='Email'
              type='email'
              id='email'
              autoComplete='email'
              onChange={handleChange('email')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
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
          <Grid item xs={12} sm={6}>
            <TextField
              required={true}
              fullWidth
              name='re-password'
              label='Re-Password'
              type='password'
              id='re-password'
              autoComplete='new-password'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Role />
          </Grid>
        </Grid>
        <Grid container justifyContent='space-between'>
          <Grid item>
            <Button
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
              onClick={() => {
                changeStep('minus')
              }}
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
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
