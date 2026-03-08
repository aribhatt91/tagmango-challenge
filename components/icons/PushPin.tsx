import * as React from "react";
const SvgPushPin = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <path
      fill={'var(--foreground)'}
      d="M12.87 5.688 9.945 8.622c.25.693.353 1.853-.721 3.281a.87.87 0 0 1-.638.347h-.062a.88.88 0 0 1-.62-.256L5.267 9.352l-2.332 2.333a.438.438 0 0 1-.619-.62l2.333-2.33-2.641-2.642a.875.875 0 0 1 .071-1.3c1.39-1.122 2.72-.902 3.303-.719l2.931-2.942a.875.875 0 0 1 1.238 0l3.319 3.319a.875.875 0 0 1 0 1.237"
    />
  </svg>
);
export default SvgPushPin;
