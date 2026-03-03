export const projects = [
  {
    slug: "nari",
    title: "Nari — Women-focused Support Platform",
    summary:
      "Search mum-friendly workplaces and childcare services with filters, comparisons, and maps.",
    stack: ["React", "Flask", "MySQL", "AWS", "Nginx"],
    featured: true,
    highlights: [
      "Built filtering + comparison flow for companies.",
      "Implemented map-based discovery for childcare/services.",
      "Deployed with reverse proxy + database in production setup.",
    ],
    links: {
      live: "https://YOUR-LIVE-LINK.com",
      github: "https://github.com/YOUR-USERNAME/YOUR-REPO",
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
