import { ExternalLink, Github, Calendar } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'GreenFund - Sistema de Financiamento Sustentável',
      category: 'Web Application',
      year: '2023',
      description: 'Sistema completo de financiamento sustentável desenvolvido com .NET Core e Oracle Database. Implementação de testes unitários com xUnit e documentação com Swagger. Deploy na nuvem Azure com documentação Swagger.',
      technologies: ['.NET Core', 'Oracle', 'xUnit', 'Swagger', 'Azure'],
      github: 'https://github.com/Beckervini',
    },
    {
      title: 'API REST Java - Sistema de Gerenciamento Completo',
      category: 'Backend API',
      year: '2023',
      description: 'API REST completa desenvolvida em Java com Spring Boot, implementando autenticação JWT, validações robustas, tratamento de exceções e documentação Swagger. Arquitetura em camadas com padrões de design.',
      technologies: ['Java', 'Spring Boot', 'JWT', 'MySQL', 'Swagger', 'JPA'],
      github: 'https://github.com/Beckervini',
    },
    {
      title: 'Sistema de Gerenciamento de Cursos',
      category: 'FIAP - Projeto Acadêmico',
      year: '2023',
      description: 'Sistema completo para gerenciamento de cursos e estudantes utilizando Java Spring Boot e Oracle Database. Implementação de CRUD completo e integração com APIs REST.',
      technologies: ['Java', 'Spring Boot', 'Oracle', 'REST API'],
      github: 'https://github.com/Beckervini',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="section-header">Projetos</h2>
        <div className="section-divider mx-auto"></div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-card h-full flex flex-col">
            <div className="flex-1">
              <div className="flex justify-between items-start mb-4">
                <div className="text-[hsl(var(--primary))] font-medium text-sm">
                  {project.category}
                </div>
                <div className="flex items-center gap-1 text-[hsl(var(--text-secondary))] text-sm">
                  <Calendar size={14} />
                  {project.year}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-[hsl(var(--text-primary))] mb-4">
                {project.title}
              </h3>
              
              <p className="text-[hsl(var(--text-secondary))] mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span key={tech} className="skill-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mt-auto">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-btn w-full justify-center"
              >
                <Github size={16} />
                Ver no GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;