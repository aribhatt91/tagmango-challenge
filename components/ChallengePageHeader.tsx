import Link from "next/link"
import { Info, LeftArrow } from "./icons"
import ButtonIcon from "./ButtonIcon"

function ChallengePageHeader({ page, className }: {page: number, className?: string}) {
  return (
    <div className={`flex justify-between 
        w-full h-14 lg:h-15 
        p-2
        lg:py-3.5 lg:px-6 
        fixed z-10 top-0 lg:top-15 
        bg-transparent lg:bg-(--surface)
        lg:border-y surface-border
        ${className || ''}`
    }>
        <div className="inline-flex gap-4 items-center">
            <Link href={'#back'} className="h-10 w-10 lg:h-auto lg:w-auto inline-flex justify-center items-center gap-2">
                <LeftArrow />
                <span className="hidden lg:inline text-base leading-6 font-semibold">Back</span>
            </Link>
            <span className="separator bg-(--separator) hidden lg:inline w-px h-8"></span>
            <span className="hidden lg:inline text-lg leading-6.5 font-semibold">
                {`Day ${page} of 9`}
            </span>
        </div>
        <div className="hidden lg:inline-flex gap-2 items-center">
            <span className="inline text-base leading-6 font-semibold">9-Day Fitness Challenge</span>
            <span className="w-6 h-6" role="button"><Info /></span>
        </div>
        {/* Mobile */}
        <div className="lg:hidden flex-1 flex items-center text-start text-lg leading-6.5 font-semibold">9-Day Fitness Challenge</div>
        <span className="lg:hidden inline-flex items-center">
            <ButtonIcon bordered={false} icon={<Info />} className="w-10 h-10" />
        </span>
    </div>
  )
}

export default ChallengePageHeader