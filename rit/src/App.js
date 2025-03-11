// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import AdmissionsPage from './components/AdmissionsPage';
import CoursesPage from './components/CoursesPage';
import AwardsPage from './components/AwardsPage';
import GalleryPage from './components/GalleryPage';
import PlacementsPage from './components/PlacementsPage';
import AchievementsPage from './components/AchievementsPage';

const App = () => {
  return (
    <>
      <Navbar />  {/* Navbar always visible */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/admissions/:category" element={<AdmissionsPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/awards" element={<AwardsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/placements" element={<PlacementsPage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
      </Routes>
      <Footer />  {/* Footer always visible */}
    </>
  );
};

export default App;
