import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
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

import { Slide, useScrollTrigger } from '@mui/material'

import HomePage from '../../pages/Home/HomePage'

const drawerWidth = 240

function DrawerAppBar(props) {
  const { window } = props
  const [mobileOpen, setMobileOpen] = useState(false)
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  const trigger = useScrollTrigger()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
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
            <ListItemText primary='Item 01' />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText primary='Item 02' />
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
            background: 'linear-gradient(90deg,#23bacc 0,#238ebf)',
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
                Item 01
              </Button>
              <Button
                sx={{
                  color: '#fff',
                  marginRight: '10px',
                  fontWeight: 'bold',
                }}
              >
                Item 02
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
      <Box>
        <Toolbar />
        <Router>
          <Routes>
            <Route exact path='/' element={<HomePage />}></Route>
          </Routes>
        </Router>
      </Box>
    </Box>
  )
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
}

export default DrawerAppBar
