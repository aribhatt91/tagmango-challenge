
function Skeleton({ className }: {className: string}) {
  return (
    <span className={`inline animate-pulse chip ${className}`}></span>
  )
}

export default Skeleton