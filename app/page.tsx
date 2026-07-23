import Navbar from "@/components/layout/Navbar";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgress from "@/components/layout/ScrollProgress";
import ScrollToTop from "@/components/layout/ScrollToTop";
import LoadingScreen from "@/components/layout/LoadingScreen";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Timeline from "@/components/sections/Timeline";
import Certifications from "@/components/sections/Certifications";
import Achievements from "@/components/sections/Achievements";
import GitHubSection from "@/components/sections/GitHubSection";
import Resume from "@/components/sections/Resume";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Experience />
        <Education />
        <Certifications />
        <Achievements />
        <GitHubSection />
        <Resume />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
