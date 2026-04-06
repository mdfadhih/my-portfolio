import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects.js";
import "./ProjectDetail.css";
import Page from "./page.jsx";
import Lightbox from "../components/Lightbox/Lightbox.jsx";

import nariCover from "../assets/images/nari/nari_cover.png";
import nariComlist from "../assets/images/nari/comlist.png";
import naricomcare from "../assets/images/nari/comcare.png";
import naricarechild from "../assets/images/nari/care.png";

import serverlessCover from "../assets/images/serverless/serverless_cover.png";
import serverlessSearchTag from "../assets/images/serverless/Tag.png";
import serverlessSearchImage from "../assets/images/serverless/Image.png";
import serverlessEdit from "../assets/images/serverless/edit-tags.png";
import serverlessDelete from "../assets/images/serverless/delete.png";
import serverlessImageUrl from "../assets/images/serverless/imageurl.png";
import serverlessarc from "../assets/images/serverless/Aws-serverless.jpg";

import easyOrderCover from "../assets/images/easyorder/home.png";
import easyOrderProducts from "../assets/images/easyorder/product.png";
import easyOrderCart from "../assets/images/easyorder/card.png";
import easyOrderOrder from "../assets/images/easyorder/order.png";
import easyorderFull from "../assets/images/easyorder/easyOrder.png";

