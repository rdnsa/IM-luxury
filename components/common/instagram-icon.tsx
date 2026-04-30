import type { SVGProps } from "react";

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <rect
        x="7"
        y="7"
        width="18"
        height="18"
        rx="5.2"
        stroke="currentColor"
        strokeWidth="2.4"
      />
      <circle
        cx="16"
        cy="16"
        r="4.1"
        stroke="currentColor"
        strokeWidth="2.4"
      />
      <circle
        cx="21.15"
        cy="10.85"
        r="1.35"
        fill="currentColor"
      />
    </svg>
  );
}
