// src/components/AboutPage.js
import React from 'react';
import { Container, Typography } from '@mui/material';

const AboutPage = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        About RIT Rayadu Institutions of Technologies
      </Typography>
      <Typography variant="body1">
        RIT is a prominent institution, providing high-quality education and a nurturing environment
        for students. With state-of-the-art facilities and experienced faculty, we prepare our students
        for global challenges.
      </Typography>
    </Container>
  );
};

export default AboutPage;
