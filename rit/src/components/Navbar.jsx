
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, IconButton, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, List, ListItem } from '@mui/material';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);  // To control dropdown menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));  // Check if screen is mobile size

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);  // Open the dropdown
  const handleMenuClose = () => setAnchorEl(null);  // Close the dropdown
  const handleMobileMenuToggle = () => setMobileMenuOpen(!mobileMenuOpen);  // Toggle mobile menu

  
  const renderAdmissionsMenu = () => (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
    >
      <MenuItem component={Link} to="/admissions/undergraduate" onClick={handleMenuClose}>Undergraduate</MenuItem>
      <MenuItem component={Link} to="/admissions/postgraduate" onClick={handleMenuClose}>Postgraduate</MenuItem>
      <MenuItem component={Link} to="/admissions/phd" onClick={handleMenuClose}>PhD</MenuItem>
    </Menu>
  );

  
  const renderCoursesMenu = () => (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
    >
      <MenuItem component={Link} to="/courses" onClick={handleMenuClose}>Engineering</MenuItem>
      <MenuItem component={Link} to="/courses" onClick={handleMenuClose}>Management</MenuItem>
      <MenuItem component={Link} to="/courses" onClick={handleMenuClose}>Science</MenuItem>
      <MenuItem component={Link} to="/courses" onClick={handleMenuClose}>Arts</MenuItem>
    </Menu>
  );

  
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          RIT Rayadu Institutions of Technologies
        </Typography>

        
        {!isMobile ? (
          <>
            <Button component={Link} to="/" color="inherit">Home</Button>
            <Button component={Link} to="/about" color="inherit">About</Button>
            <Button component={Link} to="/contact" color="inherit">Contact</Button>
            
            
            <Button 
              color="inherit" 
              onClick={handleMenuOpen}
            >
              Admissions
            </Button>
            {renderAdmissionsMenu()}

            
            <Button 
              color="inherit" 
              onClick={handleMenuOpen}
            >
              Courses
            </Button>
            {renderCoursesMenu()}

            <Button component={Link} to="/awards" color="inherit">Awards</Button>
            <Button component={Link} to="/gallery" color="inherit">Gallery</Button>
            <Button component={Link} to="/placements" color="inherit">Placements</Button>
            <Button component={Link} to="/achievements" color="inherit">Achievements</Button>
          </>
        ) : (
          
          <>
            <IconButton color="inherit" onClick={handleMobileMenuToggle}>
              <MenuIcon />
            </IconButton>
            <Drawer open={mobileMenuOpen} onClose={handleMobileMenuToggle}>
              <List>
                <ListItem button component={Link} to="/" onClick={handleMobileMenuToggle}>Home</ListItem>
                <ListItem button component={Link} to="/about" onClick={handleMobileMenuToggle}>About</ListItem>
                <ListItem button component={Link} to="/contact" onClick={handleMobileMenuToggle}>Contact</ListItem>
                <ListItem button onClick={handleMenuOpen}>Admissions</ListItem>
                <ListItem button onClick={handleMenuOpen}>Courses</ListItem>
                <ListItem button component={Link} to="/awards" onClick={handleMobileMenuToggle}>Awards</ListItem>
                <ListItem button component={Link} to="/gallery" onClick={handleMobileMenuToggle}>Gallery</ListItem>
                <ListItem button component={Link} to="/placements" onClick={handleMobileMenuToggle}>Placements</ListItem>
                <ListItem button component={Link} to="/achievements" onClick={handleMobileMenuToggle}>Achievements</ListItem>
              </List>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
