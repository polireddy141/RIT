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
        Address: RIT Rayadu Institutions of Technologies, XYZ Street, City.
        <br />
        Phone: +123456789
        <br />
        Email: <Link href="mailto:info@rit.edu">info@rit.edu</Link>
      </Typography>
    </Container>
  );
};

export default ContactPage;
