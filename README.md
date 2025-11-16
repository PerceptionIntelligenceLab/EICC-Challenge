# EICC 2025 Challenge Website

A modern, responsive web application for the Endoscopic Instrument Classification Challenge (EICC 2025), developed for the Computer Science course at the University of South Dakota under the guidance of Dr. Debesh Jha.

## About the Challenge

The Endoscopic Instrument Classification Challenge (EICC 2025) is a classroom challenge focused on advancing artificial intelligence applications in gastrointestinal endoscopy. The challenge invites participants to develop classification models capable of identifying surgical instruments in endoscopic images, with applications in workflow optimization, scene understanding, automated reporting, and robotic assistance.

The challenge features seven instrument classes: Biopsy Forceps, Clip Applier, Injection Needle, Snare, Spray Catheter, No Instrument, and Other Instruments. Participants can compete in three tracks: Standard Classification, Real-Time Classification, and Foundation-Model Transfer.

## Project Overview

This website serves as the official platform for the EICC 2025 challenge, providing participants with essential information, dataset access, submission guidelines, and interactive visualizations. The application is built as a single-page application with hash-based routing, ensuring smooth navigation and a modern user experience.

## Features

### Navigation and Content Sections

- **Home**: Comprehensive overview of the challenge, objectives, and research impact
- **Dataset**: Information about the training dataset, download links, and data characteristics
- **Statistics**: Interactive world map visualization showing participant distribution across countries
- **Hosts**: Profiles of challenge organizers with links to their professional pages
- **Tasks**: Detailed descriptions of all three challenge tracks with requirements
- **Important Dates**: Timeline of key dates including dataset release and submission deadlines
- **Submissions**: Evaluation methodology and metrics used for assessment
- **Code of Conduct**: Guidelines for participation and academic integrity
- **Contact**: Contact information for challenge organizers

### Technical Features

- Fully responsive design optimized for desktop, tablet, and mobile devices
- Interactive world map with hover tooltips showing participant counts by country
- Mobile-friendly navigation with hamburger menu
- Smooth scrolling and transitions
- Hash-based routing for direct section linking
- Optimized build for GitHub Pages deployment

## Technologies Used

- **React 18.2.0**: Modern UI library for building interactive components
- **TypeScript 5.2.2**: Type-safe JavaScript for improved code quality
- **Vite 5.0.8**: Fast build tool and development server
- **React Simple Maps 3.0.0**: Library for rendering interactive world maps
- **ESLint**: Code linting and quality assurance
- **GitHub Pages**: Static site hosting and deployment

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js (version 16 or higher recommended)
- npm (comes with Node.js) or yarn package manager

### Installation

1. Clone the repository to your local machine:

```bash
git clone <repository-url>
cd Challenge
```

2. Install project dependencies:

```bash
npm install
```

This will install all required packages listed in package.json, including React, TypeScript, Vite, and other dependencies.

### Development

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port). The development server supports hot module replacement, so changes to your code will be reflected immediately in the browser.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

This command will:
1. Compile TypeScript code
2. Bundle and optimize all assets
3. Generate static files in the `dist` directory

The production build is optimized for performance with minified JavaScript and CSS.

### Preview Production Build

To preview the production build locally before deployment:

```bash
npm run preview
```

This serves the built files from the `dist` directory, allowing you to test the production version locally.

### Deployment

The project is configured for deployment to GitHub Pages. To deploy:

```bash
npm run deploy
```

This command will build the project and deploy it to the `gh-pages` branch, making it accessible at the configured base URL.

Note: The base path is set to `/EICC-Challenge/` in the Vite configuration. If deploying to a different location, update the `base` property in `vite.config.ts`.

## Project Structure

