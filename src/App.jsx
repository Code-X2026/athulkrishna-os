import { useState } from "react";
import RecruiterBar from "./components/RecruiterBar/RecruiterBar";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import TechTicker from "./components/TechTicker/TechTicker";
import Experience from "./components/Experience/Experience";
import Certificates from "./components/Certificates/Certificates";
import Projects from "./components/Projects/Projects";
import Gallery from "./components/Gallery/Gallery";
import Skills from "./components/Skills/Skills";
import CareerDocuments from "./components/CareerDocuments/CareerDocuments";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import ResumeModal from "./components/ResumeModal/ResumeModal";
import { useScrollReveal } from "./hooks/useScrollReveal";

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  useScrollReveal();

  return (
    <>
      <ScrollProgress />
      <header className="fixed top-0 left-0 right-0 z-50 flex flex-col shadow-md">
        <RecruiterBar />
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />
      </header>

      <main>
        {/* 1. Authoritative Hero with Verified Credentials & 3 Metric Highlights */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* 2. Dynamic Tech Ticker & Real-Time Competency Telemetry */}
        <TechTicker />

        {/* 3. Professional Work History & Internal Career Progression */}
        <Experience />

        {/* 4. Official Cisco CCNA Credentials & Authenticated Employer Letters */}
        <Certificates />

        {/* 5. Featured IT Implementations with Architecture & Runbooks */}
        <Projects />

        {/* 6. Authentic On-Site Work Photos & Physical Infrastructure Lightbox */}
        <Gallery />

        {/* 7. Unified Technical Competencies & Domain Expertise Matrix */}
        <Skills />

        {/* 8. Career Documents (ATS Resume & UAE Tailored Cover Letter) */}
        <CareerDocuments onOpenResume={() => setIsResumeOpen(true)} />

        {/* 9. Direct Recruiter Contact & Fast-Track Dispatch */}
        <Contact />
      </main>

      {/* 10. Corporate Footer & Global Modals */}
      <Footer />
      <ScrollTop />

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
}

export default App;
