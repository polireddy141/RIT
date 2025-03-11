// src/components/Footer.js
import React from 'react';
import { Container, Grid, Typography, Link } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <Container>
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">© 2025 RIT Rayadu Institutions of Technologies</Typography>
        </Grid>
        <Grid item xs={12} sm={6} display="flex" justifyContent="flex-end">
          <Link href="#" target="_blank" color="inherit"><Facebook /></Link>
          <Link href="#" target="_blank" color="inherit"><Twitter /></Link>
          <Link href="#" target="_blank" color="inherit"><LinkedIn /></Link>
          <Link href="#" target="_blank" color="inherit"><Instagram /></Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
