import React, { useState } from 'react'

const Tasks: React.FC = () => {
  const [activeTask, setActiveTask] = useState(0)

  const tasks = [
    {
      title: "Task 1: Instrument Classification",
      description: "Develop a machine learning model that predicts the correct instrument category for each input frame.",
      requirements: [
        "Train a model to classify frames into the seven predefined instrument categories",
        "Explore Convolutional Neural Networks such as ResNet, EfficientNet, and ConvNeXt",
        "Experiment with Vision Transformers including ViT and Swin Transformer",
        "Consider lightweight architectures designed for efficient inference",
        "Apply transfer learning and foundation model approaches",
        "Use data augmentation and regularization strategies to improve generalization"
      ]
    },
    {
      title: "Task 2: System Performance Analysis",
      description: "Evaluate the runtime performance of your model in a simulated frame-stream processing pipeline. This task highlights how machine learning models interact with real computing systems.",
      requirements: [
        "Implement a frame-processing pipeline that simulates a real-time video stream",
        "Measure throughput in terms of frames processed per second",
        "Record per-frame latency across the processing pipeline",
        "Monitor CPU utilization and memory usage during inference",
        "Analyze queue behavior under varying load conditions",
        "Report findings on how system design choices affect overall performance"
      ]
    }
  ]

  const experiments = [
    "Model architecture comparison",
    "Single-thread vs multi-thread inference pipelines",
    "CPU vs GPU inference",
    "Different queue sizes in frame processing pipelines",
    "Varying simulated frame-stream rates"
  ]

  const deliverables = [
    "Model predictions for the evaluation dataset",
    "Code repository containing the training and inference pipeline",
    "Technical report (1 to 2 pages) describing the model architecture, training strategy, performance results, and system performance analysis"
  ]

  return (
    <section id="tasks" className="section tasks">
      <div className="section-container">
        <h2 className="section-title">Challenge Tasks</h2>
        <div className="section-content">
          <p>
            Participants are asked to complete the following tasks:
          </p>
        </div>

        <div className="task-tabs">
          {tasks.map((_task, index) => (
            <button
              key={index}
              className={`task-tab ${activeTask === index ? 'active' : ''}`}
              onClick={() => setActiveTask(index)}
            >
              Task {index + 1}
            </button>
          ))}
        </div>

        <div className="task-content">
          <h3>{tasks[activeTask].title}</h3>
          <p>{tasks[activeTask].description}</p>
          <h4 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Requirements:</h4>
          <ul>
            {tasks[activeTask].requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>

        <div className="task-content" style={{ marginTop: '2rem' }}>
          <h3>Evaluation Metrics</h3>
          <p>Submissions will be evaluated using standard multi-class classification metrics.</p>
          <h4 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Primary evaluation metrics:</h4>
          <ul>
            <li>Accuracy</li>
            <li>Precision</li>
            <li>Recall</li>
            <li>F1-score</li>
            <li>Macro-F1 score</li>
          </ul>
          <h4 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Additional metrics to report:</h4>
          <ul>
            <li>Inference time per frame</li>
            <li>Parameter count</li>
            <li>Computational complexity</li>
          </ul>
          <p style={{ marginTop: '1rem' }}>
            These additional metrics help evaluate the practical deployability of proposed models.
          </p>
        </div>

        <div className="task-content" style={{ marginTop: '2rem' }}>
          <h3>Expected Experiments</h3>
          <p>
            Participants are encouraged to conduct experiments that evaluate both model performance and system efficiency. These comparisons help participants understand the trade-offs between accuracy, throughput, and latency.
          </p>
          <ul style={{ marginTop: '1rem' }}>
            {experiments.map((exp, index) => (
              <li key={index}>{exp}</li>
            ))}
          </ul>
        </div>

        <div className="task-content" style={{ marginTop: '2rem' }}>
          <h3>Deliverables</h3>
          <ol style={{ marginTop: '1rem', marginLeft: '1.5rem' }}>
            {deliverables.map((item, index) => (
              <li key={index} style={{ marginBottom: '0.5rem' }}>{item}</li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default Tasks