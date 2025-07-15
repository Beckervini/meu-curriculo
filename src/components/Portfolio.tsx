import HeroSection from './sections/HeroSection';
import SkillsSection from './sections/SkillsSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection';
import EducationSection from './sections/EducationSection';
import ContactsSection from './sections/ContactsSection';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      {/* Main Content */}
      {/* Hero Section */}
      <section id="about" className="hero-section">
        <HeroSection />
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="section">
        <SkillsSection />
      </section>
      
      {/* Experience Section */}
      <section id="experience" className="section">
        <ExperienceSection />
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="section">
        <ProjectsSection />
      </section>
      
      {/* Education Section */}
      <section id="education" className="section">
        <EducationSection />
      </section>
      
      {/* Contacts Section */}
      <section id="contacts" className="section">
        <ContactsSection />
      </section>
      
      {/* Footer */}
      <footer className="bg-[hsl(var(--card-bg))] border-t border-[hsl(var(--card-border))] py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[hsl(var(--text-secondary))]">
            Desenvolvido por Vinicius Becker © 2025
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;