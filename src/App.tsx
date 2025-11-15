import { useState, useEffect } from 'react'
import Header from './components/Header'
import Statistics from './components/Statistics'
import Hosts from './components/Hosts'
import Tasks from './components/Tasks'
import Evaluation from './components/Evaluation'
import DataSection from './components/DataSection'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [currentSection, setCurrentSection] = useState('home')

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1)
      setCurrentSection(hash || 'home')
    }

    // Set initial section based on URL hash
    handleHashChange()

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange)
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  const renderContent = () => {
    switch (currentSection) {
      case 'dataset':
        return <DataSection />
      case 'participants':
        return <Statistics />
      case 'hosts':
        return <Hosts />
      case 'dates':
        return <Evaluation />
      case 'submissions':
        return (
          <main className="main-content">
            <h1>Submissions</h1>
            
            <p style={{ color: '#dc2626', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '2rem' }}>
              Submit it to D2L dropbox under assignments by December 1, 2025
            </p>
            
            <h2>Evaluation Methodology</h2>
            <p>Submissions will be evaluated using comprehensive metrics to ensure fair and thorough assessment of model performance.</p>
            
            <h3>Evaluation Metrics</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', margin: '2rem 0' }}>
              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
                <h3 style={{ color: '#28a745', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Accuracy</h3>
                <p style={{ color: '#6c757d', fontSize: '0.9rem' }}>Overall classification accuracy across all instrument classes</p>
              </div>
              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
                <h3 style={{ color: '#28a745', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Macro F1-Score</h3>
                <p style={{ color: '#6c757d', fontSize: '0.9rem' }}>Primary evaluation metric - harmonic mean of precision and recall averaged across all classes</p>
              </div>
              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
                <h3 style={{ color: '#28a745', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Per-class Precision</h3>
                <p style={{ color: '#6c757d', fontSize: '0.9rem' }}>Accuracy of positive predictions for each instrument class</p>
              </div>
              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
                <h3 style={{ color: '#28a745', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Per-class Recall</h3>
                <p style={{ color: '#6c757d', fontSize: '0.9rem' }}>Ability to find all instances of each instrument class</p>
              </div>
              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
                <h3 style={{ color: '#28a745', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Confusion Matrix Analysis</h3>
                <p style={{ color: '#6c757d', fontSize: '0.9rem' }}>Detailed breakdown of classification performance across all classes</p>
              </div>
              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
                <h3 style={{ color: '#28a745', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Inference Time (Track 2)</h3>
                <p style={{ color: '#6c757d', fontSize: '0.9rem' }}>Speed metric for real-time classification (&lt;10ms per image target)</p>
              </div>
            </div>
          </main>
        )
      case 'tasks':
        return <Tasks />
      case 'conduct':
        return (
          <main className="main-content">
            <h1>Code of Conduct</h1>
            <p>All participants of this classroom challenge are expected to:</p>
            <ul>
              <li>Uphold academic integrity - no plagiarism; submit only original work</li>
              <li>Properly follow all data usage guidelines</li>
              <li>Respect confidentiality and avoid sharing or redistributing the dataset</li>
              <li>Use models and results responsibly, strictly for research and non-clinical purposes</li>
            </ul>
            <p><strong>Any violation of this Code of Conduct may result in removal or disqualification from the challenge.</strong></p>
          </main>
        )
      case 'contact':
        return (
          <main className="main-content">
            <h1>Contact</h1>
            <h2>Challenge Organizer</h2>
            <p><strong>Dr. Debesh Jha</strong></p>
            <p>Assistant Professor (Tenure Track)</p>
            <p>University of South Dakota</p>
            <p>Email: <a href="mailto:debesh.jha@usd.edu">debesh.jha@usd.edu</a></p>
            <h2>Questions</h2>
            <p>For any questions about the challenges, please contact <a href="mailto:debesh.jha@usd.edu">debesh.jha@usd.edu</a></p>
          </main>
        )
      default:
        return (
          <main className="main-content">
        <h1 className="challenge-title">Endoscopic Instrument Classification Challenge (EICC 2025)</h1>

        <h2>Overview</h2>
        <p>Modern gastrointestinal (GI) endoscopy increasingly relies on artificial intelligence to assist clinicians during screening, diagnosis, and therapeutic interventions. While tremendous progress has been made in polyp detection and segmentation, instrument classification remains an underexplored yet crucial task—especially for workflow optimization, scene understanding, automated reporting, and robotic assistance.</p>
        
        <p>This challenge provides a curated dataset of GI endoscopic frames categorized into seven clinically relevant classes: <strong>Biopsy Forceps, Clip Applier, Injection Needle, Snare, Spray Catheter, No Instrument, and Other Instruments</strong>. These categories capture the most frequent tools used in colonoscopy and allow participants to build models capable of recognizing fine-grained instrument types under challenging visual conditions.</p>

        <h2>Challenge Objective</h2>
        <p>The primary goal is to accurately classify the instrument (or lack thereof) present in each endoscopic image. Participants are encouraged to explore a wide range of AI techniques, including:</p>
        <ul>
          <li>CNN-based image classifiers (ResNet, EfficientNet, ConvNeXt)</li>
          <li>Vision Transformers (ViT, Swin, MambaVision)</li>
          <li>Multi-scale or hierarchical learning</li>
          <li>Lightweight models suitable for real-time deployment</li>
          <li>Self-supervised or foundation-model-based fine-tuning</li>
          <li>Robustness techniques for low-quality or noisy scenes</li>
        </ul>

        <h2>Who Should Participate?</h2>
        <p>This challenge is ideal for:</p>
        <ul>
          <li>Students learning medical computer vision (For now, only students)</li>
          <li>AI/ML researchers</li>
          <li>Hospitals and clinical AI teams</li>
          <li>Industry partners working on endoscopic AI</li>
          <li>Startups in digital health/robotics</li>
          <li>Academic labs focusing on surgical/medical imaging</li>
        </ul>

        <h2>Research Impact</h2>
        <p>Accurate instrument classification opens doors to several downstream applications:</p>
        <ul>
          <li>Automated surgical workflow recognition</li>
          <li>Real-time tool tracking and collision avoidance</li>
          <li>Context-aware clinical decision support</li>
          <li>Automated report generation</li>
          <li>Training and simulation systems</li>
          <li>Robotic and semi-autonomous endoscopic systems</li>
        </ul>

        <p>This challenge aims to encourage the development of robust, generalizable AI models that work in real endoscopy suites—not just controlled lab settings.</p>
          </main>
        )
    }
  }

  return (
    <div className="app">
      <Header />
      {renderContent()}
      <Footer />
    </div>
  )
}

export default App