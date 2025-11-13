import { useState, useEffect } from 'react'
import Header from './components/Header'
import Statistics from './components/Statistics'
import Hosts from './components/Hosts'
import Tasks from './components/Tasks'
import Evaluation from './components/Evaluation'
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
      case 'participants':
        return <Statistics />
      case 'hosts':
        return <Hosts />
      case 'dates':
        return <Evaluation />
      case 'tasks':
        return <Tasks />
      case 'conduct':
        return (
          <main className="main-content">
            <h1>Code of Conduct</h1>
            <p>We are committed to providing a welcoming and inspiring community for all. We expect all participants to:</p>
            <ul>
              <li>Be respectful and inclusive</li>
              <li>Collaborate in a constructive manner</li>
              <li>Maintain professional behavior</li>
              <li>Respect intellectual property and data usage guidelines</li>
            </ul>
            <p>Any violations of this code of conduct may result in disqualification from the challenge.</p>
          </main>
        )
      case 'contact':
        return (
          <main className="main-content">
            <h1>Contact</h1>
            <h2>Task Organizers</h2>
            <p><strong>Dr. Debesh Jha</strong></p>
            <p>SimulaMet</p>
            <p>Email: debesh@simula.no</p>
            <p><strong>Harshith Reddy Nalla</strong></p>
            <p>Undergraduate Research Assistant</p>
            <p>University of South Dakota</p>
            <p><strong>Sai Sankar Swarna</strong></p>
            <p>Graduate Assistant</p>
            <p>University of South Dakota</p>
            <h2>Discord Channel</h2>
            <p>To facilitate communication within the participants, we have set up a Discord channel. You can use this channel for discussion of the challenge or ask questions. Please email debesh@simula.no for the invitation to the Discord.</p>
          </main>
        )
      default:
        return (
          <main className="main-content">
        <h1>Machine Mind Marathon</h1>
        <p>See the MediaEval 2020 webpage for information on how to register and participate.</p>

        <h2>Challenge Description</h2>
        <p>The "Machine Mind Marathon" aims to develop computer-aided diagnosis systems for automatic polyp segmentation to detect all types of polyps (for example, irregular polyp, smaller or flat polyps) with high efficiency and accuracy. The main goal of the challenge is to benchmark semantic segmentation algorithms on a publicly available dataset, emphasizing robustness, speed, and generalization.</p>
        
        <p>Participants will get access to a dataset consisting of 1,000 segmented polyp images from the gastrointestinal tract and a separate testing dataset. The challenge consists of two mandatory tasks, each focused on a different requirement for efficient polyp detection. We hope that this task encourages multimedia researchers to apply their vast knowledge to the medical field and make an impact that may affect real lives.</p>

        <h2>Task Description</h2>
        <p>The participants are invited to submit the results on the following tasks:</p>
        
        <p><strong>1) Polyp segmentation task (required)</strong> - The polyp segmentation task asks participants to develop algorithms for segmenting polyps on a comprehensive dataset.</p>
        
        <p><strong>2) Algorithm efficiency task (required)</strong> - The algorithm efficiency task is similar to task one but puts a stronger emphasis on the algorithm's speed in terms of frames-per-second. To ensure a fair evaluation, this task requires participants to submit a Docker image so that all algorithms are evaluated on the same hardware.</p>

        <h2>Motivation and Background</h2>
        <p>Colonoscopy is currently the gold-standard medical procedure for examining the colon for lesions and other abnormalities such as cancer. Colorectal cancer (CRC) is the third most prevailing strain in terms of cancer incidence and second in terms of mortality globally. As early detection is critical for patient survival, regular screening through colonoscopy is a prerequisite for cancer detection and colorectal cancer prevention. Regardless of the success of colonoscopy, it is estimated to miss around 20% of polyps. This is mostly due to the heavy reliance on the skill of the clinician operating the endoscope and his/her ability to detect polyps. An automated computer-aided diagnosis (CAD) system could be one of the potential solutions for the overlooked polyps. Such detection or surveillance systems can give doctors a so-called "third-eye", thereby alerting them of missed polyps or other common lesions.</p>

        <h2>Target Group</h2>
        <p>The task is of interest to the researchers working with multimedia segmentation, deep learning (semantic segmentation), and computer vision. We especially encourage young researchers to contribute to the field of endoscopy by developing an automated computer-aided diagnosis system that could be potentially used in clinical settings.</p>

        <h2>Data</h2>
        <p>The dataset contains 1,000 polyp images and their corresponding ground truth mask. The datasets were collected from real routine clinical examinations at Vestre Viken Health Trust (VV) in Norway by expert gastroenterologists. The VV is the collaboration of the four hospitals that provide healthcare service to 470,000 peoples. The resolution of images varies from 332✕487 to 1920✕1072 pixels. Some of the images contain green thumbnail in the lower-left corner of the images showing the position marking from the ScopeGuide (Olympus). The training dataset can be downloaded from <a href="https://datasets.simula.no/kvasir-seg/" target="_blank" rel="noopener noreferrer">https://datasets.simula.no/kvasir-seg/</a>.</p>
        
        <p>The test dataset is now released. It can be downloaded from <a href="https://drive.google.com/file/d/1uP2W2g0iCCS3T6Cf7TPmNdSX4gayOrv2/view?usp=sharing" target="_blank" rel="noopener noreferrer">https://drive.google.com/file/d/1uP2W2g0iCCS3T6Cf7TPmNdSX4gayOrv2/view?usp=sharing</a>.</p>

        <h2>Evaluation Methodology</h2>
        <p>The task will use mean Intersection over Union (mIoU) or Jaccard index as an evaluation metric, which is a standard metric for all medical segmentation task. If the teams have the same mIoU values, then the teams will be further evaluated on the basis of the higher value of the dice coefficient. We strongly recommend calculating other standard evaluation metrics such as dice coefficient, precision, recall, F2, and frame per second (FPS) for a comprehensive evaluation.</p>
        
        <p>In the challenge overview paper, the organizers will be calculating the metrics such as the Dice coefficient, mIoU, Recall, Precision, Overlap, F2, MAE, FPS, s-score, and Clinical relevance of the methods submitted by each team.</p>

        <h2>Submission</h2>
        <p>The submissions will be verified by inspecting the corresponding Docker image. If you have a problem with submitting the Docker image, we are flexible to accept a zip file that contains the predicted mask for task 1. For task 2, we require the Docker submission so that we can evaluate on the same hardware. For the more instruction about the Docker submission, please refer to our GitHub repository.</p>

        <h2>Rules</h2>
        <p>By registering this challenge, each individual or team agrees to use only the provided dataset. After the challenge, the dataset test dataset will be made available and the authors can only use it for publication or any non-commercial use. A participating team will be allowed to make a maximum of 5 submissions. The test data can not be used while training the model. The results will be evaluated by the organizers and presented at MediaEval 2020.</p>

        <h2>Discord Channel</h2>
        <p>To facilitate communication within the participants, we have set up a Discord channel. You can use this channel for discussion of the challenge or ask questions. Please email debesh@simula.no for the invitation at the Discord.</p>

        <h2>References and recommended reading</h2>
        <p>Debesh Jha, Pia H. Smedsrud, Michael A. Riegler, Pål Halvorsen, Thomas de Lange, Dag Johansen, and Håvard D. Johansen. 2020. Kvasir-seg: A segmented polyp dataset, In Proceeding of International Conference on Multimedia Modeling (MMM), 451-462.</p>
        
        <p>Debesh Jha, Pia H. Smedsrud, Michael A. Riegler, Pål Halvorsen, Thomas de Lange, Dag Johansen, and Håvard D. Johansen. 2019. Resunet++: An advanced architecture for medical image segmentation, In International Symposium on Multimedia (ISM), 225-2255.</p>
        
        <p>Tobias Ross et al. 2020. Robust Medical Instrument Segmentation Challenge 2019, arXiv preprint.</p>
        
        <p>Sharib Ali et al. 2020. An objective comparison of detection and segmentation algorithms for artefacts in clinical endoscopy, Scientific Reports.</p>

        <h2>Task Organizers</h2>
        <p>Dr. Debesh Jha, SimulaMet debesh (at) simula.no</p>
        <p>Harshith Reddy Nalla</p>
        <p>Sai Sankar Swarna</p>

        <h2>Task Schedule</h2>
        <p>01 July: Data release</p>
        <p>01 September: Test Data release</p>
        <p>31 October 16 November: Runs due</p>
        <p>15 November 23 November: Results returned</p>
        <p>30 November: Working notes paper</p>
        <p>11, 14-15 December: MediaEval 2020 Workshop</p>
        <p>Workshop will be held online. Exact dates to be announced.</p>
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