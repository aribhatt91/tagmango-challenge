const SvgLockSimple = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill={'var(--muted)'}
      d="M16.25 6.25h-2.5V4.375a3.75 3.75 0 0 0-7.5 0V6.25h-2.5A1.25 1.25 0 0 0 2.5 7.5v8.75a1.25 1.25 0 0 0 1.25 1.25h12.5a1.25 1.25 0 0 0 1.25-1.25V7.5a1.25 1.25 0 0 0-1.25-1.25M7.5 4.375a2.5 2.5 0 1 1 5 0V6.25h-5z"
    />
  </svg>
);
export default SvgLockSimple;
