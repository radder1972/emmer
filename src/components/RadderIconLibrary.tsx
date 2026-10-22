import React from 'react';

export interface RadderIconProps {
  className?: string;
  size?: number | string;
  color?: string;
  strokeWidth?: number;
}

// 01. MANIFEST ICON
export const RadderIconManifest: React.FC<RadderIconProps> = ({
  className = '',
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`inline-block shrink-0 align-middle ${className}`}
    aria-label="RaddeR Manifest Icon"
  >
    <line x1="12" y1="3" x2="12" y2="21" />
    <path d="M 12 5.5 C 8.5 3, 3.5 4.2, 3.5 8.5 C 3.5 12.8, 8 13.8, 12 14.8" />
    <path d="M 12 5.5 C 15.5 3, 20.5 4.2, 20.5 8.5 C 20.5 12.8, 16 13.8, 12 14.8" />
    <line x1="6.5" y1="9" x2="9.5" y2="9" />
    <line x1="14.5" y1="9" x2="17.5" y2="9" />
    <line x1="4" y1="21" x2="20" y2="21" />
  </svg>
);

// 02. CASES ICON
export const RadderIconCases: React.FC<RadderIconProps> = ({
  className = '',
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`inline-block shrink-0 align-middle ${className}`}
    aria-label="RaddeR Cases Icon"
  >
    <path d="M 8.5 7 L 8.5 5 C 8.5 3.9, 9.4 3, 10.5 3 L 13.5 3 C 14.6 3, 15.5 3.9, 15.5 5 L 15.5 7" />
    <rect x="3" y="7" width="18" height="14" rx="2" />
    <line x1="3" y1="12.5" x2="21" y2="12.5" />
    <circle cx="12" cy="12.5" r="1.5" />
    <line x1="10" y1="17" x2="14" y2="17" />
  </svg>
);

// 03. ABOUT ICON
export const RadderIconAbout: React.FC<RadderIconProps> = ({
  className = '',
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`inline-block shrink-0 align-middle ${className}`}
    aria-label="RaddeR About Icon"
  >
    <polygon points="12,3 21,20 3,20" />
    <circle cx="12" cy="13" r="3" />
    <line x1="12" y1="3" x2="12" y2="10" />
    <line x1="12" y1="16" x2="12" y2="20" />
    <line x1="6.8" y1="17" x2="9.4" y2="14.5" />
    <line x1="17.2" y1="17" x2="14.6" y2="14.5" />
  </svg>
);

// 04. SPARREN ICON
export const RadderIconSparren: React.FC<RadderIconProps> = ({
  className = '',
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`inline-block shrink-0 align-middle ${className}`}
    aria-label="RaddeR Sparren Icon"
  >
    <path d="M 3 6 L 15 6 C 16.65 6, 18 7.35, 18 9 L 18 12 C 18 13.65, 16.65 15, 15 15 L 9 15 L 4 19 L 5 15 L 3 15 C 2.45 15, 2 14.55, 2 14 L 2 7 C 2 6.45, 2.45 6, 3 6 Z" />
    <path d="M 12 18 L 15 18 C 19 18, 22 15.5, 22 11.5 C 22 10.2, 21.3 9, 20.2 8.2" />
    <line x1="7" y1="10.5" x2="13" y2="10.5" />
    <line x1="7" y1="13" x2="11" y2="13" />
  </svg>
);

// 05. STRATEEG ICON
export const RadderIconStrateeg: React.FC<RadderIconProps> = ({
  className = '',
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`inline-block shrink-0 align-middle ${className}`}
    aria-label="RaddeR Strateeg Icon"
  >
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="3.5" />
    <line x1="12" y1="1" x2="12" y2="5" />
    <line x1="12" y1="19" x2="12" y2="23" />
    <line x1="1" y1="12" x2="5" y2="12" />
    <line x1="19" y1="12" x2="23" y2="12" />
    <line x1="12" y1="8.5" x2="12" y2="9.5" />
    <line x1="12" y1="14.5" x2="12" y2="15.5" />
  </svg>
);

