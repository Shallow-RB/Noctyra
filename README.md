# 🏍️ Noctyra – Luxury Motorcycle Dealership

Welkom bij **Noctyra**: een moderne, luxe webapplicatie voor het ontdekken van high-end motorfietsen van topmerken als Yamaha, Kawasaki, BMW, Honda en Ducati. De focus ligt op een premium gebruikerservaring, rijke animaties.

---

## 🚀 Tech Stack & Architectuur

### Frontend

- **Next.js 15** – Moderne React framework voor server-side rendering, routing en API-integratie
- **React 18** – Component-based UI voor snelle, interactieve gebruikerservaringen
- **TypeScript** – Statische typechecking voor betrouwbaardere code
- **Tailwind CSS** – Utility-first CSS framework voor snelle, consistente styling
- **Framer Motion & GSAP** – Geavanceerde animaties, smooth scrolling en visuele effecten
- **Sass** – Custom component styles waar nodig
- **Lenis** – Smooth scroll library voor een vloeiende gebruikerservaring

### Backend & Database

- **Drizzle ORM** – Type-safe ORM voor Typescript, met declaratief schema (`src/db/schema.ts`)
- **PostgreSQL** – Robuuste relationele database, gehost via [Neon](https://neon.tech/) (serverless Postgres)
- **Drizzle Kit** – Database migraties, schema management en lokale development workflows

### Overige Tools

- **Radix UI** – Toegankelijke, headless UI primitives
- **Lucide React** – Moderne, schaalbare iconen
- **Prettier & ESLint** – Code formatting en linting voor consistente codebase
- **Zod** – Type-safe schema validatie
- **PNPM** – Snel, efficiënt package management

---

## 🏗️ Features

- **Dynamische merk- en modelpagina’s**  
  Elke motorfiets en elk merk heeft een eigen, dynamisch gegenereerde pagina met specs, video’s en animaties.
- **Geavanceerde animaties**  
  Parallax, text reveals, carousels en smooth scroll voor een luxe uitstraling.
- **Database-gedreven content**  
  Motorfietsen, specs, afbeeldingen en video’s worden uit een PostgreSQL database geladen via Drizzle ORM.
- **Schaalbare architectuur**  
  Serverless database, moderne build tooling en modulaire codebase.

---

## 📁 Structuur

```
src/app/         # Next.js app directory (routes, pages, layouts)
src/components/  # Herbruikbare UI componenten
src/db/          # Database schema en ORM setup
src/data/        # Statische data (zoals logo’s)
public/          # Publieke assets (media, video’s, afbeeldingen)
```

---

## 💡 Deployment

- **Serverless ready:**  
  Dankzij Neon serverless Postgres en Next.js kan Noctyra eenvoudig worden gedeployed op platforms als Vercel, Netlify of eigen cloud infra.

---

## 📜 License

MIT
