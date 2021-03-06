import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import HeaderDrawer from './HeaderDrawer'

export default function Header() {
  const [drawerOpened, setDrawerOpened] = useState(false)

  const toggleDrawer = (booleanValue) => () => {
    setDrawerOpened(booleanValue)
  }

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Menu"
            onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" color="inherit">
            News
          </Typography>
          <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
      <HeaderDrawer drawerOpened={drawerOpened} toggleDrawer={toggleDrawer} />
    </div>
  )
}