// 06. ARCHITECT ICON
export const RadderIconArchitect: React.FC<RadderIconProps> = ({
  className = '',
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`inline-block shrink-0 align-middle ${className}`}
    aria-label="RaddeR Architect Icon"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="9" y1="3" x2="9" y2="21" />
    <line x1="15" y1="9" x2="15" y2="21" />
    <line x1="9" y1="15" x2="21" y2="15" />
    <circle cx="9" cy="9" r="1.5" fill={color} />
  </svg>
);

// 06B. CPU / ARCHITECT CORE ICON
export const RadderIconCpu: React.FC<RadderIconProps> = ({
  className = '',
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`inline-block shrink-0 align-middle ${className}`}
    aria-label="RaddeR CPU Core Icon"
  >
    <rect x="5" y="5" width="14" height="14" rx="2" />
    <rect x="9" y="9" width="6" height="6" rx="1" />
    <line x1="9" y1="2" x2="9" y2="5" />
    <line x1="15" y1="2" x2="15" y2="5" />
    <line x1="9" y1="19" x2="9" y2="22" />
    <line x1="15" y1="19" x2="15" y2="22" />
    <line x1="2" y1="9" x2="5" y2="9" />
    <line x1="2" y1="15" x2="5" y2="15" />
    <line x1="19" y1="9" x2="22" y2="9" />
    <line x1="19" y1="15" x2="22" y2="15" />
  </svg>
);

// 07. MAKER ICON
export const RadderIconMaker: React.FC<RadderIconProps> = ({
  className = '',
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`inline-block shrink-0 align-middle ${className}`}
    aria-label="RaddeR Maker Icon"
  >
    <path d="M 3 21 L 21 21 L 21 16 L 16 16 L 16 8 L 8 8 L 8 3 L 3 3 Z" />
    <circle cx="7" cy="7" r="1.5" />
    <line x1="3" y1="11" x2="6" y2="11" />
    <line x1="3" y1="16" x2="6" y2="16" />
    <line x1="11" y1="21" x2="11" y2="18" />
    <line x1="16" y1="21" x2="16" y2="18" />
  </svg>
);

// 08. ENGINE ICON (DE MOTOR)
export const RadderIconEngine: React.FC<RadderIconProps> = ({
  className = '',
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`inline-block shrink-0 align-middle ${className}`}
    aria-label="RaddeR Engine Icon"
  >
    <rect x="4" y="8" width="16" height="12" rx="2" />
    <path d="M 8 8 L 8 4 L 16 4 L 16 8" />
    <path d="M 2 13 L 4 13" />
    <path d="M 20 13 L 22 13" />
    <circle cx="12" cy="14" r="3" />
    <line x1="12" y1="11" x2="12" y2="9.5" />
    <line x1="12" y1="17" x2="12" y2="18.5" />
  </svg>
);

// 09. TERMINAL ICON
export const RadderIconTerminal: React.FC<RadderIconProps> = ({
  className = '',
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`inline-block shrink-0 align-middle ${className}`}
    aria-label="RaddeR Terminal Icon"
  >
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <polyline points="7 9 10 12 7 15" />
    <line x1="12" y1="15" x2="17" y2="15" />
  </svg>
);

// 10. SPARKLES ICON
export const RadderIconSparkles: React.FC<RadderIconProps> = ({
  className = '',
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`inline-block shrink-0 align-middle ${className}`}
    aria-label="RaddeR Sparkles Icon"
  >
    <path d="M 12 2 C 12 7, 16 11, 21 11 C 16 11, 12 15, 12 20 C 12 15, 8 11, 3 11 C 8 11, 12 7, 12 2 Z" />
    <path d="M 19 2 C 19 3.5, 20.5 4.5, 22 4.5 C 20.5 4.5, 19 5.5, 19 7 C 19 5.5, 17.5 4.5, 16 4.5 C 17.5 4.5, 19 3.5, 19 2 Z" />
  </svg>
);

