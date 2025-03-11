// src/components/PlacementsPage.js
import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

const PlacementsPage = () => {
  const companies = [
    { name: 'Company A', position: 'Software Engineer', year: '2024' },
    { name: 'Company B', position: 'Data Scientist', year: '2023' },
    { name: 'Company C', position: 'HR Manager', year: '2022' },
    { name: 'Company D', position: 'Business Analyst', year: '2021' },
  ];

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Campus Placements
      </Typography>
      <Grid container spacing={3}>
        {companies.map((company, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5">{company.name}</Typography>
                <Typography variant="body2" color="textSecondary">{company.position}</Typography>
                <Typography variant="body2" color="textSecondary">{company.year}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PlacementsPage;
