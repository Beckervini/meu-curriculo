import { Home, User, Code, Briefcase, FolderOpen, GraduationCap, Mail } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Início", id: "about", icon: Home },
  { title: "Habilidades", id: "skills", icon: Code },
  { title: "Experiência", id: "experience", icon: Briefcase },
  { title: "Projetos", id: "projects", icon: FolderOpen },
  { title: "Formação", id: "education", icon: GraduationCap },
  { title: "Contatos", id: "contacts", icon: Mail },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <Sidebar
      className={`${isCollapsed ? "w-14" : "w-60"} bg-[hsl(var(--sidebar-bg))] border-r border-[hsl(var(--sidebar-border))]`}
      collapsible="icon"
    >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-[hsl(var(--text-secondary))] font-semibold px-3 py-2">
            {!isCollapsed && "Navegação"}
          </SidebarGroupLabel>
          
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton 
                    onClick={() => scrollToSection(item.id)}
                    className="sidebar-nav-btn"
                  >
                    <item.icon className="h-5 w-5 text-[hsl(var(--primary))]" />
                    {!isCollapsed && (
                      <span className="text-[hsl(var(--text-primary))] font-medium">
                        {item.title}
                      </span>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}