// src/components/AdmissionsPage.js
import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';

const AdmissionsPage = () => {
  const { category } = useParams();

  const renderContent = () => {
    switch (category) {
      case 'undergraduate':
        return (
          <Typography variant="body1">
            Explore our Undergraduate Programs. At RIT, we offer a variety of programs in Engineering, 
            Sciences, and Humanities. Our undergraduate courses are designed to provide the best foundation
            for your career.
          </Typography>
        );
      case 'postgraduate':
        return (
          <Typography variant="body1">
            Our Postgraduate programs focus on advanced studies and research in various fields of study. 
            Join us for a world-class education and gain access to numerous opportunities.
          </Typography>
        );
      case 'phd':
        return (
          <Typography variant="body1">
            RIT offers a highly prestigious PhD program in various disciplines. Our research-oriented faculty
            will guide you in making significant contributions to your field.
          </Typography>
        );
      default:
        return (
          <Typography variant="body1">
            Select an admission category to learn more.
          </Typography>
        );
    }
  };

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Admissions - {category.charAt(0).toUpperCase() + category.slice(1)}
      </Typography>
      {renderContent()}
    </Container>
  );
};

export default AdmissionsPage;
