// src/components/HomePage.js
import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import { useHistory } from 'react-router-dom';

const HomePage = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" gutterBottom>
            Welcome to RIT Rayadu Institutions of Technologies
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
            }}
            alt="RIT Campus"
            src="/assets/campus.jpg"  // Replace with your actual image path
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
