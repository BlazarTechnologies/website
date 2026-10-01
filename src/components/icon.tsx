export function Icon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M408 104 275.2 249.6 262.4 236.8Z M104 408 236.8 262.4 249.6 275.2Z" />
      <ellipse
        cx="256"
        cy="256"
        rx="144"
        ry="57.6"
        transform="rotate(45 256 256)"
        fill="none"
        stroke="currentColor"
        strokeWidth="25.6"
      />
      <circle cx="256" cy="256" r="41.6" />
    </svg>
  );
}
