// src/components/AwardsPage.js
import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

const AwardsPage = () => {
  const awards = [
    { title: 'Best Engineering College', year: '2024' },
    { title: 'Top Placement College', year: '2023' },
    { title: 'Excellence in Research', year: '2022' },
    { title: 'Best Innovation Award', year: '2021' },
  ];

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Awards & Recognitions
      </Typography>
      <Grid container spacing={3}>
        {awards.map((award, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5">{award.title}</Typography>
                <Typography variant="body2" color="textSecondary">{award.year}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AwardsPage;
