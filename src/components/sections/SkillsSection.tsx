import { Coffee, Database, Code2, BarChart3, Palette, FileSpreadsheet, Calculator, Globe } from 'lucide-react';

const SkillsSection = () => {
  const technicalSkills = [
    { name: 'Python', level: 'Avançado', icon: Code2, color: 'text-yellow-600' },
    { name: 'Java', level: 'Avançado', icon: Coffee, color: 'text-orange-600' },
    { name: 'JavaScript', level: 'Intermediário', icon: Code2, color: 'text-yellow-500' },
    { name: 'SQL e Banco de Dados', level: 'Avançado', icon: Database, color: 'text-blue-600' },
    { name: 'CSS', level: 'Intermediário', icon: Palette, color: 'text-pink-600' },
    { name: 'Excel', level: 'Avançado', icon: FileSpreadsheet, color: 'text-green-600' },
    { name: 'Lógica de Programação e Cálculos', level: 'Avançado', icon: Calculator, color: 'text-purple-600' },
    { name: 'BI e Análise de Dados', level: 'Avançado', icon: BarChart3, color: 'text-indigo-600' },
  ];

  const languages = [
    { name: 'Inglês', level: 'Fluente', flag: '🇺🇸' },
    { name: 'Espanhol', level: 'Fluente', flag: '🇪🇸' },
    { name: 'Alemão', level: 'Básico', flag: '🇩🇪' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="section-header">Habilidades</h2>
        <div className="section-divider mx-auto"></div>
      </div>

      {/* Technical Skills */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-[hsl(var(--text-primary))] mb-8 text-center">
          Habilidades Técnicas
        </h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {technicalSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div key={skill.name} className="skill-card">
                <div className="flex justify-center mb-4">
                  <div className={`skill-icon p-4 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] rounded-xl ${skill.color}`}>
                    <Icon size={28} className="text-white" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-[hsl(var(--text-primary))] mb-3">
                  {skill.name}
                </h4>
                <span className="skill-badge">{skill.level}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Languages */}
      <div>
        <h3 className="text-2xl font-semibold text-[hsl(var(--text-primary))] mb-8 text-center">
          Idiomas
        </h3>
        <div className="grid gap-6 md:grid-cols-3 max-w-3xl mx-auto">
          {languages.map((language) => (
            <div key={language.name} className="skill-card">
              <div className="text-5xl mb-4 skill-icon">{language.flag}</div>
              <h4 className="text-lg font-semibold text-[hsl(var(--text-primary))] mb-3">
                {language.name}
              </h4>
              <span className="language-badge">{language.level}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;