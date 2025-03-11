// src/components/CoursesPage.js
import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

const CoursesPage = () => {
  const courses = [
    { title: 'Engineering', description: 'B.Tech in various branches of engineering', image: '/assets/engineering.jpg' },
    { title: 'Management', description: 'MBA in Business Administration', image: '/assets/management.jpg' },
    { title: 'Science', description: 'B.Sc & M.Sc in various science fields', image: '/assets/science.jpg' },
    { title: 'Arts', description: 'BA & MA in Arts', image: '/assets/arts.jpg' },
  ];

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Courses Offered
      </Typography>
      <Grid container spacing={3}>
        {courses.map((course, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardMedia
                component="img"
                alt={course.title}
                height="140"
                image={course.image}
              />
              <CardContent>
                <Typography variant="h5">{course.title}</Typography>
                <Typography variant="body2" color="textSecondary">{course.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CoursesPage;
