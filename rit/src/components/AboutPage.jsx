import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const AboutPage = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        About RIT Rayadu Institutions of Technologies
      </Typography>
      
      <Typography variant="body1" paragraph>
        RIT (Rayadu Institutions of Technologies) is a prestigious institution known for offering a wide range of academic programs, cutting-edge research opportunities, and a focus on holistic student development. With over two decades of educational excellence, RIT provides an environment that fosters both intellectual and personal growth.
      </Typography>
      
      <Typography variant="body1" paragraph>
        Our mission is to equip students with the skills, knowledge, and mindset needed to excel in the global technology-driven world. By offering specialized programs in Engineering, Computer Science, Business, and more, RIT helps students harness their potential and achieve their career aspirations.
      </Typography>
      
      <Typography variant="h5" gutterBottom>
        Key Highlights of RIT:
      </Typography>
      <List>
        <ListItem>
          <ListItemText 
            primary="World-Class Infrastructure" 
            secondary="State-of-the-art classrooms, laboratories, and hostel facilities designed for a conducive learning environment." 
          />
        </ListItem>
        <ListItem>
          <ListItemText 
            primary="Experienced Faculty" 
            secondary="Our highly qualified and industry-experienced faculty members provide personalized attention and mentorship to students." 
          />
        </ListItem>
        <ListItem>
          <ListItemText 
            primary="Global Exposure" 
            secondary="We provide ample opportunities for international collaborations, internships, and exchange programs with leading institutions worldwide." 
          />
        </ListItem>
        <ListItem>
          <ListItemText 
            primary="Research and Innovation" 
            secondary="Our students and faculty engage in impactful research, contributing to advancements in technology and science." 
          />
        </ListItem>
      </List>

      <Typography variant="h5" gutterBottom>
        Example Programs at RIT:
      </Typography>
      <Typography variant="body1" paragraph>
        Some of the popular programs offered at RIT include:
      </Typography>
      <List>
        <ListItem>
          <ListItemText 
            primary="Bachelor of Technology (B.Tech) in Computer Science" 
            secondary="A four-year program focused on software development, artificial intelligence, and cybersecurity." 
          />
        </ListItem>
        <ListItem>
          <ListItemText 
            primary="Master of Business Administration (MBA)" 
            secondary="A two-year program designed to develop future leaders with a strong foundation in business strategy and management." 
          />
        </ListItem>
        <ListItem>
          <ListItemText 
            primary="PhD in Electrical Engineering" 
            secondary="A research-driven program aimed at advancing knowledge in areas like power systems, renewable energy, and smart grids." 
          />
        </ListItem>
      </List>

      <Typography variant="body1" paragraph>
        At RIT, we pride ourselves on creating a learning environment that prepares students not only for their careers but also for responsible citizenship in a rapidly changing world.
      </Typography>
    </Container>
  );
};

export default AboutPage;
