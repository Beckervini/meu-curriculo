import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
      institution: 'FIAP - Faculdade de Informática e Administração Paulista',
      period: '2022 - 2024',
      location: 'São Paulo, SP',
      description: 'Formação completa em desenvolvimento de software, algoritmos, modelagem de dados, programação orientada a objetos e metodologias ágeis. Cursos especializados em Python para Data Science.',
      highlights: ['Java', 'Python', 'SQL', 'Scrum', 'Data Science', 'Algoritmos']
    },
    {
      degree: 'Ensino Médio',
      institution: 'Colégio Emilie de Villeneuve - São Paulo',
      period: '2019 - 2022',
      location: 'São Paulo, SP',
      description: 'Formação básica com foco em excelência acadêmica e desenvolvimento pessoal.',
      highlights: []
    },
  ];

  const certifications = [
    'Algoritmos e Lógica de Programação',
    'Modelagem de Dados',
    'Python para Data Science (FIAP/Alura)',
    'Java Orientado a Objetos',
    'Scrum Fundamentals',
    'Formação Social, Sustentabilidade e Mercado de TI',
    'Business Intelligence e Análise de Dados',
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="section-header">Formação</h2>
        <div className="section-divider mx-auto"></div>
      </div>

      {/* Education */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-[hsl(var(--text-primary))] mb-8 text-center">
          Educação
        </h3>
        <div className="space-y-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div key={index} className="portfolio-card">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-[hsl(var(--text-primary))] mb-3">
                    {edu.degree}
                  </h4>
                  <div className="flex items-center gap-2 text-[hsl(var(--primary))] font-medium mb-2">
                    <GraduationCap size={18} className="experience-icon" />
                    {edu.institution}
                  </div>
                </div>
                <div className="flex flex-col md:items-end mt-4 md:mt-0">
                  <div className="flex items-center gap-2 text-[hsl(var(--text-secondary))] mb-2">
                    <Calendar size={16} className="experience-icon" />
                    {edu.period}
                  </div>
                  <div className="flex items-center gap-2 text-[hsl(var(--text-secondary))]">
                    <MapPin size={16} className="experience-icon" />
                    {edu.location}
                  </div>
                </div>
              </div>
              
              <p className="text-[hsl(var(--text-secondary))] mb-6 leading-relaxed">
                {edu.description}
              </p>
              
              {edu.highlights.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {edu.highlights.map((highlight) => (
                    <span key={highlight} className="skill-badge">
                      {highlight}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div>
        <h3 className="text-2xl font-semibold text-[hsl(var(--text-primary))] mb-8 text-center">
          Certificações e Cursos
        </h3>
        <div className="portfolio-card max-w-4xl mx-auto">
          <div className="grid gap-4 md:grid-cols-2">
            {certifications.map((cert) => (
              <div key={cert} className="flex items-center gap-3 p-3 rounded-lg hover:bg-[hsl(var(--hover-bg))] transition-colors">
                <Award size={18} className="text-[hsl(var(--primary))] flex-shrink-0" />
                <span className="text-[hsl(var(--text-secondary))]">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;