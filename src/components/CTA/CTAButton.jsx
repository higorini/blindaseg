/* eslint-disable react/prop-types */
"use client";

import { useState } from "react";

export default function CTAButton({ label = "Falar com a Blindaseg", className = "" }) {
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  const animate = !(clicked || hovered || focused);
  const iconClasses = ["cta-icon", animate ? "cta-icon-animated" : ""].join(" ").trim();

  return (
    <a
      href="#contato"
      className={`cta-link group ${className}`}
      onClick={() => setClicked(true)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      <span>{label}</span>
      <span className={iconClasses} aria-hidden="true">
        &rarr;
      </span>
    </a>
  );
}
