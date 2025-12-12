export function LogoIcon({ className }: { className?: string }) {
  return (
    <svg
      width="512"
      height="512"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="proGradient"
          x1="0"
          y1="0"
          x2="512"
          y2="512"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#FB923C" />
          <stop offset="50%" stopColor="#F97316" />
          <stop offset="100%" stopColor="#C2410C" />
        </linearGradient>

        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="15" />
          <feOffset dx="0" dy="10" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.3" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter="url(#shadow)">
        <rect
          x="290"
          y="60"
          width="150"
          height="150"
          rx="30"
          fill="url(#proGradient)"
        />

        <rect
          x="80"
          y="150"
          width="180"
          height="302"
          rx="30"
          fill="url(#proGradient)"
        />

        <path
          d="M432 452V290C432 273.431 418.569 260 402 260H290V452H402C418.569 452 432 438.569 432 422Z"
          fill="url(#proGradient)"
        />
      </g>
    </svg>
  );
}
