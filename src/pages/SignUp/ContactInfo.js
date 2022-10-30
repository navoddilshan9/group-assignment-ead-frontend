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

export default function PersonalInfo({ changeStep }) {
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
        Contact Information
      </Typography>
      <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete='given-name'
              name='street1'
              required={true}
              fullWidth
              id='street1'
              label='Street 1'
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required={true}
              fullWidth
              id='street2'
              label='Street 2'
              name='lastName'
              autoComplete='family-name'
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required={true}
              fullWidth
              id='town'
              label='Town'
              name='town'
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required={true}
              fullWidth
              id='city'
              label='City'
              name='city'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required={true}
              fullWidth
              id='postalCode'
              label='Postal Code'
              name='postalCode'
            />
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
              Next
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
