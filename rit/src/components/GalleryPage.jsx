// src/components/GalleryPage.js
import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';

const GalleryPage = () => {
  const images = [
    '/assets/gallery1.jpg',
    '/assets/gallery2.jpg',
    '/assets/gallery3.jpg',
    '/assets/gallery4.jpg',
  ];

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        College Gallery
      </Typography>
      <Grid container spacing={3}>
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box
              component="img"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
              }}
              alt={`Gallery Image ${index + 1}`}
              src={image}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default GalleryPage;
