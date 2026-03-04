import nariCover from "../assets/images/nari/nari_cover.png";

export const projects = [
  {
    slug: "nari",
    title: "Nari — Mum-Friendly Work & Childcare Finder",
    summary:
      "A full-stack web platform that helps users discover mum-friendly workplaces and nearby childcare services using filters, comparisons, and map-based search.",
    stack: ["React", "Flask", "MySQL", "AWS", "Nginx", "MapBoxApI"],
    featured: true,
    image: nariCover,
    highlights: [
      "Built a searchable company directory with filtering (benefits, rating, location) and a comparison flow.",
      "Implemented map-based discovery for childcare services with distance/location filtering.",
      "Designed a REST API + relational schema for structured company and service data.",
      "Deployed to a Linux server with Nginx reverse proxy and production configuration.",
    ],
    links: {
      live: "https://gendereq.onrender.com",
      github: "https://github.com/mdfadhih",
    },
  },
  {
    slug: "portfolio",
    title: "Portfolio Website",
    summary:
      "This portfolio built with React + CSS, deployed on Vercel with scalable project pages.",
    stack: ["React", "Vite", "CSS", "Vercel"],
    featured: true,
    highlights: [
      "Clean recruiter-friendly layout.",
      "Project pages generated from one data file.",
      "Responsive UI with reusable components.",
    ],
    links: {
      live: "https://YOUR-PORTFOLIO.vercel.app",
      github: "https://github.com/YOUR-USERNAME/my-portfolio",
    },
  },
  {
    slug: "sample-dashboard",
    title: "Sample Dashboard",
    summary:
      "API-driven dashboard with sorting, filtering, loading states, and clean UI.",
    stack: ["React", "REST API", "JavaScript"],
    featured: false,
    highlights: [
      "Reusable components and state handling.",
      "Sorting + filtering + pagination template.",
      "Error/loading handling patterns.",
    ],
    links: {
      live: "#",
      github: "#",
    },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