// 11. ZAP ICON
export const RadderIconZap: React.FC<RadderIconProps> = ({
  className = '',
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`inline-block shrink-0 align-middle ${className}`}
    aria-label="RaddeR Zap Icon"
  >
    <path d="M 13 2.5 L 5 13.5 L 12 13.5 L 11 21.5 L 19 10.5 L 12 10.5 Z" />
  </svg>
);

// 12. DATABASE ICON
export const RadderIconDatabase: React.FC<RadderIconProps> = ({
  className = '',
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`inline-block shrink-0 align-middle ${className}`}
    aria-label="RaddeR Database Icon"
  >
    <ellipse cx="12" cy="5" rx="8" ry="3" />
    <path d="M 4 5 L 4 11 C 4 12.66, 7.58 14, 12 14 C 16.42 14, 20 12.66, 20 11 L 20 5" />
    <path d="M 4 11 L 4 17 C 4 18.66, 7.58 20, 12 20 C 16.42 20, 20 18.66, 20 17 L 20 11" />
    <line x1="12" y1="8" x2="12" y2="11" />
    <line x1="12" y1="14" x2="12" y2="17" />
  </svg>
);

// 13. API ICON
export const RadderIconApi: React.FC<RadderIconProps> = ({
  className = '',
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`inline-block shrink-0 align-middle ${className}`}
    aria-label="RaddeR API Icon"
  >
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="6" r="3" />
    <circle cx="18" cy="18" r="3" />
    <path d="M 9 12 L 12 12 L 15 8" />
    <path d="M 12 12 L 15 16" />
    <line x1="14" y1="6" x2="15" y2="6" />
  </svg>
);

// 14. CODE ICON
export const RadderIconCode: React.FC<RadderIconProps> = ({
  className = '',
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`inline-block shrink-0 align-middle ${className}`}
    aria-label="RaddeR Code Icon"
  >
    <polyline points="8 6 2 12 8 18" />
    <polyline points="16 6 22 12 16 18" />
    <line x1="14" y1="4" x2="10" y2="20" />
  </svg>
);

// 15. CLOUD ICON
export const RadderIconCloud: React.FC<RadderIconProps> = ({
  className = '',
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`inline-block shrink-0 align-middle ${className}`}
    aria-label="RaddeR Cloud Icon"
  >
    <path d="M 17.5 19 L 9 19 A 7 7 0 1 1 15.71 10 L 17.5 10 A 4.5 4.5 0 1 1 17.5 19 Z" />
    <polyline points="12 12 12 16" />
    <polyline points="10 14 12 12 14 14" />
  </svg>
);

// 16. SERVER ICON
export const RadderIconServer: React.FC<RadderIconProps> = ({
  className = '',
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`inline-block shrink-0 align-middle ${className}`}
    aria-label="RaddeR Server Icon"
  >
    <rect x="3" y="4" width="18" height="6" rx="1" />
    <rect x="3" y="14" width="18" height="6" rx="1" />
    <circle cx="6.5" cy="7" r="0.75" fill={color} />
    <circle cx="9.5" cy="7" r="0.75" fill={color} />
    <circle cx="6.5" cy="17" r="0.75" fill={color} />
    <circle cx="9.5" cy="17" r="0.75" fill={color} />
    <line x1="14" y1="7" x2="18" y2="7" />
    <line x1="14" y1="17" x2="18" y2="17" />
  </svg>
);

