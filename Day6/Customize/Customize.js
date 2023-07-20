import React from 'react';
import './Customize.css';
import Navbar from '../Navbar';
import Footer from '../footer/footer';

const CustomizedProgramsPage = () => {
  return (
    <>
    <Navbar/>
    <div className="customized-programs-page-container">
      <h1>Customized Yoga Programs</h1>

      <div className="program-card">
        <h2 className='custom'>Flexibility Program</h2>
        <p>Improve your flexibility with this customized yoga program.</p>
        <ul>
          <li>Duration: 4 weeks</li>
          <li>Focus areas: Hamstrings, shoulders, and hips</li>
          <li>Recommended classes: Gentle Flow, Yin Yoga</li>
        </ul>
        <a href="/customized-programs/flexibility" target="_blank" rel="noopener noreferrer">
          Learn More
        </a>
      </div>

      <div className="program-card">
        <h2 className='custom'>Stress Reduction Program</h2>
        <p>Reduce stress and find inner peace with this customized yoga program.</p>
        <ul>
          <li>Duration: 8 weeks</li>
          <li>Focus areas: Relaxation, deep breathing, and meditation</li>
          <li>Recommended classes: Restorative Yoga, Yoga Nidra</li>
        </ul>
        <a href="/customized-programs/stress-reduction" target="_blank" rel="noopener noreferrer">
          Learn More
        </a>
      </div>

      <div className="program-card">
        <h2 className='custom'>Stress Reduction Program</h2>
        <p>Reduce stress and find inner peace with this customized yoga program.</p>
        <ul>
          <li>Duration: 8 weeks</li>
          <li>Focus areas: Relaxation, deep breathing, and meditation</li>
          <li>Recommended classes: Restorative Yoga, Yoga Nidra</li>
        </ul>
        <a href="/customized-programs/stress-reduction" target="_blank" rel="noopener noreferrer">
          Learn More
        </a>
      </div>
      
      {/* Add more program cards as needed */}
    </div>
    <Footer/>
    </>
  );
};

export default CustomizedProgramsPage;
