# EICC 2026 Challenge Website

A modern, responsive web application for the 2026 Efficient Instrument Classification Challenge (EICC 2026), developed for the Computer Science course at the University of South Dakota under the guidance of Dr. Debesh Jha.

## About the Challenge

The 2026 Efficient Instrument Classification Challenge (EICC) focuses on the development of machine learning systems that can classify surgical instrument frames efficiently while considering system-level performance. Participants will design and evaluate a deep learning model that classifies frames extracted from surgical videos into seven instrument-related categories.

Unlike traditional image classification tasks that focus solely on prediction accuracy, this challenge also emphasizes system efficiency and performance. Participants implement a frame-processing pipeline that simulates a real-time video stream and evaluate how system design choices influence metrics such as throughput, latency, and resource utilization.

The challenge features seven instrument categories: Chain, Clip, Doubt, Hold, Hook, No Instrument, and White Tube. Participants complete two tasks: Instrument Classification and System Performance Analysis.

## Project Overview

This website serves as the official platform for the EICC 2026 challenge, providing participants with essential information, dataset access, submission guidelines, and interactive visualizations. The application is built as a single-page application with hash-based routing, ensuring smooth navigation and a modern user experience.

## Features

### Navigation and Content Sections

- Home: Overview of the challenge, objectives, and research impact
- Dataset: Information about the training dataset, download links, and instrument categories
- Statistics: Interactive world map visualization showing participant distribution across countries
- Hosts: Profiles of challenge organizers with links to their professional pages
- Tasks: Detailed descriptions of both challenge tasks, evaluation metrics, expected experiments, and deliverables
- Important Dates: Timeline of key dates including dataset release and submission deadlines
- Submissions: Evaluation methodology and metrics used for assessment
- Code of Conduct: Guidelines for participation and academic integrity
- Contact: Contact information for challenge organizers

### Technical Features

- Fully responsive design optimized for desktop, tablet, and mobile devices
- Interactive world map with hover tooltips showing participant counts by country
- Mobile-friendly navigation with hamburger menu
- Smooth scrolling and transitions
- Hash-based routing for direct section linking
- Optimized build for GitHub Pages deployment

## Technologies Used

- React 18.2.0: Modern UI library for building interactive components
- TypeScript 5.2.2: Type-safe JavaScript for improved code quality
- Vite 5.0.8: Fast build tool and development server
- React Simple Maps 3.0.0: Library for rendering interactive world maps
- ESLint: Code linting and quality assurance
- GitHub Pages: Static site hosting and deployment

## Project Structure

```
EICC-Challenge/
├── public/                  # Static assets served directly
│   ├── world-110m.json      # World map geography data
│   ├── debesh.png           # Organizer profile image
│   ├── harshith.png         # Organizer profile image
│   └── favicon.svg          # Site favicon
├── src/
│   ├── components/          # React components
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Hero.tsx         # Landing section
│   │   ├── ChallengeOverview.tsx  # Challenge description and goals
│   │   ├── Tasks.tsx        # Task descriptions, metrics, experiments, deliverables
│   │   ├── DataSection.tsx  # Dataset information
│   │   ├── Evaluation.tsx   # Important dates timeline
│   │   ├── Statistics.tsx   # Statistics page with world map
│   │   ├── WorldMap.tsx     # Interactive world map component
│   │   ├── Hosts.tsx        # Challenge hosts section
│   │   ├── Organizer.tsx    # Organizing team and participation info
│   │   └── Footer.tsx       # Site footer
│   ├── constants/           # Constant values and configurations
│   │   └── countryColors.ts # Country color mappings for map
│   ├── App.tsx              # Main application component
│   ├── App.css              # Application styles
│   ├── index.css            # Global styles
│   └── main.tsx             # Application entry point
├── dist/                    # Production build output (generated)
├── node_modules/            # Dependencies (generated)
├── index.html               # HTML template
├── package.json             # Project dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── tsconfig.node.json       # TypeScript config for Node files
├── vite.config.ts           # Vite build configuration
└── README.md                # This file
```

## Challenge Tasks

### Task 1: Instrument Classification

Develop a machine learning model that predicts the correct instrument category for each input frame. Participants are encouraged to explore Convolutional Neural Networks (ResNet, EfficientNet, ConvNeXt), Vision Transformers (ViT, Swin Transformer), lightweight architectures, transfer learning, and data augmentation strategies.

### Task 2: System Performance Analysis

Evaluate the runtime performance of models in a simulated frame-stream processing pipeline. Key metrics include throughput (frames per second), per-frame latency, CPU utilization, memory usage, and queue behavior under load.

## Dataset

The dataset consists of frames extracted from surgical videos. Each frame belongs to one of the following seven classes:

- Chain
- Clip
- Doubt
- Hold
- Hook
- No Instrument
- White Tube

The training dataset is available on Kaggle:
[Download Training Dataset](https://www.kaggle.com/datasets/debeshjha1/surgical-instrument-classification)

## Evaluation Metrics

Submissions are evaluated using the following primary metrics:

- Accuracy
- Precision
- Recall
- F1-score
- Macro-F1 score

Participants are also encouraged to report inference time per frame, parameter count, and computational complexity.

## Submission Guidelines

Participants should submit:

1. Model predictions for the evaluation dataset
2. Code repository containing the training and inference pipeline
3. Technical report (1 to 2 pages) describing the model architecture, training strategy, performance results, and system performance analysis

Submissions should be made to the D2L dropbox under assignments by the D2L deadline.

## Who Should Participate

The challenge is designed primarily for students interested in artificial intelligence and medical imaging. For the current edition, participation is limited to students, including:

- Undergraduate and graduate students
- Research labs working on medical computer vision
- Students exploring AI applications in healthcare

## Browser Support

The application is tested and works on:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

This is a classroom project for the University of South Dakota Computer Science course. For contributions or suggestions, please contact the challenge organizers.

## Organizing Team

Dr. Debesh Jha
Challenge Organizer
University of South Dakota
debesh.jha@usd.edu

Research Assistant - Harshith Reddy Nalla

## License

This project is developed for educational purposes as part of the University of South Dakota Computer Science course. All rights reserved.

## Contact

For questions about the challenge, dataset, or submissions, please contact debesh.jha@usd.edu or harshithreddy.nalla@coyotes.usd.edu.

---

Developed with React, TypeScript, and Vite for the University of South Dakota Computer Science course.
