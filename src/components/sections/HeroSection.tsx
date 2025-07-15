const HeroSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Main Info Card */}
      <div className="portfolio-card max-w-4xl mx-auto text-center mb-12">
        <h1 className="hero-title">
          Vinicius Becker Prediger
        </h1>
        <h2 className="hero-subtitle">
          Desenvolvedor Full Stack & Analista de Dados
        </h2>
        <p className="hero-description">
          Desenvolvedor especializado em Java, Spring Boot e Python, com experiência em 
          desenvolvimento web full stack, análise de dados e Business Intelligence. Fluente em 
          inglês e espanhol, com formação em Análise e Desenvolvimento de Sistemas pela FIAP.
        </p>
      </div>

      {/* Floating Profile Picture */}
      <div className="flex justify-center mb-12">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[hsl(var(--primary))] shadow-lg">
          <img 
            src={`${import.meta.env.BASE_URL}images/foto-vb.png`}
            alt="Vinicius Becker"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
        <div className="portfolio-card">
          <h3 className="text-xl font-semibold text-[hsl(var(--text-primary))] mb-4">
            Sobre Mim
          </h3>
          <p className="text-[hsl(var(--text-secondary))] leading-relaxed">
            Sou Vinicius Becker, desenvolvedor full stack de São Paulo, com 21 anos. Sou apaixonado 
            por tecnologia e estou sempre em busca de novos desafios que ampliem meus conhecimentos. 
            Tenho experiência em desenvolvimento web, análise de dados e Business Intelligence.
          </p>
        </div>

        <div className="portfolio-card">
          <h3 className="text-xl font-semibold text-[hsl(var(--text-primary))] mb-4">
            Experiência
          </h3>
          <p className="text-[hsl(var(--text-secondary))] leading-relaxed">
            Desenvolvimento de sistema de gestão financeira utilizando Node.js, React, TypeScript e PostgreSQL, com deploy em Docker e AWS. 
            Também participei de experiências acadêmicas em desenvolvimento de software, arquitetura de sistemas, trabalho em equipe, 
            incluindo projetos como GreenFund (.NET Core, Oracle, xUnit, Swagger) e Sistema de Cursos (Java, Spring Boot, Oracle), além de experiência com Azure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;