import React, { useEffect, lazy, Suspense } from 'react';
import Stepper, { Step } from './reactbits/Stepper/Stepper';
import Ambient from './components/Ambient/Ambient';
import ThemeLock from './components/ThemeLock/ThemeLock';
import SideMenu from './components/SideMenu/SideMenu';
import BackToTop from './components/BackToTop/BackToTop';
import Hero from './components/Hero/Hero';

// Lazy-loaded components
const AmbientBackground = lazy(() => import('./components/Ambient/AmbientBackground'));
const AnimatedLines = lazy(() => import('./reactbits/AnimatedLines'));
const TargetCursor = lazy(() => import('./reactbits/TargetCursor'));
const Projects = lazy(() => import('./components/Projects/Projects'));
const Experience = lazy(() => import('./components/Experience/Experience'));
const Awards = lazy(() => import('./components/Awards/Awards'));
const Dashboard = lazy(() => import('./components/Dashboard/Dashboard'));
const ResumeSection = lazy(() => import('./components/Resume/ResumeSection'));
const Contact = lazy(() => import('./components/Contact/Contact'));

function App() {
  const [stepperCompleted, setStepperCompleted] = React.useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <AmbientBackground />
      <AnimatedLines />
      {/* Stepper appears first */}
      <div className="container mx-auto px-4 z-50 relative">
        {!stepperCompleted ? (
  <div className="container mx-auto px-4 z-50 relative">
    <Stepper
      initialStep={1}
      backButtonText="Previous"
      nextButtonText="Next"
      onFinalStepCompleted={() => setStepperCompleted(true)}
    >
      <Step>
        <h2 className="text-xl tracking-widest text-accent">CASE INTAKE</h2>
        <div className="case-warning">⚠ RESTRICTED MATERIAL</div>
        <p className="text-muted mt-4">
          This archive presents selected technical work and investigative notes.
        </p>
      </Step>

      <Step>
        <h2 className="text-xl tracking-widest text-accent">EVIDENCE REVIEW</h2>
        <p className="text-muted mt-4">
          Analyze project outputs and case files carefully.
        </p>
      </Step>

      <Step>
        <h2 className="text-xl tracking-widest text-accent">WITNESS INSIGHTS</h2>
        <p className="text-muted mt-4">
          Collect personal and professional feedback from observed sources.
        </p>
      </Step>

      <Step>
        <h2 className="text-xl tracking-widest text-accent">CASE SUMMARY</h2>
        <p className="text-muted mt-4">
          Consolidate insights, findings, and lessons learned.
        </p>
      </Step>
    </Stepper>
  </div>
) : (
  <>
    {/* Main website content */}
    <SideMenu />
    <Suspense fallback={null}>
      <Hero id="hero" className="cursor-target" />
      <Projects id="projects" className="cursor-target" />
      <Experience id="experience" className="cursor-target" />
      <Awards id="awards" className="cursor-target" />
      <Dashboard id="dashboard" className="cursor-target" />
      <ResumeSection id="resume" className="cursor-target" />
      <Contact id="contact" className="cursor-target" />
    </Suspense>
    <BackToTop />
  </>
        )}
      </div>
    </div>
  );
}

export default App;