// 17. SHIELD ICON
export const RadderIconShield: React.FC<RadderIconProps> = ({
  className = '',
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`inline-block shrink-0 align-middle ${className}`}
    aria-label="RaddeR Shield Icon"
  >
    <path d="M 12 3 C 12 3, 20 6.5, 20 12.5 C 20 17.5, 15.5 21, 12 22 C 8.5 21, 4 17.5, 4 12.5 C 4 6.5, 12 3, 12 3 Z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

// 18. AUDIT / INSPECTION ICON
export const RadderIconAudit: React.FC<RadderIconProps> = ({
  className = '',
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`inline-block shrink-0 align-middle ${className}`}
    aria-label="RaddeR Audit Icon"
  >
    <circle cx="11" cy="11" r="7" />
    <line x1="21" y1="21" x2="16" y2="16" />
    <line x1="11" y1="8" x2="11" y2="14" />
    <line x1="8" y1="11" x2="14" y2="11" />
  </svg>
);

// 19. SPEED ICON
export const RadderIconSpeed: React.FC<RadderIconProps> = ({
  className = '',
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`inline-block shrink-0 align-middle ${className}`}
    aria-label="RaddeR Speed Icon"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M 12 12 L 16 8" />
    <line x1="12" y1="3" x2="12" y2="5" />
    <line x1="3" y1="12" x2="5" y2="12" />
    <line x1="21" y1="12" x2="19" y2="12" />
    <circle cx="12" cy="12" r="2" fill={color} />
  </svg>
);

// 20. TABLE TENNIS ICON
export const RadderIconTableTennis: React.FC<RadderIconProps> = ({
  className = '',
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`inline-block shrink-0 align-middle ${className}`}
    aria-label="RaddeR Table Tennis Icon"
  >
    <circle cx="10" cy="10" r="6.5" />
    <path d="M 6 13 C 8 15, 12 15, 14 13" />
    <path d="M 14.5 14.5 L 18.5 18.5 C 19.3 19.3, 19.3 20.5, 18.5 21.3 C 17.7 22.1, 16.5 22.1, 15.7 21.3 L 11.7 17.3" />
    <circle cx="18.5" cy="5.5" r="2" fill={color} />
    <path d="M 3.5 9 C 3.5 5.5, 7 3.5, 10.5 3.5" />
  </svg>
);

// 21. CONFIGURATOR / SLIDERS ICON
export const RadderIconConfigurator: React.FC<RadderIconProps> = ({
  className = '',
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`inline-block shrink-0 align-middle ${className}`}
    aria-label="RaddeR Configurator Icon"
  >
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="7" y1="13" x2="17" y2="13" />
    <circle cx="10" cy="13" r="1.5" fill={color} />
    <line x1="7" y1="16.5" x2="17" y2="16.5" />
    <circle cx="14" cy="16.5" r="1.5" fill={color} />
  </svg>
);

// 22. HEALTH / MEDICAL ICON
export const RadderIconHealth: React.FC<RadderIconProps> = ({
  className = '',
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`inline-block shrink-0 align-middle ${className}`}
    aria-label="RaddeR Health Icon"
  >
    <path d="M 2 12 L 6 12 L 8.5 6 L 12.5 18 L 15 11 L 17 14 L 22 14" />
    <rect x="17" y="3" width="5" height="5" rx="1" />
    <line x1="19.5" y1="4.2" x2="19.5" y2="6.8" />
    <line x1="18.2" y1="5.5" x2="20.8" y2="5.5" />
  </svg>
);

// 23. MAP PIN / BEACON ICON
export const RadderIconMapPin: React.FC<RadderIconProps> = ({
  className = '',
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`inline-block shrink-0 align-middle ${className}`}
    aria-label="RaddeR Map Pin Icon"
  >
    <path d="M 12 2 C 8.13 2, 5 5.13, 5 9 C 5 14.25, 12 22, 12 22 C 12 22, 19 14.25, 19 9 C 19 5.13, 15.87 2, 12 2 Z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

// 24. MAIL / ENVELOPE ICON
export const RadderIconMail: React.FC<RadderIconProps> = ({
  className = '',
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`inline-block shrink-0 align-middle ${className}`}
    aria-label="RaddeR Mail Icon"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <polyline points="3 7 12 13 21 7" />
  </svg>
);

// 25. COPY / DUPLICATE ICON
export const RadderIconCopy: React.FC<RadderIconProps> = ({
  className = '',
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`inline-block shrink-0 align-middle ${className}`}
    aria-label="RaddeR Copy Icon"
  >
    <rect x="9" y="9" width="11" height="11" rx="2" />
    <path d="M 5 15 L 4 15 C 2.9 15, 2 14.1, 2 13 L 2 4 C 2 2.9, 2.9 2, 4 2 L 13 2 C 14.1 2, 15 2.9, 15 4 L 15 5" />
  </svg>
);

// 26. CHECK / VERIFIED ICON
export const RadderIconCheck: React.FC<RadderIconProps> = ({
  className = '',
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`inline-block shrink-0 align-middle ${className}`}
    aria-label="RaddeR Check Icon"
  >
    <circle cx="12" cy="12" r="9" />
    <polyline points="8 12 11 15 16 9" />
  </svg>
);

// 27. GLOBE / MERIDIAN ICON
export const RadderIconGlobe: React.FC<RadderIconProps> = ({
  className = '',
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`inline-block shrink-0 align-middle ${className}`}
    aria-label="RaddeR Globe Icon"
  >
    <circle cx="12" cy="12" r="9" />
    <ellipse cx="12" cy="12" rx="4" ry="9" />
    <line x1="3" y1="12" x2="21" y2="12" />
  </svg>
);

// 28. LAYERS ICON
export const RadderIconLayers: React.FC<RadderIconProps> = ({
  className = '',
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`inline-block shrink-0 align-middle ${className}`}
    aria-label="RaddeR Layers Icon"
  >
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 12 12 17 22 12" />
    <polyline points="2 17 12 22 22 17" />
  </svg>
);

export interface IconDefinition {
  id: string;
  name: string;
  componentName: string;
  category: 'Merk & Navigatie' | 'De Motor & Systeem' | 'Tools & Craft' | 'Domein & Cases';
  description: string;
  tags: string[];
  Component: React.FC<RadderIconProps>;
}

export const RADDER_ICONS_COLLECTION: IconDefinition[] = [
  // 1. Merk & Navigatie
  {
    id: 'manifest',
    name: 'Manifest',
    componentName: 'RadderIconManifest',
    category: 'Merk & Navigatie',
    description: 'Symmetrisch architecturaal decreet met centrale ruggengraat en dubbele R-bogen.',
    tags: ['manifest', 'decree', 'folio', 'brand', 'navigatie'],
    Component: RadderIconManifest,
  },
  {
    id: 'cases',
    name: 'Cases',
    componentName: 'RadderIconCases',
    category: 'Merk & Navigatie',
    description: 'Structurele portfolio-case met buisvormig handvat en modulaire vakken.',
    tags: ['cases', 'portfolio', 'werk', 'koffer', 'productie'],
    Component: RadderIconCases,
  },
  {
    id: 'about',
    name: 'Over Ons',
    componentName: 'RadderIconAbout',
    category: 'Merk & Navigatie',
    description: 'Architecturale triade met centraal vizier: de maker achter de code.',
    tags: ['over-ons', 'maker', 'driehoek', 'visie', 'matthias'],
    Component: RadderIconAbout,
  },
  {
    id: 'sparren',
    name: 'Sparren',
    componentName: 'RadderIconSparren',
    category: 'Merk & Navigatie',
    description: 'Symmetrische dialooggolven en dynamische vonken die elkaar ontmoeten.',
    tags: ['sparren', 'contact', 'dialoog', 'gesprek', 'motor'],
    Component: RadderIconSparren,
  },

  // 2. De Motor & Systeem
  {
    id: 'engine',
    name: 'De Motor',
    componentName: 'RadderIconEngine',
    category: 'De Motor & Systeem',
    description: 'Het mechanische hart: cilinders, zuigers en krukas die de bedrijfslogica aandrijven.',
    tags: ['motor', 'engine', 'machine', 'hardware', 'performance'],
    Component: RadderIconEngine,
  },
  {
    id: 'terminal',
    name: 'Terminal',
    componentName: 'RadderIconTerminal',
    category: 'De Motor & Systeem',
    description: 'Ontwikkelaarsprompt >_ verwerkt in een architecturaal systeemkader.',
    tags: ['terminal', 'cli', 'prompt', 'code', 'command'],
    Component: RadderIconTerminal,
  },
  {
    id: 'database',
    name: 'Database',
    componentName: 'RadderIconDatabase',
    category: 'De Motor & Systeem',
    description: 'Cilindrische datastack met centrale communicatie-bus en gelaagde opslag.',
    tags: ['database', 'data', 'sql', 'storage', 'datalake'],
    Component: RadderIconDatabase,
  },
  {
    id: 'cpu',
    name: 'Architect Core',
    componentName: 'RadderIconCpu',
    category: 'De Motor & Systeem',
    description: 'Microprocessor core met modulaire datalijnen en silicium verwerkingskracht.',
    tags: ['cpu', 'processor', 'architectuur', 'hardware', 'chip'],
    Component: RadderIconCpu,
  },
  {
    id: 'api',
    name: 'API Connect',
    componentName: 'RadderIconApi',
    category: 'De Motor & Systeem',
    description: 'Interconnectieve netwerknodes voor vlijmscherpe data-overdracht.',
    tags: ['api', 'webhook', 'connect', 'nodes', 'integratie'],
    Component: RadderIconApi,
  },
  {
    id: 'code',
    name: 'Broncode',
    componentName: 'RadderIconCode',
    category: 'De Motor & Systeem',
    description: 'Zuivere architecturale code-haakjes met scheidings-slash.',
    tags: ['code', 'brackets', 'syntax', 'react', 'typescript'],
    Component: RadderIconCode,
  },
  {
    id: 'server',
    name: 'Server Rack',
    componentName: 'RadderIconServer',
    category: 'De Motor & Systeem',
    description: 'Dubbele rackmount serverblades met statusleds en buskanalen.',
    tags: ['server', 'rack', 'infrastructure', 'devops', 'host'],
    Component: RadderIconServer,
  },
  {
    id: 'cloud',
    name: 'Cloud Node',
    componentName: 'RadderIconCloud',
    category: 'De Motor & Systeem',
    description: 'Robuuste cloud-interface met geïntegreerde upload/download vector.',
    tags: ['cloud', 'aws', 'vercel', 'deploy', 'edge'],
    Component: RadderIconCloud,
  },

  // 3. Tools & Craft
  {
    id: 'strateeg',
    name: 'De Strateeg',
    componentName: 'RadderIconStrateeg',
    category: 'Tools & Craft',
    description: 'Tactisch kompas en precisie-vizier voor vroege marktvalidatie.',
    tags: ['strateeg', 'kompas', 'validatie', 'focus', 'richting'],
    Component: RadderIconStrateeg,
  },
  {
    id: 'architect',
    name: 'De Architect',
    componentName: 'RadderIconArchitect',
    category: 'Tools & Craft',
    description: 'Systeemarchitectuur raster en modulaire blauwdrukken.',
    tags: ['architect', 'blauwdruk', 'schema', 'systeem', 'fundament'],
    Component: RadderIconArchitect,
  },
  {
    id: 'maker',
    name: 'De Maker',
    componentName: 'RadderIconMaker',
    category: 'Tools & Craft',
    description: 'Geometrische winkelhaak, aambeeld en tastbaar vakmanschap.',
    tags: ['maker', 'vakmanschap', 'constructie', 'bouwen', 'ambacht'],
    Component: RadderIconMaker,
  },
  {
    id: 'zap',
    name: 'Zero-Lag Pulse',
    componentName: 'RadderIconZap',
    category: 'Tools & Craft',
    description: 'Geometrische energieflits met scherpe schuine sneden: directe executie.',
    tags: ['zap', 'energie', 'bliksem', 'snelheid', 'sub-second'],
    Component: RadderIconZap,
  },
  {
    id: 'sparkles',
    name: 'Agentic AI Spark',
    componentName: 'RadderIconSparkles',
    category: 'Tools & Craft',
    description: 'Vierpuntige geometrische ster als symbool voor autonome AI-ontwikkeling.',
    tags: ['sparkles', 'ai', 'agentic', 'innovatie', 'ster'],
    Component: RadderIconSparkles,
  },
  {
    id: 'shield',
    name: 'Security Shield',
    componentName: 'RadderIconShield',
    category: 'Tools & Craft',
    description: 'Gefacetteerd beveiligingsschild met interne validatie-check.',
    tags: ['shield', 'beveiliging', 'nda', 'privacy', 'ip'],
    Component: RadderIconShield,
  },
  {
    id: 'audit',
    name: 'Audit Lens',
    componentName: 'RadderIconAudit',
    category: 'Tools & Craft',
    description: 'Precisielens met dradenkruis voor grondige code- en architectuuraudits.',
    tags: ['audit', 'lens', 'inspectie', 'analyse', 'kwaliteit'],
    Component: RadderIconAudit,
  },
  {
    id: 'speed',
    name: 'Snelheidsmeter',
    componentName: 'RadderIconSpeed',
    category: 'Tools & Craft',
    description: 'Tachometer / snelheidsmeter gericht op 100/100 Core Web Vitals.',
    tags: ['speed', 'performance', 'vitals', 'sub-300ms', 'tempo'],
    Component: RadderIconSpeed,
  },

  // 4. Domein & Cases
  {
    id: 'tabletennis',
    name: 'Tafeltennis',
    componentName: 'RadderIconTableTennis',
    category: 'Domein & Cases',
    description: 'Sportief batje met akoestische stuiterbaan en procedurale audiosfeer.',
    tags: ['tafeltennis', 'sport', 'ttclinics', 'audio', 'vitaliteit'],
    Component: RadderIconTableTennis,
  },
  {
    id: 'configurator',
    name: 'B2B Configurator',
    componentName: 'RadderIconConfigurator',
    category: 'Domein & Cases',
    description: 'Parametrische schuifregelaars en millimeter-precisie calculaties.',
    tags: ['configurator', 'palrom', 'hout', 'sliders', 'b2b'],
    Component: RadderIconConfigurator,
  },
  {
    id: 'health',
    name: 'HealthTech Pulse',
    componentName: 'RadderIconHealth',
    category: 'Domein & Cases',
    description: 'Klinische elektrocardiogram-puls gekoppeld aan medische bescherming.',
    tags: ['health', 'psychologie', 'schematherapie', 'zorg', 'ecg'],
    Component: RadderIconHealth,
  },
  {
    id: 'mappin',
    name: 'Geo Beacon',
    componentName: 'RadderIconMapPin',
    category: 'Domein & Cases',
    description: 'Lokale autoriteitspin met akoestisch bereik voor regionale dominantie.',
    tags: ['mappin', 'locatie', 'staopstoelen', 'lokaal', 'geo'],
    Component: RadderIconMapPin,
  },
  {
    id: 'mail',
    name: 'Direct Mail',
    componentName: 'RadderIconMail',
    category: 'Domein & Cases',
    description: 'Strakke envelop met geometrische vouw voor directe correspondentie.',
    tags: ['mail', 'contact', 'bericht', 'inbox', 'post'],
    Component: RadderIconMail,
  },
  {
    id: 'copy',
    name: 'Kopieer',
    componentName: 'RadderIconCopy',
    category: 'Domein & Cases',
    description: 'Gelaagde architecturale tekenbladen voor één-klik duplicatie.',
    tags: ['copy', 'klembord', 'kloon', 'dupliceer', 'code'],
    Component: RadderIconCopy,
  },
  {
    id: 'check',
    name: 'Geverifieerd',
    componentName: 'RadderIconCheck',
    category: 'Domein & Cases',
    description: 'Robuuste verificatiecirkel met strakke goedkeuringsvink.',
    tags: ['check', 'geverifieerd', 'succes', 'klaar', 'akkoord'],
    Component: RadderIconCheck,
  },
  {
    id: 'globe',
    name: 'Wereldbol',
    componentName: 'RadderIconGlobe',
    category: 'Domein & Cases',
    description: 'Isometrische wereldbol met breedtelijnen voor internationale reizen.',
    tags: ['globe', 'wereld', 'thailand', 'travel', 'hardware'],
    Component: RadderIconGlobe,
  },
  {
    id: 'layers',
    name: 'Modulaire Lagen',
    componentName: 'RadderIconLayers',
    category: 'Domein & Cases',
    description: 'Gelaagde isometrische niveaus voor full-stack architectuur.',
    tags: ['layers', 'gelaagd', 'stack', 'architectuur', 'niveaus'],
    Component: RadderIconLayers,
  },
];
