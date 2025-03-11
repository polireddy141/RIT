// src/components/AchievementsPage.js
import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

const AchievementsPage = () => {
  const achievements = [
    { title: '100% Placement Record', year: '2024' },
    { title: 'Top Rank in University', year: '2023' },
    { title: 'Research Innovation Award', year: '2022' },
    { title: 'Best Teaching Faculty Award', year: '2021' },
  ];

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Achievements
      </Typography>
      <Grid container spacing={3}>
        {achievements.map((achievement, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5">{achievement.title}</Typography>
                <Typography variant="body2" color="textSecondary">{achievement.year}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AchievementsPage;
