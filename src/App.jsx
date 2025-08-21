import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import './App.css';
import About from './components/About';
import OurServices from './components/Services';
import NurserySection from './components/NurserySection';
import PhotoGallery from './components/PhotoGallery';
import BlogNewsSection from './components/blog/BlogNewsSection';
import FAQ from './components/FAQ';
import ContactUs from './components/contact/ContactUs';
import Admissions from './components/admissions/Admissions';
import HomeLearningSection from './components/HomeLearningSection';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <NurserySection/>
      <PhotoGallery/>
      <Admissions />
      <BlogNewsSection />
      <FAQ />
        <HomeLearningSection />
      <ContactUs />
    
    <Footer />
    
    </div>
  );
}

export default App;
