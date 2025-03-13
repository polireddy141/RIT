import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';

const HomePage = () => {
  return (
    <Container>
      {/* Welcome Text & Campus Image */}
      <Grid container spacing={2} sx={{ marginBottom: 4 }}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" gutterBottom>
            Welcome to RIT Rayudu Institutions of Technologies
          </Typography>
          <Typography variant="body1">
            RIT is a leading institution offering world-class education in various fields.
            Explore our programs and become a part of our diverse community.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            component="img"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: 2,
            }}
            alt="RIT Campus"
            src="./campus.jpg"  // Replace with your actual image path in local storage
          />
        </Grid>
      </Grid>

      {/* Two Rows of Images (Campus Placement, Fest, etc.) */}
      <Typography variant="h5" gutterBottom>
        Explore RIT through our Events & Placements
      </Typography>
      
      {/* First Row of Images (e.g., Campus Placement Images) */}
      <Grid container spacing={3} sx={{ marginBottom: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Box
            component="img"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: 2,
            }}
            alt="College Fest"
            src="./img1.jpg"  // Update the path
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box
            component="img"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: 2,
            }}
            alt="Campus Placement 2"
            src="./img2.jpg"  // Update the path
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box
            component="img"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: 2,
            }}
            alt="Campus Placement 3"
            src="./img3.jpg"  // Update the path
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box
            component="img"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: 2,
            }}
            alt="Campus Placement 4"
            src="./img4.jpg"  // Update the path
          />
        </Grid>
      </Grid>

      {/* Second Row of Images (e.g., Festival Images) */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Box
            component="img"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: 2,
            }}
            alt="Festival 1"
            src="./img5.jpg"  // Update the path
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box
            component="img"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: 2,
            }}
            alt="Festival 2"
            src="./img6.jpg"  // Update the path
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box
            component="img"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: 2,
            }}
            alt="Festival 3"
            src="./img7.jpg"  // Update the path
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box
            component="img"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: 2,
            }}
            alt="Festival 4"
            src="./img8.jpg"  // Update the path
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
