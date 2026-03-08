interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon: React.ReactNode;
    bordered?: boolean;
    transparent?: boolean;
    size?: 'sm' | 'md' | 'lg'
}
function ButtonIcon({ icon, bordered=false, size='md', transparent=false, className, ...rest }: ButtonProps) {
  
  return (
    <button
        className={`
        inline-flex justify-center items-center 
        outline-none
        rounded-full
        
        text-primary
        text-base
        cursor-pointer
        ${size === 'md' ? 'h-10 w-10 lg:h-8 lg:w-8' :
        size === 'sm' ? 'h-8 w-8' : 'h-10 w-10'}
        ${transparent ? 'bg-transparent hover:chip' : 'chip'}
        ${bordered ? 'border chip-bordered' : ''}
        ${className || ''}`}
        {...rest}>
        {icon}
    </button>
  )
}

export default ButtonIcon