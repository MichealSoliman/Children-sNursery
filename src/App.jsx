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

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <NurserySection/>
      <PhotoGallery/>
      <BlogNewsSection />
      <FAQ />
    <Footer />
    <img src="" alt="" />
    </div>
  );
}

export default App;