```
Challenge/
├── public/                # Static assets served directly
│   ├── world-110m.json    # World map geography data
│   ├── debesh.png         # Organizer profile image
│   ├── harshith.png       # Organizer profile image
│   └── favicon.svg        # Site favicon
├── src/
│   ├── components/        # React components
│   │   ├── Header.tsx     # Navigation header
│   │   ├── Statistics.tsx # Statistics page with world map
│   │   ├── WorldMap.tsx   # Interactive world map component
│   │   ├── Hosts.tsx      # Challenge hosts section
│   │   ├── Tasks.tsx      # Task descriptions
│   │   ├── Evaluation.tsx # Important dates timeline
│   │   ├── DataSection.tsx # Dataset information
│   │   └── Footer.tsx     # Site footer
│   ├── constants/         # Constant values and configurations
│   │   └── countryColors.ts # Country color mappings for map
│   ├── App.tsx            # Main application component
│   ├── App.css            # Application styles
│   ├── index.css          # Global styles
│   └── main.tsx           # Application entry point
├── dist/                  # Production build output (generated)
├── node_modules/          # Dependencies (generated)
├── index.html             # HTML template
├── package.json           # Project dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── tsconfig.node.json     # TypeScript config for Node files
├── vite.config.ts         # Vite build configuration
└── README.md              # This file
```

## Available Scripts

- `npm run dev`: Start the development server
- `npm run build`: Create a production build
- `npm run preview`: Preview the production build locally
- `npm run lint`: Run ESLint to check code quality
- `npm run deploy`: Build and deploy to GitHub Pages

## Configuration

### TypeScript Configuration

The project uses strict TypeScript settings for type safety:
- Strict mode enabled
- No unused locals or parameters
- React JSX support
- Modern ES2020 target

### Vite Configuration

The Vite configuration includes:
- React plugin for JSX support
- Base path for GitHub Pages deployment
- Optimized build settings

## Development Guidelines

### Code Style

- Follow TypeScript best practices
- Use functional components with hooks
- Maintain consistent naming conventions
- Write self-documenting code with clear variable names

### Component Structure

Each component should:
- Be self-contained and reusable
- Accept props with proper TypeScript types
- Handle its own state when appropriate
- Follow React best practices

### Styling

- Styles are organized in App.css with clear sections
- Use CSS classes for styling
- Maintain responsive design principles
- Follow the established color scheme (green #28a745, red #dc2626)

## Browser Support

The application is tested and works on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

This is a classroom project for the University of South Dakota Computer Science course. For contributions or suggestions, please contact the challenge organizers.

## Challenge Information

### Important Dates

- Dataset Release: November 15, 2025
- Submission Deadline: December 1, 2025
- Leaderboard Freeze: To be announced
- Winners Announced: To be announced

### Dataset

The training dataset is available on Kaggle:
[Download Training Dataset](https://www.kaggle.com/datasets/debeshjha1/surgical-instrument-classification)

### Submission Guidelines

Submissions should be made to the D2L dropbox under assignments by December 1, 2025. Evaluation will be based on:
- Overall accuracy
- Macro F1-Score (primary metric)
- Per-class precision and recall
- Confusion matrix analysis
- Inference time (for Track 2)

## Credits and Acknowledgments

### Challenge Organizers

- **Dr. Debesh Jha** - Assistant Professor (Tenure Track), University of South Dakota
  - Website: https://debeshjha.com/
  - Email: debesh.jha@usd.edu

- **Harshith Reddy Nalla** - Undergraduate Research Assistant, University of South Dakota
  - Website: https://harshithreddy01.github.io/My-Web/

### Course Information

This challenge is part of the Computer Science curriculum at the University of South Dakota, organized and supervised by Dr. Debesh Jha.

### Additional Organizers

- Steven Hicks, SimulaMet
- Michael Riegler, SimulaMet
- Pål Halvorsen, SimulaMet and OsloMet
- Konstantin Pogorelov, Simula Research Laboratory
- Thomas de Lange, Sahlgrenska University Hospital, Mölndal, Sweden, and Bærum Hospital, Vestre Viken, Norway

## License

This project is developed for educational purposes as part of the University of South Dakota Computer Science course. All rights reserved.

## Contact

For questions about the challenge, dataset, or submissions, please contact:

**Dr. Debesh Jha**  
Assistant Professor (Tenure Track)  
University of South Dakota  
Email: debesh.jha@usd.edu

## Version History

- Version 0.0.0 - Initial release for EICC 2025 Challenge

---

Developed with React, TypeScript, and Vite for the University of South Dakota Computer Science course.

