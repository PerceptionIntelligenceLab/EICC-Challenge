import React, { useState } from 'react'

const Tasks: React.FC = () => {
  const [activeTask, setActiveTask] = useState(0)

  const tasks = [
    {
      title: "Polyp Segmentation Task",
      description: "The polyp segmentation task asks participants to develop algorithms for segmenting polyps on a comprehensive dataset.",
      requirements: [
        "Develop algorithms for segmenting polyps on a comprehensive dataset",
        "Focus on detecting all types of polyps including irregular, smaller, or flat polyps",
        "Achieve high efficiency and accuracy in segmentation",
        "Submit predicted masks for evaluation"
      ]
    },
    {
      title: "Algorithm Efficiency Task", 
      description: "The algorithm efficiency task is similar to task one but puts a stronger emphasis on the algorithm's speed in terms of frames-per-second.",
      requirements: [
        "Similar to task one but with emphasis on speed",
        "Submit Docker image for fair evaluation on same hardware",
        "Optimize for frames-per-second performance",
        "Maintain accuracy while improving speed"
      ]
    }
  ]

  return (
    <section id="tasks" className="section tasks">
      <div className="section-container">
        <h2 className="section-title">Task Description</h2>
        <div className="section-content">
          <p>
            The participants are invited to submit the results on the following tasks:
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