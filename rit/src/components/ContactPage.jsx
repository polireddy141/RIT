// src/components/ContactPage.js
import React from 'react';
import { Container, Typography, Link } from '@mui/material';

const ContactPage = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1">
        Address: RIT Rayadu Institutions of Technologies, James Street, RYC City.
        <br />
        Phone: +987654321
        <br />
        Email: <Link href="mailto:info@rit.edu">info@rit.edu</Link>
      </Typography>
    </Container>
  );
};

export default ContactPage;
