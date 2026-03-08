import Link from 'next/link'
import { Lock, CheckCircle } from './icons'

const NavItem = ({ nav }: { nav: any }) => {
    if(nav.unlocked && !nav.selected) {
        return (
            <Link role='list-item' href={nav.path} 
                className='inline-flex flex-col items-center gap-2 pt-2 pb-3 h-15 w-14'>
                <span className='text-xs font-medium'>{nav.label.replace('- ','')}</span>
                <span>{nav.unlocked ? <CheckCircle /> : <Lock/> }</span>
            </Link>
        )
    }
    return (
        <div role='list-item' 
        className={`inline-flex flex-col items-center gap-2 pt-2 pb-3 h-15 w-14 ${!nav.unlocked ? 'muted' : ''}`}>
            <span className='text-xs font-medium'>{nav.selected ? 'Day' : nav.label.replace('- ','')}</span>
            <span className={`${nav.selected ? 'text-2xl font-bold leading-7.5' : ''}`}>
                {nav.selected ? nav.label.replace('Day - ','') : (nav.unlocked ? <CheckCircle /> : <Lock/>) }
            </span>
        </div>
    )
}

function MobileNav({navs}: {navs: any[]}) {
    const selectedIndex = navs.findIndex((nav: any) => nav.selected === true) || 0;
    const marginCalculated = `50% - ${(28+(selectedIndex*56))}px`;
    const minWidth = (56 + 8) * navs.length - 8; 
    return (
        <aside className='mobilenav bg-transparent lg:hidden fixed top-14 z-10 h-20 pt-2 w-full overflow-hidden'>
            <span className='active-tab w-14 h-18 rounded-t-full bottom-0 left-[50%] -ml-7 bg-background absolute'></span>
            <div className={`relative w-auto h-17 mb-2 flex items-center flex-nowrap gap-2`} 
                style={{
                    marginLeft: `calc(${marginCalculated})`,
                    minWidth: `${minWidth}px`
                }}
            >
                {
                    navs.map((nav: any, index: number) => <NavItem key={nav.label} nav={nav} />)
                }
            </div>
        </aside>
    )
}

export default MobileNav