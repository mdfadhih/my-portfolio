import nariCover from "../assets/images/nari/nari_cover.png";
import serverlessCover from "../assets/images/serverless/serverless_cover.png";
import easyOrderCover from "../assets/images/easyorder/home.png";

export const projects = [
  {
    slug: "serverless-image-storage",
    title: "Serverless Image Storage System",
    summary:
      "A cloud-native image gallery platform that stores images in AWS S3, automatically detects objects using YOLO, generates thumbnails, and enables tag-based image search.",
    stack: [
      "React",
      "Typescript",
      "AWS Lambda",
      "API Gateway",
      "S3",
      "DynamoDB",
      "YOLO",
      "Vercel",
    ],
    featured: true,
    image: serverlessCover,
    highlights: [
      "Built a serverless architecture using AWS Lambda, API Gateway, S3, and DynamoDB.",
      "Implemented automatic object detection using YOLO to generate searchable image tags.",
      "Created thumbnail generation pipeline using Lambda triggered by S3 uploads.",
      "Developed React frontend for uploading, searching, editing tags, and deleting images.",
    ],
    links: {
      live: "https://serverless-image-storage.vercel.app",
      github: "https://github.com/mdfadhih/Cloud_Based_Image_Storage",
    },
  },

  {
    slug: "nari",
    title: "Nari — Mum-Friendly Work & Childcare Finder",
    summary:
      "A full-stack web platform that helps users discover mum-friendly workplaces and nearby childcare services using filters, comparisons, and map-based search.",
    stack: ["React", "Flask", "MySQL", "AWS", "Nginx", "MapBox API"],
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
      github: "https://github.com/mdfadhih/GenderEq",
    },
  },

  {
    slug: "easyorder",
    title: "EasyOrder — Online Grocery Ordering Web App",
    summary:
      "A responsive grocery ordering platform where users can browse products, add items to a cart, calculate totals, and send orders directly through WhatsApp.",
    stack: [
      "React",
      "JavaScript",
      "Bootstrap",
      "React Hooks",
      "WhatsApp API",
      "Vercel",
    ],
    featured: true,
    image: easyOrderCover,
    highlights: [
      "Developed a dynamic product catalog rendered from structured JSON datasets.",
      "Implemented shopping cart logic with quantity management and real-time price calculations.",
      "Built a WhatsApp order generation workflow that sends formatted order messages.",
      "Designed responsive UI using React Bootstrap for mobile and desktop users.",
    ],
    links: {
      live: "https://easy-order-one.vercel.app/",
      github: "https://github.com/mdfadhih/EasyOrder",
    },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
