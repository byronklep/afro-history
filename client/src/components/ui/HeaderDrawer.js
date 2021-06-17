import React from 'react'
import Drawer from '@material-ui/core/Drawer'

const HeaderDrawer = ({ toggleDrawer, drawerOpened }) => {
  return (
    <Drawer anchor="left" open={drawerOpened} onClose={toggleDrawer(false)}>
      <div onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
        <ul>
          <li>History</li>
          <li>News</li>
          <li>People</li>
          <li>Culture</li>
          <li>About</li>
        </ul>
      </div>
    </Drawer>
  )
}

export default HeaderDrawer
