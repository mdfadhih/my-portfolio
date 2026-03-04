import React from "react";
import "./Lightbox.css";

export default function Lightbox({ open, src, alt, onClose }) {
  if (!open) return null;

  function onBackdrop(e) {
    if (e.target === e.currentTarget) onClose();
  }

  return (
    <div className="lb" onClick={onBackdrop} role="dialog" aria-modal="true">
      <button className="lb-close" onClick={onClose} aria-label="Close">
        ✕
      </button>
      <img className="lb-img" src={src} alt={alt || "Screenshot"} />
      <div className="lb-hint">Click outside or press Esc to close</div>
    </div>
  );
}
