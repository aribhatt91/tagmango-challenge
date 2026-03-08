import * as React from "react";
const SvgMenu = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="#fff" fillOpacity={0.01} d="M0 0h24v24H0z" />
    <path fill="#fff" fillOpacity={0.01} d="M4 4h16v16H4z" />
    <path
      fill={'var(--foreground)'}
      fillRule="evenodd"
      d="M7.867 12a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0m5.333 0a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0m4.134 1.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMenu;
