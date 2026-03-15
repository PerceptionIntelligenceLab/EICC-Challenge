import React from 'react'

const ChallengeOverview: React.FC = () => {
  return (
    <section id="challenge" className="section challenge-overview">
      <div className="section-container">
        <h2 className="section-title">Challenge Description</h2>

        <div className="section-content">
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>2026 Efficient Instrument Classification Challenge (EICC 2026)</h3>
          <p style={{ marginBottom: '1rem', lineHeight: '1.8' }}>
            The 2026 Efficient Instrument Classification Challenge (EICC) focuses on the development of machine learning systems that can classify surgical instrument frames efficiently while considering system-level performance. Participants will design and evaluate a deep learning model that classifies frames extracted from surgical videos into several instrument-related categories.
          </p>
          <p style={{ marginBottom: '1rem', lineHeight: '1.8' }}>
            Unlike traditional image classification tasks that focus solely on prediction accuracy, this challenge also emphasizes system efficiency and performance. Participants will implement a frame-processing pipeline that simulates a real-time video stream and evaluate how system design choices influence performance metrics such as throughput, latency, and resource utilization.
          </p>
          <p style={{ marginBottom: '1rem', lineHeight: '1.8' }}>
            This challenge encourages participants to think beyond model accuracy and explore how machine learning algorithms interact with computing systems. By analyzing the impact of factors such as threading, buffering, and resource management, participants will gain insights into how modern AI systems are deployed in real-world applications.
          </p>
          <p style={{ marginBottom: '1rem', lineHeight: '1.8', fontWeight: '500' }}>
            <strong>Challenge Goal:</strong> The primary goal is to develop a system that can accurately and efficiently classify image frames into instrument categories while maintaining strong runtime performance.
          </p>
          <ul style={{ marginLeft: '2rem', marginBottom: '1rem', lineHeight: '1.8' }}>
            <li>Train a deep learning model to classify frames into predefined instrument categories.</li>
            <li>Implement a frame-processing pipeline that simulates real-time video analysis.</li>
            <li>Measure system performance using metrics such as throughput (frames per second), per-frame latency, and resource utilization.</li>
            <li>Analyze how different system designs affect overall performance.</li>
          </ul>

          <h4 style={{ fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '0.75rem' }}>Research Impact</h4>
          <p style={{ marginBottom: '0.75rem', lineHeight: '1.8' }}>
            Automatic instrument recognition has many important downstream applications in medical AI, including procedural workflow analysis, automated clinical documentation, context-aware decision support, surgical training and simulation, and robotic and semi-autonomous endoscopic systems.
          </p>
          <p style={{ lineHeight: '1.8' }}>
            By participating in EICC 2026, students will contribute toward the development of AI systems capable of supporting clinicians in real-world clinical environments.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <h3 className="feature-title">7 Instrument Classes</h3>
            <p className="feature-description">Frames classified into Chain, Clip, Doubt, Hold, Hook, No Instrument, and White Tube</p>
          </div>
          <div className="feature-card">
            <h3 className="feature-title">System Efficiency</h3>
            <p className="feature-description">Evaluate throughput, latency, CPU utilization, and queue behavior under real-world load</p>
          </div>
          <div className="feature-card">
            <h3 className="feature-title">Multi-Metric Evaluation</h3>
            <p className="feature-description">Submissions assessed on accuracy, precision, recall, F1-score, and Macro-F1</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChallengeOverview