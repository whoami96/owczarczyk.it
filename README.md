# owczarczyk.it - Professional Business Card

Nowoczesna strona-wizytówka zbudowana z myślą o profesjonalnym wizerunku w świecie DevOps i infrastruktury IT.

## 🚀 Technologia

- **React 19**
- **Tailwind CSS 4**
- **Vite 8**
- **Lucide React** (Icons)
- **Podman / Docker** (Containerization)

## ✨ Funkcje

- **Dynamiczny Hero Section:** Rotujące motta biznesowe i techniczne.
- **Tech Stack Marquee:** Animowany pasek technologii z efektem hover.
- **Usługi:** Przejrzysta siatka oferowanych usług (On-premise, DevOps, Observability, Migracje).
- **Responsive Design:** Pełna obsługa urządzeń mobilnych i desktopów.
- **SEO Ready:** Skonfigurowane metatagi Open Graph dla lepszego podglądu w mediach społecznościowych.
- **Custom Favicon:** Unikalna ikona terminala `>_`.

## 🛠️ Uruchomienie lokalne

### Wymagania
- Podman (rekomendowane) lub Docker
- Podman-compose lub Docker-compose

### Instrukcja
1. Sklonuj repozytorium:
   ```bash
   git clone https://github.com/whoami96/owczarczyk.it.git
   cd owczarczyk.it
   ```

2. Uruchom kontener:
   ```bash
   podman-compose up -d --build
   ```
   LUB (ręcznie):
   ```bash
   podman build -t owczarczyk-it .
   podman run -d --name wizytowka -p 8080:80 owczarczyk-it
   ```

3. Strona będzie dostępna pod adresem: `http://localhost:8080`

## 📦 Struktura projektu
- `src/App.jsx` - Główny komponent strony i treści.
- `src/index.css` - Konfiguracja Tailwind CSS i animacji.
- `Dockerfile` - Instrukcja budowania obrazu Nginx (multi-stage build).

---
Built with 💚 by Gemini CLI for Paweł Owczarczyk.
