import React, { useState } from 'react'

const Tasks: React.FC = () => {
  const [activeTask, setActiveTask] = useState(0)

  const tasks = [
    {
      title: "Track 1: Standard Classification",
      description: "Participants train any model using only the provided images. This track focuses on achieving the best possible classification accuracy across all seven instrument classes.",
      requirements: [
        "Train classification models using only the provided dataset",
        "Classify images into 7 classes: Biopsy Forceps, Clip Applier, Injection Needle, Snare, Spray Catheter, No Instrument, Other Instruments",
        "Explore CNN-based classifiers (ResNet, EfficientNet, ConvNeXt)",
        "Experiment with Vision Transformers (ViT, Swin, MambaVision)",
        "Submit predictions for evaluation"
      ]
    },
    {
      title: "Track 2: Real-Time Classification",
      description: "Focus on fast architectures (<10ms per image) designed for clinical deployment. This track emphasizes both accuracy and speed for real-world applications.",
      requirements: [
        "Develop lightweight models suitable for real-time deployment",
        "Achieve inference time of less than 10ms per image",
        "Maintain competitive accuracy while optimizing for speed",
        "Submit Docker image for fair evaluation on same hardware",
        "Document model architecture and optimization techniques"
      ]
    },
    {
      title: "Track 3: Foundation-Model Transfer (Optional)",
      description: "Use large pretrained models (SAM, DINOv2, CLIP ViT, etc.) to boost performance in instrument recognition. This track encourages leveraging state-of-the-art foundation models.",
      requirements: [
        "Utilize large pretrained models (SAM, DINOv2, CLIP ViT, etc.)",
        "Fine-tune foundation models for instrument classification",
        "Explore self-supervised or foundation-model-based approaches",
        "Document transfer learning strategies and improvements",
        "Submit model predictions and methodology"
      ]
    }
  ]

  return (
    <section id="tasks" className="section tasks">
      <div className="section-container">
        <h2 className="section-title">Task Descriptions</h2>
        <div className="section-content">
          <p>
            The participants are invited to submit results for the following tracks:
          </p>
        </div>

        <div className="task-tabs">
          {tasks.map((_task, index) => (
            <button
              key={index}
              className={`task-tab ${activeTask === index ? 'active' : ''}`}
              onClick={() => setActiveTask(index)}
            >
              Track {index + 1}
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
      </div>
    </section>
  )
}

export default Tasks