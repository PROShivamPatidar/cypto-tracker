import * as React from 'react';
import {useState} from 'react';
import Drawer from '@mui/material/Drawer';
import { IconButton } from '@mui/material';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import { Link } from "react-router-dom";





export default function SwipeableTemporaryDrawer() {
  const [open, setOpen] = useState(false);


  return (
    <div>
          <IconButton onClick={()=>setOpen(true)}><MenuTwoToneIcon  className='link'/></IconButton>
          <Drawer
            anchor={"right"}
            open={open}
            onClose={()=>setOpen(false)}>

              <div className='drawer-div'>
              <Link to="/"><p className="link">Home</p></Link>
        <Link to="/compare"><p className="link">Compare</p></Link>
        <Link to="/dashboard">
          <p class="link">
            <div class="button-wrapper">
              <p>Dashboard</p>
            </div>
          </p>
        </Link>
              </div>
          </Drawer>
        
    </div>
  );
}