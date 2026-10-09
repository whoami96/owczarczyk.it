import { useState, useEffect } from 'react';
import { LazyMotion, MotionConfig, domAnimation, m } from 'framer-motion';
import {
  Server,
  Cpu,
  Terminal,
  Mail,
  MessagesSquare,
  Database,
  Cloud,
  ArrowRight,
  ChevronUp,
  MapPin,
  Globe,
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

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

// Reads a VictoriaMetrics instant-query result written by the status sidecar (see docker-compose.yml).
// Returns null when the file is missing, malformed or older than 5 minutes, so the bar never shows stale data.
const fetchStatusValue = async (file) => {
  try {
    const res = await fetch(`/status/${file}`, { cache: 'no-store' });
    if (!res.ok) return null;
    const [timestamp, value] = (await res.json()).data.result[0].value;
    if (Date.now() / 1000 - timestamp > 300) return null;
    return Number(value);
  } catch {
    return null;
  }
};

const App = () => {
  const [activeBadge, setActiveBadge] = useState(0);
  const fullText = "whoami";
  const [displayText, setDisplayText] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [status, setStatus] = useState({ up: null, uptime: null });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const load = async () => {
      const [up, uptime] = await Promise.all([fetchStatusValue('up.json'), fetchStatusValue('uptime.json')]);
      setStatus({ up, uptime });
    };
    load();
    const interval = setInterval(load, 60000);
    return () => clearInterval(interval);
  }, []);

  const isDegraded = status.up === 0;
  // Floor instead of round, so 99.997% shows as 99.99% rather than 100.00%
  const uptimeLabel = status.uptime === null ? '—' : `${(Math.floor(status.uptime * 10000) / 100).toFixed(2)}%`;

  const badges = [
    "Twój partner w świecie infrastruktury",
    "Proste rozwiązania dla skomplikowanych problemów",
    "Pasja do Linuxa, doświadczenie w DevOps",
    "Twoja infrastruktura w dobrych rękach",
    "Infrastruktura, która nie zawodzi",
    "Twój system w dobrych rękach"
  ];

  useEffect(() => {
    let index = prefersReducedMotion ? fullText.length : 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBadge((prev) => (prev + 1) % badges.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [badges.length]);

  const techStack = [
    { name: "Linux", slug: "linux", url: "https://www.linux.org/" },
    { name: "Kubernetes", slug: "kubernetes", url: "https://kubernetes.io/" },
    { name: "Docker", slug: "docker", url: "https://www.docker.com/" },
    { name: "Ansible", slug: "ansible", url: "https://www.ansible.com/" },
    { name: "Terraform", slug: "terraform", url: "https://www.terraform.io/" },
    { name: "Proxmox", slug: "proxmox", url: "https://www.proxmox.com/" },
    { name: "TrueNAS", slug: "truenas", url: "https://www.truenas.com/" },
    { name: "Ceph", slug: "ceph", url: "https://ceph.com/" },
    { name: "Grafana", slug: "grafana", url: "https://grafana.com/" },
    { name: "Prometheus", slug: "prometheus", url: "https://prometheus.io/" },
    { name: "Zabbix", slug: "zabbix", url: "https://www.zabbix.com/" },
    { name: "WireGuard", slug: "wireguard", url: "https://www.wireguard.com/" },
    { name: "OpenStack", slug: "openstack", url: "https://www.openstack.org/" }
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
      icon: <MessagesSquare className="w-8 h-8 text-emerald-500" />,
      description: "Niezależne doradztwo technologiczne, wsparcie w wyborze sprzętu oraz optymalizacja architektury.",
      tags: ["Doradztwo techniczne", "Dobór sprzętu", "Architektura IT", "Optymalizacja"]
    }
  ];

  return (
    <LazyMotion features={domAnimation} strict>
    <MotionConfig reducedMotion="user">
    <div className="min-h-screen bg-slate-900 text-slate-300 selection:bg-emerald-500/30 overflow-x-hidden relative bg-grid">
      {/* Top Status Bar */}
      <div className="bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-2 px-4 sticky top-0 z-50 overflow-hidden">
        <div className="container mx-auto flex justify-between items-center text-[10px] sm:text-xs font-mono tracking-widest uppercase">
          <div className="flex items-center gap-4 sm:gap-8">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isDegraded ? 'bg-amber-400' : 'bg-emerald-400'}`}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2 ${isDegraded ? 'bg-amber-500' : 'bg-emerald-500'}`}></span>
              </span>
              <span className={`font-bold ${isDegraded ? 'text-amber-500' : 'text-emerald-500'}`}>
                {isDegraded ? 'System Degraded' : 'System Online'}
              </span>
            </div>
            <div className="flex items-center gap-2 text-slate-500">
              <MapPin className="w-3 h-3" />
              <span>Location: Szczecin</span>
            </div>
          </div>
          <div className="flex items-center gap-4 sm:gap-8 text-slate-500">
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline">Uptime 30d:</span>
              <span className="text-slate-300" title="Blackbox probe, VictoriaMetrics">{uptimeLabel}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline">Env:</span>
              <span className="text-emerald-500/80">Production</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <m.header 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 sm:px-6 pt-12 md:pt-20 pb-12 md:pb-16 text-center"
      >
        <div className="mb-8 md:mb-12 flex justify-center items-center px-2">
          <div key={activeBadge} className="animate-badge inline-flex items-center justify-center p-2.5 px-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 max-w-full min-h-[3.5rem] md:min-h-[3rem]">
            <span className="text-emerald-500 font-mono text-[11px] xs:text-xs sm:text-sm tracking-wider uppercase text-center leading-normal block">
              {badges[activeBadge]}
            </span>
          </div>
        </div>

        {/* Modern Terminal UI */}
        <div className="max-w-4xl mx-auto mb-12 px-2">
          <div className="bg-slate-950 rounded-xl border border-slate-800 shadow-2xl overflow-hidden text-left font-mono">
            {/* Terminal Header */}
            <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-2">bash — 80x24</div>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-700 hover:bg-emerald-500/40 transition-colors"></div>
                <div className="w-3 h-3 rounded-full bg-slate-700 hover:bg-amber-500/40 transition-colors"></div>
                <div className="w-3 h-3 rounded-full bg-slate-700 hover:bg-red-500/40 transition-colors"></div>
              </div>
            </div>
            
            {/* Terminal Body */}
            <div className="p-6 sm:p-10 min-h-[200px] sm:min-h-[350px]">
              <div className="flex items-center gap-x-2 text-lg sm:text-2xl md:text-3xl mb-6 flex-wrap">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">owczarczykp@server</span>
                  <span className="text-slate-500">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-slate-500">$</span>
                </div>
                <div className="flex items-center">
                  <span className="text-slate-300">{displayText}</span>
                  <span className="inline-block w-[3px] md:w-[6px] h-[1.1em] bg-emerald-500 ml-1 animate-smooth-cursor"></span>
                </div>
              </div>
              
              <m.div 
                initial="hidden"
                animate={displayText === fullText ? "show" : "hidden"}
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: { staggerChildren: 0.15, delayChildren: 0.3 }
                  }
                }}
                className="space-y-4 font-mono"
              >
                <m.div variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }} className="grid grid-cols-[88px_minmax(0,1fr)] sm:grid-cols-[180px_1fr] gap-2 items-baseline text-sm sm:text-base md:text-lg">
                  <span className="text-emerald-500/90 uppercase tracking-wider text-xs sm:text-sm font-bold">NAME:</span>
                  <span className="text-slate-200">Paweł Owczarczyk</span>
                </m.div>
                <m.div variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }} className="grid grid-cols-[88px_minmax(0,1fr)] sm:grid-cols-[180px_1fr] gap-2 items-baseline text-sm sm:text-base md:text-lg">
                  <span className="text-emerald-500/90 uppercase tracking-wider text-xs sm:text-sm font-bold">EMAIL:</span>
                  <span className="text-slate-200 break-all">kontakt@owczarczyk.it</span>
                </m.div>
                <m.div variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }} className="grid grid-cols-[88px_minmax(0,1fr)] sm:grid-cols-[180px_1fr] gap-2 items-baseline text-sm sm:text-base md:text-lg">
                  <span className="text-emerald-500/90 uppercase tracking-wider text-xs sm:text-sm font-bold">ROLE:</span>
                  <span className="text-slate-200">Inżynier systemów informatycznych / DevOps</span>
                </m.div>
                <m.div variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }} className="grid grid-cols-[88px_minmax(0,1fr)] sm:grid-cols-[180px_1fr] gap-2 items-baseline text-sm sm:text-base md:text-lg">
                  <span className="text-emerald-500/90 uppercase tracking-wider text-xs sm:text-sm font-bold">EXP:</span>
                  <span className="text-slate-200">6+ lat w IT</span>
                </m.div>
                <m.div variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }} className="grid grid-cols-[88px_minmax(0,1fr)] sm:grid-cols-[180px_1fr] gap-2 items-baseline text-sm sm:text-base md:text-lg">
                  <span className="text-emerald-500/90 uppercase tracking-wider text-xs sm:text-sm font-bold">STATUS:</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                    Dostępny do współpracy
                  </span>
                </m.div>
                
                <m.div 
                  variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                  className="text-white text-3xl sm:text-6xl md:text-8xl font-bold tracking-tight pt-8 border-t border-slate-800/50 mt-8 flex items-center gap-3 sm:gap-6"
                >
                  <Terminal className="w-8 h-8 sm:w-16 sm:h-16 md:w-20 md:h-20 text-emerald-500 shrink-0" />
                  <span>
                    owczarczyk<span className="text-emerald-500">.</span>it
                  </span>
                </m.div>
              </m.div>
            </div>
          </div>
        </div>

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
      </m.header>

      {/* Animated Tech Stack Bar */}
      <m.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="border-y border-slate-800 bg-slate-900/50 py-6 md:py-10 overflow-hidden relative"
      >
        <div className="animate-marquee flex whitespace-nowrap">
          {[...techStack, ...techStack].map((tech, i) => (
            <a 
              key={i} 
              href={tech.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-hidden={i >= techStack.length || undefined}
              tabIndex={i >= techStack.length ? -1 : undefined}
              className="flex items-center gap-3 mx-6 md:mx-12 group cursor-pointer"
            >
              <img 
                src={`/tech/${tech.slug}.svg`}
                alt={tech.name}
                className="w-6 h-6 sm:w-8 sm:h-8 opacity-70 group-hover:opacity-100 transition-all"
              />
              <span className="text-lg sm:text-2xl font-bold font-mono tracking-tighter text-slate-500 group-hover:text-emerald-500 transition-colors">
                {tech.name}
              </span>
            </a>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-slate-900 to-transparent z-10"></div>
      </m.div>

      {/* Services Section */}
      <section className="container mx-auto px-4 sm:px-6 py-16 md:py-24">
        <m.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Jak mogę pomóc?</h2>
          <div className="h-px flex-1 bg-slate-800"></div>
        </m.div>

        <m.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24"
        >
          {services.map((service, index) => (
            <m.div 
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
              className="group p-6 sm:p-8 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-emerald-500/30 transition-[border-color,box-shadow] duration-300 hover:shadow-2xl hover:shadow-emerald-500/5"
            >
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
                  <span key={tIdx} className="px-2 py-0.5 sm:px-3 sm:py-1 text-xs font-mono bg-slate-900/80 text-emerald-400 rounded-full border border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </m.div>
          ))}
        </m.div>

        {/* Philosophy Section */}
        <m.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-2"
        >
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
        </m.div>
      </section>

      {/* Contact Section */}
      <m.section 
        id="contact" 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 sm:px-6 py-16 md:py-24 mb-8"
      >
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
      </m.section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 md:py-12 border-t border-slate-800 text-center text-slate-400 text-xs md:text-sm font-mono">
        <p suppressHydrationWarning>&copy; {new Date().getFullYear()} owczarczyk.it | Built with React & Tailwind 4</p>
      </footer>

      {/* Scroll to Top Button */}
      <m.button
        initial={{ opacity: 0 }}
        animate={{ opacity: showScrollTop ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 p-4 bg-emerald-500 text-slate-950 rounded-xl shadow-2xl transition-[scale,background-color] hover:scale-110 active:scale-95 z-40 hover:bg-emerald-400 group ${!showScrollTop ? 'pointer-events-none' : ''}`}
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6 transition-transform group-hover:-translate-y-1" />
      </m.button>
    </div>
    </MotionConfig>
    </LazyMotion>
  );
};

export default App;
