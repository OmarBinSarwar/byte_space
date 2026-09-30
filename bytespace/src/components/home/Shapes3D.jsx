// ============================================
// ByteSpace — 3D Geometric Vector Shapes
// Matching the 3D elements from Figma
// ============================================

export function LimeWavyRibbon({ className = "w-28 h-44" }) {
  return (
    <svg
      viewBox="0 0 120 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="limeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E9FF6B" />
          <stop offset="50%" stopColor="#D4F04A" />
          <stop offset="100%" stopColor="#A8D412" />
        </linearGradient>
        <filter id="shadow3D" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="4" dy="8" stdDeviation="6" floodOpacity="0.25" />
        </filter>
      </defs>
      <path
        d="M20 30 C 60 10, 100 25, 95 60 C 90 90, 30 75, 25 110 C 20 145, 95 130, 90 170 C 85 195, 55 190, 40 185"
        stroke="url(#limeGrad)"
        strokeWidth="28"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#shadow3D)"
      />
    </svg>
  );
}

export function WhiteDonut({ className = "w-28 h-28" }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <radialGradient id="whiteDonutGrad" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="70%" stopColor="#EDEDED" />
          <stop offset="100%" stopColor="#C8CCD4" />
        </radialGradient>
        <filter id="donutShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="3" dy="6" stdDeviation="5" floodOpacity="0.2" />
        </filter>
      </defs>
      <ellipse
        cx="60"
        cy="60"
        rx="48"
        ry="36"
        transform="rotate(-25 60 60)"
        fill="url(#whiteDonutGrad)"
        filter="url(#donutShadow)"
      />
      <ellipse
        cx="60"
        cy="60"
        rx="22"
        ry="15"
        transform="rotate(-25 60 60)"
        fill="#0E43F9"
      />
    </svg>
  );
}

export function WhiteSquiggle({ className = "w-20 h-20" }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="whiteSquiggleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#D5DAE1" />
        </linearGradient>
      </defs>
      <path
        d="M20 25 L 45 40 L 25 58 L 50 75"
        stroke="url(#whiteSquiggleGrad)"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WhitePyramid({ className = "w-24 h-28" }) {
  return (
    <svg
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="pyrLight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#ECEFF3" />
        </linearGradient>
        <linearGradient id="pyrShadow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D8DEE6" />
          <stop offset="100%" stopColor="#B0B9C6" />
        </linearGradient>
      </defs>
      {/* Front Face */}
      <polygon points="50,15 15,95 65,105" fill="url(#pyrLight)" />
      {/* Side Face */}
      <polygon points="50,15 65,105 92,80" fill="url(#pyrShadow)" />
    </svg>
  );
}

export function WhiteSpring({ className = "w-24 h-36" }) {
  return (
    <svg
      viewBox="0 0 90 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="springGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#CBD3DD" />
        </linearGradient>
      </defs>
      <path
        d="M25 20 C 65 15, 75 40, 45 50 C 15 60, 65 65, 70 85 C 75 105, 30 105, 35 125"
        stroke="url(#springGrad)"
        strokeWidth="18"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LimePrism({ className = "w-28 h-36" }) {
  return (
    <svg
      viewBox="0 0 100 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="limePrismTop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E9FF6B" />
          <stop offset="100%" stopColor="#D4F04A" />
        </linearGradient>
        <linearGradient id="limePrismSide" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#BFE227" />
          <stop offset="100%" stopColor="#96BD0B" />
        </linearGradient>
      </defs>
      <polygon points="20,40 60,15 85,35 45,60" fill="url(#limePrismTop)" />
      <polygon points="45,60 85,35 85,95 45,120" fill="url(#limePrismSide)" />
      <polygon points="20,40 45,60 45,120 20,100" fill="url(#limePrismTop)" />
    </svg>
  );
}
