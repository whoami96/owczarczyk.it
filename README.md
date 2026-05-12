# owczarczyk.it - Professional Business Card

A modern business card website built for a professional image in the world of DevOps and IT infrastructure.

## 🚀 Technology

- **React 19**
- **Tailwind CSS 4**
- **Vite 8**
- **Lucide React** (Icons)
- **Podman / Docker** (Containerization)

## ✨ Features

- **Dynamic Hero Section:** Rotating business and technical mottos.
- **Tech Stack Marquee:** Animated technology bar with hover effects.
- **Services:** Clear grid of offered services (On-premise, DevOps, Observability, Migrations).
- **Responsive Design:** Full support for mobile and desktop devices.
- **SEO Ready:** Configured Open Graph metatags for better social media previews.
- **Custom Favicon:** Unique terminal icon `>_`.

## 🛠️ Local Setup

### Prerequisites
- Podman (recommended) or Docker
- Podman-compose or Docker-compose

### Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/whoami96/owczarczyk.it.git
   cd owczarczyk.it
   ```

2. Run the container:
   ```bash
   podman-compose up -d --build
   ```
   OR (manually):
   ```bash
   podman build -t owczarczyk-it .
   podman run -d --name business-card -p 8080:80 owczarczyk-it
   ```

3. The website will be available at: `http://localhost:8080`

## 📦 Project Structure
- `src/App.jsx` - Main page component and content.
- `src/index.css` - Tailwind CSS and animations configuration.
- `Dockerfile` - Nginx image build instructions (multi-stage build).

---
Built with 💚 by Gemini CLI for Paweł Owczarczyk.
