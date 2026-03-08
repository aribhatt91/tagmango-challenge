
function Chip({ children, className, bordered = false }: {className?: string, children?: React.ReactNode, bordered?: boolean}) {
  return (
    <div className={`chip ${bordered ? 'border chip-bordered' : ''} inline-flex justify-center items-center rounded-4xl h-8 ${className}`}>
      {children}
    </div>
  )
}

export default Chip