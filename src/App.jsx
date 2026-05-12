import React, { useState, useEffect } from 'react';
import { 
  Server, 
  ShieldCheck, 
  Cpu, 
  Terminal, 
  Mail, 
  Link, 
  ExternalLink,
  Database,
  Cloud,
  Code,
  ArrowRight,
  MapPin,
  Globe
} from 'lucide-react';

const GitHubIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedInIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const App = () => {
  const [activeBadge, setActiveBadge] = useState(0);
  const badges = [
    "Twój partner w świecie infrastruktury",
    "Proste rozwiązania dla skomplikowanych problemów",
    "Pasja do Linuxa, doświadczenie w DevOps",
    "Twoja infrastruktura w dobrych rękach"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBadge((prev) => (prev + 1) % badges.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [badges.length]);

  const techStack = [
    "Linux", "Kubernetes", "Docker", "Ansible", "Terraform", "Proxmox", "TrueNAS", "Ceph", "Grafana", "Prometheus", "Zabbix", "Loki", "WireGuard", "OpenStack"
  ];

  const services = [
    {
      title: "DevOps & Automatyzacja",
      icon: <Terminal className="w-8 h-8 text-emerald-500" />,
      description: "Automatyzacja procesów CI/CD, konteneryzacja aplikacji oraz zarządzanie infrastrukturą jako kod (IaC).",
      tags: ["Kubernetes", "Docker", "Podman", "Terraform", "OpenTofu", "Ansible"]
    },
    {
      title: "Infrastruktura On-Premise",
      icon: <Server className="w-8 h-8 text-emerald-500" />,
      description: "Projektowanie, wdrażanie i utrzymanie wysokodostępnych środowisk lokalnych na Proxmox i fizycznym sprzęcie.",
      tags: ["Wirtualizacja", "Konteneryzacja", "Administracja Linux", "Serwery Fizyczne"]
    },
    {
      title: "Rozwiązania Storage & NAS",
      icon: <Database className="w-8 h-8 text-emerald-500" />,
      description: "Budowa i konfiguracja bezpiecznych serwerów plików oraz klastrów przechowywania danych.",
      tags: ["TrueNAS", "Ceph", "ZFS", "Kopie zapasowe", "OpenMediaVault"]
    },
    {
      title: "Observability & Monitoring",
      icon: <Cpu className="w-8 h-8 text-emerald-500" />,
      description: "Pełna analityka i wizualizacja stanu systemów. Reagowanie na incydenty zanim staną się problemem.",
      tags: ["Grafana", "Prometheus", "Zabbix", "Loki", "Alertowanie"]
    },
    {
      title: "Migracje z Chmury",
      icon: <Cloud className="w-8 h-8 text-emerald-500" />,
      description: "Odzyskaj kontrolę nad kosztami i danymi. Profesjonalne przenoszenie usług z chmur publicznych na własną infrastrukturę.",
      tags: ["Optymalizacja kosztów", "Prywatna chmura", "Bezpieczeństwo danych", "Suwerenność danych"]
    },
    {
      title: "Konsultacje IT",
      icon: <ExternalLink className="w-8 h-8 text-emerald-500" />,
      description: "Niezależne doradztwo technologiczne, wsparcie w wyborze sprzętu oraz optymalizacja architektury.",
      tags: ["Doradztwo techniczne", "Dobór sprzętu", "Architektura IT", "Optymalizacja"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 selection:bg-emerald-500/30 overflow-x-hidden">
      {/* Hero Section */}
      <header className="container mx-auto px-4 sm:px-6 pt-12 md:pt-24 pb-12 md:pb-16 text-center">
        <div className="min-h-[4rem] mb-6 md:mb-8 flex justify-center items-center px-2">
          <div key={activeBadge} className="animate-badge inline-block p-2 px-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 max-w-full">
            <span className="text-emerald-500 font-mono text-[10px] xs:text-xs sm:text-sm tracking-wider uppercase text-center block leading-relaxed">
              {badges[activeBadge]}
            </span>
          </div>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white mb-6 md:mb-8 tracking-tight break-words px-2 leading-tight">
          owczarczyk<span className="text-emerald-500">.</span>it
        </h1>
        <p className="text-base sm:text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10 px-2">
          Pomagam budować infrastrukturę, która po prostu działa. 
          <span className="block mt-4 text-slate-500 text-sm sm:text-lg md:text-xl font-light italic">
            "Łączę 6-letnie doświadczenie z pasją do rozwiązań on-premise. 
            Dbam o to, aby Twoje systemy były bezpieczne, dane zawsze dostępne, a procesy IT w pełni zautomatyzowane."
          </span>
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
          <a href="mailto:kontakt@owczarczyk.it" className="flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 text-slate-900 rounded-xl font-bold hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20 w-full sm:w-auto text-sm sm:text-base">
            Porozmawiajmy o projekcie
            <ArrowRight className="w-5 h-5" />
          </a>
          <a href="https://github.com/whoami96" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-4 bg-slate-800 text-white rounded-xl font-bold hover:bg-slate-700 transition-all border border-slate-700 w-full sm:w-auto text-sm sm:text-base">
            <GitHubIcon className="w-5 h-5" />
            GitHub
          </a>
        </div>
      </header>

      {/* Animated Tech Stack Bar */}
      <div className="border-y border-slate-800 bg-slate-900/50 py-6 md:py-10 overflow-hidden relative">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...techStack, ...techStack].map((tech, i) => (
            <span key={i} className="text-lg sm:text-2xl font-bold font-mono tracking-tighter text-slate-500 mx-6 md:mx-12 hover:text-emerald-500 transition-colors cursor-default">
              {tech}
            </span>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-slate-900 to-transparent z-10"></div>
      </div>

      {/* Services Section */}
      <section className="container mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="flex items-center gap-4 mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Jak mogę pomóc?</h2>
          <div className="h-px flex-1 bg-slate-800"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
          {services.map((service, index) => (
            <div key={index} className="group p-6 sm:p-8 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/5">
              <div className="mb-6 inline-block p-3 rounded-xl bg-slate-900/50 border border-slate-700 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-mono bg-slate-900/80 text-emerald-500/80 rounded-full border border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy Section */}
        <div className="max-w-4xl mx-auto px-2">
          <div className="p-6 sm:p-12 rounded-2xl sm:rounded-3xl bg-emerald-500/5 border border-emerald-500/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity hidden sm:block">
              <Terminal className="w-32 h-32 text-emerald-500" />
            </div>
            <h3 className="text-base sm:text-xl font-bold text-emerald-500 mb-6 font-mono uppercase tracking-widest">Dlaczego on-premise?</h3>
            <blockquote className="text-xl sm:text-3xl text-white font-light leading-snug italic">
              "Wierzę, że własna, dobrze zoptymalizowana infrastruktura to nie tylko większe bezpieczeństwo, 
              ale przede wszystkim realna wolność od rosnących kosztów publicznych chmur."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 sm:px-6 py-16 md:py-24 mb-8">
        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl sm:rounded-3xl p-6 sm:p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-6 relative z-10 text-slate-900">Zacznijmy współpracę</h2>
          <p className="text-emerald-950/80 text-base sm:text-lg mb-8 md:mb-10 max-w-xl mx-auto relative z-10 font-medium px-2">
            Szukasz wsparcia w automatyzacji, budowie serwera w biurze lub migracji z chmury? 
            Napisz do mnie – porozmawiamy o Twoim projekcie.
          </p>
          
          <div className="flex flex-col lg:flex-row justify-center items-center gap-4 relative z-10 mb-10">
            <a href="mailto:kontakt@owczarczyk.it" className="flex items-center gap-3 px-6 sm:px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-black transition-colors shadow-xl w-full sm:w-auto justify-center text-sm sm:text-base">
              <Mail className="w-5 h-5" />
              kontakt@owczarczyk.it
            </a>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="https://www.linkedin.com/in/pawel-owczarczyk/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 sm:px-8 py-4 bg-white/10 text-white backdrop-blur-sm border border-white/20 rounded-xl font-bold hover:bg-white/20 transition-all w-full sm:w-auto justify-center text-sm sm:text-base">
                <LinkedInIcon className="w-5 h-5" />
                LinkedIn
              </a>
              <a href="https://github.com/whoami96" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 sm:px-8 py-4 bg-white/10 text-white backdrop-blur-sm border border-white/20 rounded-xl font-bold hover:bg-white/20 transition-all w-full sm:w-auto justify-center text-sm sm:text-base">
                <GitHubIcon className="w-5 h-5" />
                GitHub
              </a>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-emerald-950/70 font-mono text-xs sm:text-sm relative z-10">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Szczecin (Stacjonarnie)</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <span>Cała Polska (Zdalnie)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 md:py-12 border-t border-slate-800 text-center text-slate-500 text-[10px] sm:text-xs md:text-sm font-mono">
        <p>&copy; {new Date().getFullYear()} owczarczyk.it | Built with React & Tailwind 4</p>
      </footer>
    </div>
  );
};

export default App;
