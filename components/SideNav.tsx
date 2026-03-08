'use client';

import { useUser } from '@/providers/UserProvider';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { CheckCircle, Lock } from './icons';
import Link from 'next/link';
import MobileNav from './MobileNav';

type SideNavType = {
    label: string,
    path: string,
    unlocked: boolean,
    selected?: boolean
}

const NAVS: SideNavType[] = (new Array(9)).fill(0).map((o,i)=>({
    label: `Day - ${i+1}`,
    path: i === 0 ? '/' : `/challenge/${i+1}`,
    unlocked: false
}));

const SideNavItem = ({ nav }: { nav: SideNavType }) => {
    if(nav.unlocked && !nav.selected) {
        return (
            <Link role='list-item' href={nav.path} 
                className='sidenav__item h-12 w-full px-4 py-3 text-base font-semibold'>
                <div className='flex justify-between items-center'>
                    <span>{nav.label}</span>
                    <span>{nav.unlocked ? <CheckCircle /> : <Lock/> }</span>
                </div>
            </Link>
        )
    }
    return (
        <div role='list-item' 
        className={`sidenav__item relative h-12 w-full px-4 py-3 text-base font-semibold ${!nav.unlocked ? 'muted' : ''}`}>
            {
                nav.selected && <div className='sidenav--item__overlay rounded-l-full w-full absolute h-14 -top-1 right-0 bg-background'></div>
            }
            <div className='flex w-full h-full justify-between items-center relative'>
                <span className={`${!nav.selected ? 'font-medium': 'font-semibold'}`}>{nav.label}</span>
                <span>{nav.unlocked ? <CheckCircle /> : <Lock/> }</span>
            </div>
        </div>
    )
}

function SideNav() {
    const pathname = usePathname();
    const { user } = useUser();
    const [ navs, setNavs ] = useState<SideNavType[]>(NAVS);

    useEffect(() => {
        if(user) {
            setNavs((prev) => (prev.map((nav: SideNavType, index) => ({
                ...nav,
                unlocked: !!user.challengesUnlocked && (index+1) <= user.challengesUnlocked,
                selected: pathname === nav.path
            }))))
        }
    }, [user, pathname]);

    console.log(pathname, navs);

    return (
        <>
            <aside className="sidenav sidenav--desktop hidden fixed z-10 h-full left-0 top-30 lg:block w-0 lg:w-(--sidenav-width) bg-[url('/images/sidenav-bg-desktop.png')]">
                <div className="overlay w-full h-full absolute top-0 l-0 backdrop-blur-[50px]"></div>
                <div className='overlay-top w-full h-14 absolute top-0 l-0 opacity-90'></div>
                <div className='w-full h-full pt-4 pb-6 pl-2 pr-0'>
                    <div className='w-full h-full pt-12 flex flex-col gap-2' role='list'>
                        {
                            navs.map((nav: SideNavType) => (<SideNavItem key={nav.label} nav={nav} />))
                        }
                    </div>
                </div>
            </aside>
            <MobileNav navs={navs} />
        </>
    )
}

export default SideNav