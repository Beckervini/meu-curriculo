import { Github, Linkedin, Mail } from 'lucide-react';

const ContactsSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="section-title">Contatos</h2>
        <p className="section-subtitle">
          Entre em contato comigo através dos canais abaixo
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
        <a 
          href="https://github.com/Beckervini" 
          target="_blank" 
          rel="noopener noreferrer"
          className="portfolio-card text-center hover:scale-105 transition-transform duration-200"
        >
          <div className="flex justify-center mb-4">
            <Github className="w-12 h-12 text-[hsl(var(--primary))]" />
          </div>
          <h3 className="text-lg font-semibold text-[hsl(var(--text-primary))] mb-2">
            GitHub
          </h3>
          <p className="text-[hsl(var(--text-secondary))]">
            Confira meus projetos e códigos
          </p>
        </a>

        <a 
          href="https://www.linkedin.com/in/vinicius-becker-a2aba7233" 
          target="_blank" 
          rel="noopener noreferrer"
          className="portfolio-card text-center hover:scale-105 transition-transform duration-200"
        >
          <div className="flex justify-center mb-4">
            <Linkedin className="w-12 h-12 text-[hsl(var(--primary))]" />
          </div>
          <h3 className="text-lg font-semibold text-[hsl(var(--text-primary))] mb-2">
            LinkedIn
          </h3>
          <p className="text-[hsl(var(--text-secondary))]">
            Conecte-se comigo profissionalmente
          </p>
        </a>

        <a 
          href="mailto:Beckerviniprediger@gmail.com"
          className="portfolio-card text-center hover:scale-105 transition-transform duration-200"
        >
          <div className="flex justify-center mb-4">
            <Mail className="w-12 h-12 text-[hsl(var(--primary))]" />
          </div>
          <h3 className="text-lg font-semibold text-[hsl(var(--text-primary))] mb-2">
            Email
          </h3>
          <p className="text-[hsl(var(--text-secondary))]">
            Beckerviniprediger@gmail.com
          </p>
        </a>
      </div>
    </div>
  );
};

export default ContactsSection;