import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom'
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { Slide, useScrollTrigger } from '@mui/material'

import HomePage from '../../pages/Home/HomePage'
import SignIn from '../../pages/SignIn/SignIn'
import SignUp from '../../pages/SignUp/SignUp'
import ForgetPassword from '../../pages/ForgetPassword/ForgetPassword'
import Users from '../../pages/Users/Users'
import Account from '../../pages/User/User'
import Profile from '../../pages/Profile/Profile'
import Footer from '../Footer/Footer'

const drawerWidth = 240

function DrawerAppBar(props) {
  const { window } = props
  const navigate = useNavigate()
  const [mobileOpen, setMobileOpen] = useState(false)

  const trigger = useScrollTrigger()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant='h6' sx={{ my: 2 }}>
        {/* MUI */}
      </Typography>
      <Divider />
      <List>
        <ListItem>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText primary='Loan' />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText primary='Users' />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText primary='Login' />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText primary='Profile' />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <Box>
      <Slide appear={false} direction='down' in={!trigger}>
        <AppBar
          component='nav'
          sx={{
            background: 'rgba(0,0,0,0.6)',
          }}
        >
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant='h6'
              component='div'
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              {/* MUI */}
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button
                sx={{
                  color: '#fff',
                  marginRight: '10px',
                  fontWeight: 'bold',
                }}
              >
                Loan
              </Button>
              <Button
                sx={{
                  color: '#fff',
                  marginRight: '10px',
                  fontWeight: 'bold',
                }}
                onClick={() => {
                  navigate('/users')
                }}
              >
                Users
              </Button>
              <Button
                sx={{
                  color: '#fff',
                  marginRight: '10px',
                  fontWeight: 'bold',
                }}
                onClick={() => {
                  navigate('/login')
                }}
              >
                Login
              </Button>
              <Button
                sx={{
                  color: '#fff',
                  marginRight: '10px',
                  fontWeight: 'bold',
                }}
                onClick={() => {
                  navigate('/profile')
                }}
              >
                <Avatar sx={{ bgcolor: '#2399C2' }}>
                  <AccountCircleIcon />
                </Avatar>
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Slide>

      <Box component='nav'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            backgroundColor: '#282D32',
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box sx={{ width: '50%', margin: 'auto', marginTop: '5%' }}>
        <Toolbar />
        <Routes>
          <Route exact path='/' element={<HomePage />}></Route>
          <Route exact path='/login' element={<SignIn />}></Route>
          <Route exact path='/register' element={<SignUp />}></Route>
          <Route
            exact
            path='/forgetpassword'
            element={<ForgetPassword />}
          ></Route>
          <Route exact path='/users' element={<Users />}></Route>
          <Route exact path='/account/:id' element={<Account />}></Route>
          <Route exact path='/profile' element={<Profile />}></Route>
        </Routes>
      </Box>
      {/* <Footer /> */}
    </Box>
  )
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
}

export default DrawerAppBar
