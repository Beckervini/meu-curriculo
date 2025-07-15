import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[hsl(var(--background))]">
      <div className="text-center portfolio-card">
        <h1 className="text-4xl font-bold mb-4 text-[hsl(var(--text-primary))]">404</h1>
        <p className="text-xl text-[hsl(var(--text-secondary))] mb-4">Página não encontrada</p>
        <a 
          href="/" 
          className="text-[hsl(var(--primary))] hover:text-[hsl(var(--primary-dark))] underline transition-colors"
        >
          Voltar ao Início
        </a>
      </div>
    </div>
  );
};

export default NotFound;
