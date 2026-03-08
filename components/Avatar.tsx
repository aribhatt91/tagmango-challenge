import Image from "next/image"

function Avatar({ 
    src, 
    alt = 'avatar', 
    width=32, 
    height=32, 
    className 
}: {src: string, alt: string, className?: string, width?: number, height?: number}) {
  return (
    <div aria-label={alt} className={`inline-flex rounded-full relative justify-center chip items-center ${className || ''}`}>
        {!!src && <Image src={src} alt={alt} width={width} height={height} />}
    </div>
  )
}

export default Avatar