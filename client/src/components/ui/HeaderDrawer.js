import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import { Typography } from '@material-ui/core'

const HeaderDrawer = ({ toggleDrawer, drawerOpened }) => {
  return (
    <Drawer anchor="left" open={drawerOpened} onClose={toggleDrawer(false)}>
      <div onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
        <ul>
          <Typography variant="h6">Links</Typography>
          <li>Button1</li>
          <li>Button2</li>
          <li>Button3</li>
        </ul>
      </div>
    </Drawer>
  )
}

export default HeaderDrawer
