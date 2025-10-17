import React from 'react'

const Evaluation: React.FC = () => {
  const metrics = [
    {
      title: "Mean Intersection over Union (mIoU)",
      description: "Primary evaluation metric for medical segmentation tasks"
    },
    {
      title: "Dice Coefficient", 
      description: "Secondary metric used when mIoU values are equal"
    },
    {
      title: "Precision",
      description: "Measures the accuracy of positive predictions"
    },
    {
      title: "Recall",
      description: "Measures the ability to find all positive instances"
    },
    {
      title: "F2 Score",
      description: "Harmonic mean of precision and recall with more weight on recall"
    },
    {
      title: "Frames Per Second (FPS)",
      description: "Speed metric for algorithm efficiency evaluation"
    }
  ]

  const timeline = [
    {
      date: "01 July",
      title: "Data Release",
      description: "Training dataset made available"
    },
    {
      date: "01 September", 
      title: "Test Data Release",
      description: "Test dataset released for evaluation"
    },
    {
      date: "31 October",
      title: "Runs Due",
      description: "Submission deadline for challenge entries"
    },
    {
      date: "15 November",
      title: "Results Returned",
      description: "Evaluation results provided to participants"
    },
    {
      date: "30 November",
      title: "Working Notes Paper",
      description: "Deadline for working notes submission"
    },
    {
      date: "11, 14-15 December",
      title: "MediaEval 2020 Workshop",
      description: "Online workshop presentation"
    }
  ]

  return (
    <section id="evaluation" className="section evaluation">
      <div className="section-container">
        <h2 className="section-title">Evaluation Methodology</h2>
        <div className="section-content">
          <p>
            The task will use mean Intersection over Union (mIoU) or Jaccard index as an evaluation metric, which is a standard metric for all medical segmentation task. If the teams have the same mIoU values, then the teams will be further evaluated on the basis of the higher value of the dice coefficient.
          </p>
          <p>
            We strongly recommend calculating other standard evaluation metrics such as dice coefficient, precision, recall, F2, and frame per second (FPS) for a comprehensive evaluation. In the challenge overview paper, the organizers will be calculating the metrics such as the Dice coefficient, mIoU, Recall, Precision, Overlap, F2, MAE, FPS, s-score, and Clinical relevance of the methods submitted by each team.
          </p>
        </div>

        <div className="metrics-grid">
          {metrics.map((metric, index) => (
            <div key={index} className="metric-card">
              <h3 className="metric-title">{metric.title}</h3>
              <p className="metric-description">{metric.description}</p>
            </div>
          ))}
        </div>

        <h3 className="section-title">Important Dates</h3>
        <div className="timeline">
          {timeline.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">{item.date}</div>
                <h4 className="timeline-title">{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Evaluation