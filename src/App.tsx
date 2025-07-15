import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <SidebarProvider>
          <div className="flex min-h-screen w-full">
            <AppSidebar />
            <main className="flex-1">
              {/* Header com trigger do sidebar */}
              <header className="fixed top-0 right-0 z-40 h-16 bg-[hsl(var(--header-bg))] border-b border-[hsl(var(--card-border))] sidebar-header md:left-60">
                <style>{`
                  /* Desktop: header respects sidebar width */
                  @media (min-width: 768px) {
                    .sidebar-header {
                      left: 240px;
                    }
                    [data-sidebar="collapsed"] ~ main .sidebar-header {
                      left: 56px;
                    }
                  }
                  /* Mobile: header takes full width */
                  @media (max-width: 767px) {
                    .sidebar-header {
                      left: 0 !important;
                    }
                  }
                `}</style>
                <div className="flex items-center justify-between h-full px-4">
                  <div className="flex items-center gap-4">
                    <SidebarTrigger className="sidebar-trigger" />
                    <h1 className="text-2xl font-bold text-[hsl(var(--primary))]">
                      Vinicius Becker
                    </h1>
                  </div>
                  <div className="flex gap-2 items-center">
                    {/* GitHub */}
                    <a 
                      href="https://github.com/Beckervini" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="header-social-btn"
                      aria-label="GitHub"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    {/* LinkedIn */}
                    <a 
                      href="https://linkedin.com/in/vinibeckerp" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="header-social-btn"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    {/* Download Currículo */}
                    <a
                      href={`${import.meta.env.BASE_URL}curriculo-vini-pdf.pdf`}
                      download
                      className="bg-[hsl(var(--primary))] text-white rounded-lg px-3 py-1 flex items-center gap-2 font-medium shadow hover:bg-[hsl(var(--primary)/0.85)] transition-colors"
                      aria-label="Baixar Currículo PDF"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 4v12" />
                      </svg>
                      <span>Currículo PDF</span>
                    </a>
                  </div>
                </div>
              </header>
              <div className="pt-16">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </main>
          </div>
        </SidebarProvider>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
