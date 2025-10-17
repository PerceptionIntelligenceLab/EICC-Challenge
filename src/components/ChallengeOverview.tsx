import React from 'react'

const ChallengeOverview: React.FC = () => {
  return (
    <section id="challenge" className="section challenge-overview">
      <div className="section-container">
        <h2 className="section-title">Challenge Description</h2>
        <div className="section-content">
          <p>
            The "Medico automatic polyp segmentation challenge" aims to develop computer-aided diagnosis systems for automatic polyp segmentation to detect all types of polyps (for example, irregular polyp, smaller or flat polyps) with high efficiency and accuracy. The main goal of the challenge is to benchmark semantic segmentation algorithms on a publicly available dataset, emphasizing robustness, speed, and generalization.
          </p>
          <p>
            Participants will get access to a dataset consisting of 1,000 segmented polyp images from the gastrointestinal tract and a separate testing dataset. The challenge consists of two mandatory tasks, each focused on a different requirement for efficient polyp detection. We hope that this task encourages multimedia researchers to apply their vast knowledge to the medical field and make an impact that may affect real lives.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3 className="feature-title">1,000 Segmented Images</h3>
            <p className="feature-description">
              Comprehensive dataset from real clinical examinations at Vestre Viken Health Trust in Norway.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3 className="feature-title">Two Required Tasks</h3>
            <p className="feature-description">
              Polyp segmentation and algorithm efficiency tasks with Docker-based evaluation.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏆</div>
            <h3 className="feature-title">Standard Metrics</h3>
            <p className="feature-description">
              Evaluation using mIoU, Dice coefficient, precision, recall, and FPS metrics.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChallengeOverview