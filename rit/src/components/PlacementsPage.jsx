// src/components/AwardsPage.js
import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const AwardsPage = () => {
  const awards = [
    {
      title: 'Best Engineering College',
      year: '2024',
      placements: '200+ Placements',
      image: require('../assets/rit1.jpg'), // Local image
    },
    {
      title: 'Top Placement College',
      year: '2023',
      placements: '150+ Placements',
      image: require('../assets/rit2.jpg'), // Local image
    },
    {
      title: 'Excellence in Research',
      year: '2022',
      placements: '50+ Placements',
      image: require('../assets/rit3.jpg'), // Local image
    },
    {
      title: 'Best Innovation Award',
      year: '2021',
      placements: '100+ Placements',
      image: require('../assets/rit4.jpg'), // Local image
    },
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
              <CardMedia
                component="img"
                alt={award.title}
                height="140"
                image={award.image}
                title={award.title}
              />
              <CardContent>
                <Typography variant="h5">{award.title}</Typography>
                <Typography variant="body2" color="textSecondary">{award.year}</Typography>
                <Typography variant="body2" color="textPrimary">{award.placements}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AwardsPage;
