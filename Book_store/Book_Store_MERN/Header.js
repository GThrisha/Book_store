import React, { useState } from 'react';
import {AppBar,Tabs,Tab, Toolbar,Typography}  from '@mui/material';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [value, setValue] = useState();
  return (
    <div>
      <AppBar sx= {{ backgroundColor:'#232F3D' }} position="sticky">
        <Toolbar>
          <NavLink to="/" style={{ color:"white"}}> 
        <Typography>
            <LibraryBooksOutlinedIcon/>
        </Typography>
        </NavLink>
        <Tabs 
         sx = {{m1 : 'auto'}}
         textColor="inherit" 
         indicatorColor="secondary" 
         value={value} 
         onChange={(e,val)=>setValue(val)}
         >
            <Tab LinkComponent={NavLink} to="/add" label='Add Product'/>
            <Tab LinkComponent={NavLink} to="/books" label='Books'/>
            <Tab LinkComponent={NavLink} to="/about" label='About Us'/>
          </Tabs>
          <Tabs 
           sx = {{ml : 'auto'}}
           textColor="inherit" 
           indicatorColor="secondary" 
           value={value} 
           onChange={(e,val)=>setValue(val)}>  
            <Tab  LinkComponent={NavLink} to="/login" label='Login'/>
            <Tab LinkComponent={NavLink} to="/signup" label='Signup'/>
            
        </Tabs>
        </Toolbar>
         
      </AppBar>
    </div>
  );
};

export default Header;
