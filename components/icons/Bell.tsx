import * as React from "react";
const SvgBell = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill={'var(--foreground)'}
      d="M13.863 10.996C13.516 10.4 13 8.708 13 6.5a5 5 0 0 0-10 0c0 2.209-.516 3.899-.863 4.496A1 1 0 0 0 3 12.5h2.55a2.5 2.5 0 0 0 4.9 0H13a1 1 0 0 0 .863-1.504M8 13.5a1.5 1.5 0 0 1-1.413-1h2.827A1.5 1.5 0 0 1 8 13.5m-5-2c.482-.828 1-2.745 1-5a4 4 0 0 1 8 0c0 2.253.518 4.17 1 5z"
    />
  </svg>
);
export default SvgBell;
