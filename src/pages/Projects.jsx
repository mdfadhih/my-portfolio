import React, { useMemo, useState } from "react";
import { projects } from "../data/projects.js";
import ProjectCard from "../Components/ProjectCard/ProjectCard.jsx";
import "./Projects.css";

export default function Projects() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.stack.join(" ").toLowerCase().includes(q)
      );
    });
  }, [query]);

  return (
    <div className="stack-lg">
      <section>
        <h1>Projects</h1>
        <p className="muted">
          Sample text: Browse my work. Each project has a details page with tech
          stack and highlights.
        </p>

        <input
          className="input"
          placeholder="Search (React, Flask, AWS...)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </section>

      <section className="grid-3">
        {filtered.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </section>
    </div>
  );
}
