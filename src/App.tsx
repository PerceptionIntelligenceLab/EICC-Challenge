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
              Submit to the D2L dropbox under assignments by the D2L deadline.
            </p>

            <h2>Deliverables</h2>
            <p>Participants should submit the following:</p>
            <ol style={{ marginLeft: '1.5rem', marginTop: '1rem', lineHeight: '1.8' }}>
              <li>Model predictions for the evaluation dataset</li>
              <li>Code repository containing the training and inference pipeline</li>
              <li>Technical report (1 to 2 pages) describing the model architecture, training strategy, performance results, and system performance analysis</li>
            </ol>

            <h2 style={{ marginTop: '2rem' }}>Evaluation Metrics</h2>
            <p>Submissions will be evaluated using standard multi-class classification metrics.</p>

            <h3 style={{ marginTop: '1.5rem' }}>Primary Metrics</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', margin: '1.5rem 0' }}>
              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
                <h3 style={{ color: '#28a745', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Accuracy</h3>
                <p style={{ color: '#6c757d', fontSize: '0.9rem' }}>Overall classification accuracy across all instrument categories</p>
              </div>
              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
                <h3 style={{ color: '#28a745', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Macro F1-Score</h3>
                <p style={{ color: '#6c757d', fontSize: '0.9rem' }}>Primary metric — harmonic mean of precision and recall averaged across all classes</p>
              </div>
              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
                <h3 style={{ color: '#28a745', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Precision</h3>
                <p style={{ color: '#6c757d', fontSize: '0.9rem' }}>Accuracy of positive predictions for each instrument category</p>
              </div>
              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
                <h3 style={{ color: '#28a745', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Recall</h3>
                <p style={{ color: '#6c757d', fontSize: '0.9rem' }}>Ability to identify all instances of each instrument category</p>
              </div>
              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
                <h3 style={{ color: '#28a745', fontSize: '1.1rem', marginBottom: '0.5rem' }}>F1-Score</h3>
                <p style={{ color: '#6c757d', fontSize: '0.9rem' }}>Per-class harmonic mean of precision and recall</p>
              </div>
            </div>

            <h3 style={{ marginTop: '1.5rem' }}>Additional Metrics to Report</h3>
            <ul style={{ marginLeft: '1.5rem', marginTop: '1rem', lineHeight: '1.8' }}>
              <li>Inference time per frame</li>
              <li>Parameter count</li>
              <li>Computational complexity</li>
            </ul>
            <p style={{ marginTop: '1rem' }}>These metrics help evaluate the practical deployability of proposed models.</p>

            <h2 style={{ marginTop: '2rem' }}>Code of Conduct</h2>
            <p>All participants of this classroom challenge are expected to:</p>
            <ul style={{ marginLeft: '1.5rem', marginTop: '1rem', lineHeight: '1.8' }}>
              <li>Uphold academic integrity - no plagiarism; submit only original work</li>
              <li>Properly follow all data usage guidelines</li>
              <li>Respect confidentiality and avoid sharing or redistributing the dataset</li>
              <li>Use models and results responsibly, strictly for research and non-clinical purposes</li>
            </ul>
            <p style={{ marginTop: '1rem' }}><strong>Any violation of this Code of Conduct may result in removal or disqualification from the challenge.</strong></p>
          </main>
        )
      case 'tasks':
        return <Tasks />
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
            <h1 className="challenge-title">2026 Efficient Instrument Classification Challenge (EICC 2026)</h1>

            <h2>Introduction</h2>
            <p>Advances in artificial intelligence have enabled machines to interpret complex visual information from images and videos. In medical environments, computer vision systems can assist clinicians by identifying surgical instruments, analyzing procedures, and supporting real-time decision-making. However, building such systems requires not only accurate machine learning models but also efficient computing systems capable of processing visual data quickly and reliably.</p>

            <p>The 2026 Efficient Instrument Classification Challenge (EICC) focuses on the development of machine learning systems that can classify surgical instrument frames efficiently while considering system-level performance. Participants will design and evaluate a deep learning model that classifies frames extracted from surgical videos into several instrument-related categories.</p>

            <p>Unlike traditional image classification tasks that focus solely on prediction accuracy, this challenge also emphasizes system efficiency and performance. Participants will implement a frame-processing pipeline that simulates a real-time video stream and evaluate how system design choices influence performance metrics such as throughput, latency, and resource utilization.</p>

            <p>This challenge encourages participants to think beyond model accuracy and explore how machine learning algorithms interact with computing systems. By analyzing the impact of factors such as threading, buffering, and resource management, participants will gain insights into how modern AI systems are deployed in real-world applications.</p>

            <h2>Challenge Goal</h2>
            <p>The primary goal of this challenge is to develop a system that can accurately and efficiently classify image frames into instrument categories while maintaining strong runtime performance.</p>
            <p>Participants will:</p>
            <ul>
              <li>Train a deep learning model to classify frames into predefined instrument categories.</li>
              <li>Implement a frame-processing pipeline that simulates real-time video analysis.</li>
              <li>Measure system performance using metrics such as throughput (frames per second), per-frame latency, and resource utilization.</li>
              <li>Analyze how different system designs affect overall performance.</li>
            </ul>

            <h2>Who Should Participate</h2>
            <p>The challenge is designed primarily for students interested in artificial intelligence and medical imaging. For the current edition, participation is limited to students.</p>
            <p>Participants may include:</p>
            <ul>
              <li>Undergraduate and graduate students</li>
              <li>Research labs working on medical computer vision</li>
              <li>Students exploring AI applications in healthcare</li>
            </ul>

            <h2>Research Impact</h2>
            <p>Automatic instrument recognition has many important downstream applications in medical AI, including:</p>
            <ul>
              <li>Procedural workflow analysis</li>
              <li>Automated clinical documentation</li>
              <li>Context-aware decision support</li>
              <li>Surgical training and simulation</li>
              <li>Robotic and semi-autonomous endoscopic systems</li>
            </ul>

            <p>By participating in EICC 2026, students will contribute toward the development of AI systems capable of supporting clinicians in real-world clinical environments.</p>
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