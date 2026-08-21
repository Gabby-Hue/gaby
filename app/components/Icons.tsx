import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number;
}

export const SunIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

export const MoonIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

export const GithubIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export const WhatsappIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const InstagramIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export const ArrowUpIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <line x1="12" y1="19" x2="12" y2="5" />
    <polyline points="5 12 12 5 19 12" />
  </svg>
);

export const ArrowDownIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <line x1="12" y1="5" x2="12" y2="19" />
    <polyline points="19 12 12 19 5 12" />
  </svg>
);

export const ExternalLinkIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export const ChevronLeftIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

export const ChevronRightIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export const MenuIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

export const CloseIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

/* High Fidelity Tech Stack SVG Brand Icons */
export const TechIcon: React.FC<{ icon: string; className?: string }> = ({ icon, className = "w-8 h-8" }) => {
  const iconColor = "#ff2b85"; // Signature Pink Accent

  switch (icon) {
    case 'nextjs':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <circle cx="12" cy="12" r="10" stroke={iconColor} strokeWidth="2" fill={iconColor} fillOpacity="0.1" />
          <path d="M8 8V16M8 8L16 16M16 8V16" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'react':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <circle cx="12" cy="12" r="2.5" fill={iconColor} />
          <ellipse cx="12" cy="12" rx="9" ry="3.8" stroke={iconColor} strokeWidth="1.8" />
          <ellipse cx="12" cy="12" rx="9" ry="3.8" stroke={iconColor} strokeWidth="1.8" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.8" stroke={iconColor} strokeWidth="1.8" transform="rotate(120 12 12)" />
        </svg>
      );

    case 'laravel':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path d="M2.5 6.5L12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5Z" fill={iconColor} fillOpacity="0.15" stroke={iconColor} strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M12 1V23M2.5 6.5L12 12L21.5 6.5" stroke={iconColor} strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      );

    case 'vite':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <polygon points="12,2 21,5 15,22 12,14 9,22 3,5" fill={iconColor} fillOpacity="0.2" stroke={iconColor} strokeWidth="2" strokeLinejoin="round" />
          <polygon points="12,2 17,5 12,15 10,10" fill={iconColor} />
        </svg>
      );

    case 'tailwind':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path d="M4 12C4 9.5 5.5 8 8 8C11.5 8 11.5 11 14 11C16.5 11 18 9.5 18 8C18 10.5 16.5 12 14 12C10.5 12 10.5 9 8 9C5.5 9 4 10.5 4 12Z" fill={iconColor} />
          <path d="M4 17C4 14.5 5.5 13 8 13C11.5 13 11.5 16 14 16C16.5 16 18 14.5 18 13C18 15.5 16.5 17 14 17C10.5 17 10.5 14 8 14C5.5 14 4 15.5 4 17Z" fill={iconColor} fillOpacity="0.7" />
        </svg>
      );

    case 'supabase':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path d="M13 2L3 14H11L10 22L21 9H13V2Z" fill={iconColor} fillOpacity="0.2" stroke={iconColor} strokeWidth="2" strokeLinejoin="round" />
          <path d="M13 2.5L4 13.5H11.5L10.5 21.5L19.5 9.5H12.5V2.5Z" fill={iconColor} />
        </svg>
      );

    case 'prisma':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <polygon points="12,2 20,18 16,22 4,14" fill={iconColor} fillOpacity="0.15" stroke={iconColor} strokeWidth="2" strokeLinejoin="round" />
          <line x1="12" y1="2" x2="16" y2="22" stroke={iconColor} strokeWidth="2" />
        </svg>
      );

    case 'flutter':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <polygon points="14,2 6,10 10,14 22,2" fill={iconColor} fillOpacity="0.5" />
          <polygon points="10,14 6,18 14,22 22,14 14,6" fill={iconColor} />
        </svg>
      );

    default:
      return (
        <div className={`flex items-center justify-center rounded-lg bg-[#ff2b85]/15 text-[#ff2b85] font-mono text-xs font-bold ${className}`}>
          {"</>"}
        </div>
      );
  }
};