import docuChatCover from "../assets/images/docuchat/DocuChat.png";
import docuChatUpload from "../assets/images/docuchat/upload.png";
// import docuChatChat from "../assets/images/docuchat/chat.png";
import docuChatAnswer from "../assets/images/docuchat/chat.png";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  const [lb, setLb] = useState({ open: false, src: "", alt: "" });

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setLb({ open: false, src: "", alt: "" });
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!project) {
    return (
      <div className="stack-lg">
        <h1>Project not found</h1>
        <Link className="btn" to="/projects">
          Back
        </Link>
      </div>
    );
  }

  const isNari = project.slug === "nari";
  const isServerless = project.slug === "serverless-image-storage";
  const isEasyOrder = project.slug === "easyorder";
  const isDocuchat = project.slug === "docuchat";

  const heroImage = isNari
    ? naricarechild
    : isServerless
      ? serverlessarc
      : isEasyOrder
        ? easyorderFull
        : isDocuchat
          ? docuChatCover
          : project.image;

  return (
    <Page>
      <div className="stack-lg">
        <Link className="link" to="/projects">
          ← Back to projects
        </Link>

        <section className="project-hero">
          {heroImage && (
            <img
              src={heroImage}
              alt={`${project.title} preview`}
              className="project-hero-img"
            />
          )}

          <div className="project-hero-info">
            <h1>{project.title}</h1>
            <p className="muted">{project.summary}</p>

            <div className="detail-badges">
              {project.stack.map((t) => (
                <span key={t} className="badge">
                  {t}
                </span>
              ))}
            </div>

            <div className="detail-actions">
              {project.links?.live && (
                <a
                  className="btn btn-primary"
                  href={project.links.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              )}
              {project.links?.github && (
                <a
                  className="btn btn-ghost"
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              )}
            </div>

            <div className="accent-line" style={{ marginTop: 16 }} />
          </div>
        </section>

        {/* ── DocuChat Screenshots ── */}
        {isDocuchat && (
          <section className="card">
            <h2>Product Screenshots</h2>
            <div className="screenshot-grid">
              <div
                className="shot"
                onClick={() =>
                  setLb({ open: true, src: docuChatCover, alt: "DocuChat UI" })
                }
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  setLb({ open: true, src: docuChatCover, alt: "DocuChat UI" })
                }
              >
                <img src={docuChatCover} alt="DocuChat main interface" />
                <span>Chat Interface</span>
              </div>

              <div
                className="shot"
                onClick={() =>
                  setLb({ open: true, src: docuChatUpload, alt: "PDF Upload" })
                }
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  setLb({ open: true, src: docuChatUpload, alt: "PDF Upload" })
                }
              >
                <img src={docuChatUpload} alt="DocuChat PDF upload screen" />
                <span>PDF Upload</span>
              </div>
              <div
                className="shot"
                onClick={() =>
                  setLb({ open: true, src: docuChatAnswer, alt: "AI Answer" })
                }
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  setLb({ open: true, src: docuChatAnswer, alt: "AI Answer" })
                }
              >
                <img src={docuChatAnswer} alt="DocuChat AI answer streaming" />
                <span>Streaming Answer</span>
              </div>
            </div>
          </section>
        )}

        {/* ── Nari Screenshots ── */}
        {isNari && (
          <section className="card">
            <h2>Product Screenshots</h2>
            <div className="screenshot-grid">
              <div
                className="shot"
                onClick={() =>
                  setLb({ open: true, src: nariCover, alt: "Homepage" })
                }
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  setLb({ open: true, src: nariCover, alt: "Homepage" })
                }
              >
                <img src={nariCover} alt="Nari homepage" />
                <span>Homepage</span>
              </div>
              <div
                className="shot"
                onClick={() =>
                  setLb({ open: true, src: nariComlist, alt: "Company Search" })
                }
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  setLb({ open: true, src: nariComlist, alt: "Company Search" })
                }
              >
                <img src={nariComlist} alt="Company directory and filters" />
                <span>Company Filters</span>
              </div>
              <div
                className="shot"
                onClick={() =>
                  setLb({
                    open: true,
                    src: naricomcare,
                    alt: "Company Comparison",
                  })
                }
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  setLb({
                    open: true,
                    src: naricomcare,
                    alt: "Company Comparison",
                  })
                }
              >
                <img src={naricomcare} alt="Company comparison" />
                <span>Comparison</span>
              </div>
              <div
                className="shot"
                onClick={() =>
                  setLb({
                    open: true,
                    src: naricarechild,
                    alt: "Childcare Map",
                  })
                }
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  setLb({
                    open: true,
                    src: naricarechild,
                    alt: "Childcare Map",
                  })
                }
              >
                <img src={naricarechild} alt="Childcare map discovery" />
                <span>Childcare Map</span>
              </div>
            </div>
          </section>
        )}

        {/* ── Serverless Screenshots ── */}
        {isServerless && (
          <section className="card">
            <h2>Product Screenshots</h2>
            <div className="screenshot-grid">
              <div
                className="shot"
                onClick={() =>
                  setLb({
                    open: true,
                    src: serverlessCover,
                    alt: "Serverless Homepage",
                  })
                }
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  setLb({
                    open: true,
                    src: serverlessCover,
                    alt: "Serverless Homepage",
                  })
                }
              >
                <img src={serverlessCover} alt="Serverless app homepage" />
                <span>Homepage</span>
              </div>
              <div
                className="shot"
                onClick={() =>
                  setLb({
                    open: true,
                    src: serverlessSearchTag,
                    alt: "Search By Tag",
                  })
                }
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  setLb({
                    open: true,
                    src: serverlessSearchTag,
                    alt: "Search By Tag",
                  })
                }
              >
                <img src={serverlessSearchTag} alt="Search images by tag" />
                <span>Search By Tag</span>
              </div>
              <div
                className="shot"
                onClick={() =>
                  setLb({
                    open: true,
                    src: serverlessSearchImage,
                    alt: "Search by image tags",
                  })
                }
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  setLb({
                    open: true,
                    src: serverlessSearchImage,
                    alt: "Search by image tags",
                  })
                }
              >
                <img src={serverlessSearchImage} alt="Search images by tags" />
                <span>Search images by tag</span>
              </div>
              <div
                className="shot"
                onClick={() =>
                  setLb({ open: true, src: serverlessEdit, alt: "Edit Tags" })
                }
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  setLb({ open: true, src: serverlessEdit, alt: "Edit Tags" })
                }
              >
                <img src={serverlessEdit} alt="Edit image tags" />
                <span>Edit Tags</span>
              </div>
              <div
                className="shot"
                onClick={() =>
                  setLb({
                    open: true,
                    src: serverlessDelete,
                    alt: "Delete Image",
                  })
                }
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  setLb({
                    open: true,
                    src: serverlessDelete,
                    alt: "Delete Image",
                  })
                }
              >
                <img src={serverlessDelete} alt="Delete image flow" />
                <span>Delete Image</span>
              </div>
              <div
                className="shot"
                onClick={() =>
                  setLb({
                    open: true,
                    src: serverlessImageUrl,
                    alt: "View By Image URL",
                  })
                }
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  setLb({
                    open: true,
                    src: serverlessImageUrl,
                    alt: "View By Image URL",
                  })
                }
              >
                <img src={serverlessImageUrl} alt="View By Image Url" />
                <span>View By Image URL</span>
              </div>
            </div>
          </section>
        )}

        {/* ── EasyOrder Screenshots ── */}
        {isEasyOrder && (
          <section className="card">
            <h2>Product Screenshots</h2>
            <div className="screenshot-grid">
              <div
                className="shot"
                onClick={() =>
                  setLb({
                    open: true,
                    src: easyOrderCover,
                    alt: "EasyOrder Homepage",
                  })
                }
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  setLb({
                    open: true,
                    src: easyOrderCover,
                    alt: "EasyOrder Homepage",
                  })
                }
              >
                <img src={easyOrderCover} alt="EasyOrder homepage" />
                <span>Homepage</span>
              </div>
              <div
                className="shot"
                onClick={() =>
                  setLb({
                    open: true,
                    src: easyOrderProducts,
                    alt: "Product Listing",
                  })
                }
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  setLb({
                    open: true,
                    src: easyOrderProducts,
                    alt: "Product Listing",
                  })
                }
              >
                <img src={easyOrderProducts} alt="EasyOrder product list" />
                <span>Product Listing</span>
              </div>
              <div
                className="shot"
                onClick={() =>
                  setLb({
                    open: true,
                    src: easyOrderCart,
                    alt: "Shopping Cart",
                  })
                }
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  setLb({
                    open: true,
                    src: easyOrderCart,
                    alt: "Shopping Cart",
                  })
                }
              >
                <img src={easyOrderCart} alt="EasyOrder shopping cart" />
                <span>Shopping Cart</span>
              </div>
              <div
                className="shot"
                onClick={() =>
                  setLb({
                    open: true,
                    src: easyOrderOrder,
                    alt: "WhatsApp Order Flow",
                  })
                }
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  setLb({
                    open: true,
                    src: easyOrderOrder,
                    alt: "WhatsApp Order Flow",
                  })
                }
              >
                <img src={easyOrderOrder} alt="EasyOrder WhatsApp order flow" />
                <span>WhatsApp Order</span>
              </div>
            </div>
          </section>
        )}

        {/* ── Highlights (all projects) ── */}
        <section className="card">
          <h2>Highlights</h2>
          <ul className="list">
            {project.highlights.map((h, idx) => (
              <li key={idx}>{h}</li>
            ))}
          </ul>
        </section>

        {/* ── DocuChat Case Study ── */}
        {isDocuchat && (
          <section className="card stack-lg">
            <h2>DocuChat Case Study</h2>

            <div className="case-grid">
              <div>
                <h3>Problem</h3>
                <p className="muted">
                  Reading through long PDF documents to find specific
                  information is slow and tedious. Users need to manually
                  search, scroll, and cross-reference sections — especially for
                  technical documents, research papers, and study materials.
                </p>
              </div>
              <div>
                <h3>Solution</h3>
                <p className="muted">
                  DocuChat uses RAG (Retrieval-Augmented Generation) to embed
                  the entire document into a vector database, then uses semantic
                  similarity search to find the most relevant sections and feeds
                  them to Gemini AI as context. Users get accurate,
                  document-grounded answers in seconds — not hallucinated
                  responses.
                </p>
              </div>
            </div>

            <div>
              <h3>Key Features</h3>
              <ul>
                <li>
                  Drag and drop PDF upload with real-time progress feedback
                </li>
                <li>
                  Automatic document-specific question suggestions after each
                  upload
                </li>
                <li>
                  Streaming AI responses — answers appear token by token in real
                  time
                </li>
                <li>
                  Semantic search — finds relevant context, not just keyword
                  matches
                </li>
                <li>
                  Multi-document support — uploading a new PDF clears previous
                  data automatically
                </li>
                <li>
                  Responsive design — works on mobile and desktop browsers
                </li>
              </ul>
            </div>

            <div>
              <h3>RAG Pipeline</h3>
              <ul>
                <li>
                  PDF text extraction using pdf-parse with 500-word chunks and
                  50-word overlap
                </li>
                <li>
                  Vector embeddings generated with Gemini gemini-embedding-001
                  (768 dimensions)
                </li>
                <li>
                  Embeddings stored in Supabase PostgreSQL with pgvector
                  extension
                </li>
                <li>
                  Cosine similarity search in JavaScript to find top 4 relevant
                  chunks
                </li>
                <li>
                  RAG prompt built with retrieved context sent to
                  gemini-2.0-flash
                </li>
                <li>
                  Streaming response delivered via Server-Sent Events (SSE)
                </li>
              </ul>
            </div>

            <div>
              <h3>Architecture</h3>
              <ul>
                <li>React + TypeScript frontend deployed on Vercel</li>
                <li>
                  Node.js + Express REST API deployed on Render (free tier)
                </li>
                <li>Google Gemini API for embeddings and answer generation</li>
                <li>Supabase PostgreSQL with pgvector for vector storage</li>
                <li>GitHub Actions CI/CD — auto-deploys on every git push</li>
              </ul>
            </div>

            <div>
              <h3>Future Improvements</h3>
              <ul>
                <li>
                  User authentication so each user has their own document
                  workspace
                </li>
                <li>
                  Support for multiple simultaneous documents with per-document
                  search
                </li>
                <li>Conversation history and multi-turn chat memory</li>
                <li>
                  Source citations — highlight which page each answer came from
                </li>
                <li>Support for Word documents, PowerPoint and web URLs</li>
                <li>Image and table extraction from PDFs</li>
              </ul>
            </div>
          </section>
        )}

        {/* ── Nari Case Study ── */}
        {isNari && (
          <section className="card stack-lg">
            <h2>Nari Case Study</h2>
            <div className="case-grid">
              <div>
                <h3>Problem</h3>
                <p className="muted">
                  Expectant and working mothers often struggle to find reliable,
                  centralized information about family-friendly employers and
                  nearby childcare services. Information is scattered and
                  difficult to compare.
                </p>
              </div>
              <div>
                <h3>Solution</h3>
                <p className="muted">
                  Nari centralizes workplace benefits data and childcare service
                  discovery in one platform. Users can filter and compare
                  workplaces, and discover services through a map-based
                  experience.
                </p>
              </div>
            </div>
            <div>
              <h3>Key Features</h3>
              <ul>
                <li>
                  Company directory with filters (benefits, rating, location)
                </li>
                <li>Side-by-side comparison flow</li>
                <li>Childcare discovery via map + location-based search</li>
                <li>Responsive UI for mobile and desktop</li>
              </ul>
            </div>
            <div>
              <h3>Architecture</h3>
              <ul>
                <li>React frontend</li>
                <li>Flask REST API</li>
                <li>MySQL database schema for structured records</li>
                <li>Linux + Nginx deployment</li>
              </ul>
            </div>
            <div>
              <h3>Future Improvements</h3>
              <ul>
                <li>User accounts + saved lists</li>
                <li>Admin dashboard for data updates</li>
                <li>Caching and pagination for faster search</li>
                <li>User reviews + verification workflow</li>
              </ul>
            </div>
          </section>
        )}

        {/* ── Serverless Case Study ── */}
        {isServerless && (
          <section className="card stack-lg">
            <h2>Serverless Image Storage Case Study</h2>
            <div className="case-grid">
              <div>
                <h3>Problem</h3>
                <p className="muted">
                  Managing images at scale requires more than simple file
                  uploads. Users need thumbnail previews, searchable metadata,
                  efficient cloud storage, and the ability to detect objects
                  automatically without manually tagging every image.
                </p>
              </div>
              <div>
                <h3>Solution</h3>
                <p className="muted">
                  I built a cloud-native serverless image management platform
                  using React and AWS. The system uploads images to S3,
                  generates thumbnails via Lambda, detects objects using YOLO,
                  stores metadata in DynamoDB, and enables tag-based image
                  search through a clean frontend.
                </p>
              </div>
            </div>
            <div>
              <h3>Key Features</h3>
              <ul>
                <li>Image upload to Amazon S3 through a React frontend</li>
                <li>Automatic thumbnail generation using AWS Lambda</li>
                <li>Object detection with YOLO for searchable image tags</li>
                <li>
                  Search by tags, edit tags, delete image, and full-size URL
                  retrieval
                </li>
                <li>Search by image workflow using detected objects</li>
              </ul>
            </div>
            <div>
              <h3>Architecture</h3>
              <ul>
                <li>React + Vite frontend deployed on Vercel</li>
                <li>API Gateway for REST endpoints</li>
                <li>
                  AWS Lambda functions for upload, thumbnail generation,
                  detection, edit, search, and delete flows
                </li>
                <li>Amazon S3 for original images and thumbnails</li>
                <li>DynamoDB for metadata and tag storage</li>
                <li>YOLO model integration for image object detection</li>
              </ul>
            </div>
            <div>
              <h3>Future Improvements</h3>
              <ul>
                <li>User authentication with AWS Cognito</li>
                <li>
                  Pagination and gallery state synchronization after
                  upload/delete
                </li>
                <li>CloudFront CDN for faster image delivery</li>
                <li>Image similarity search using embeddings</li>
              </ul>
            </div>
          </section>
        )}

        {/* ── EasyOrder Case Study ── */}
        {isEasyOrder && (
          <section className="card stack-lg">
            <h2>EasyOrder Case Study</h2>
            <div className="case-grid">
              <div>
                <h3>Problem</h3>
                <p className="muted">
                  Small grocery businesses often need a simple online ordering
                  workflow without building a full-scale e-commerce backend.
                  Customers need a fast way to browse products, manage a cart,
                  and place orders from mobile or desktop.
                </p>
              </div>
              <div>
                <h3>Solution</h3>
                <p className="muted">
                  EasyOrder provides a lightweight React-based grocery ordering
                  experience where users can browse products, filter items,
                  manage quantities, calculate totals in real time, and send
                  their final order directly through WhatsApp.
                </p>
              </div>
            </div>
            <div>
              <h3>Key Features</h3>
              <ul>
                <li>
                  Dynamic grocery product catalog rendered from structured data
                </li>
                <li>
                  Search and category-based navigation for easier browsing
                </li>
                <li>Shopping cart with quantity add/remove logic</li>
                <li>Real-time subtotal, charge, and final total calculation</li>
                <li>WhatsApp-based order generation workflow</li>
                <li>Responsive UI for mobile and desktop users</li>
              </ul>
            </div>
            <div>
              <h3>Architecture</h3>
              <ul>
                <li>React frontend with component-based UI structure</li>
                <li>Bootstrap / React Bootstrap for responsive layout</li>
                <li>
                  Local JSON-style product dataset for rendering product cards
                </li>
                <li>WhatsApp deep-link integration for order submission</li>
              </ul>
            </div>
            <div>
              <h3>Future Improvements</h3>
              <ul>
                <li>Replace placeholder images with optimized local assets</li>
                <li>Add backend API and database for persistent orders</li>
                <li>Implement authentication and admin dashboard</li>
                <li>Add payment gateway and order history support</li>
              </ul>
            </div>
          </section>
        )}
      </div>

      <Lightbox
        open={lb.open}
        src={lb.src}
        alt={lb.alt}
        onClose={() => setLb({ open: false, src: "", alt: "" })}
      />
    </Page>
  );
}
