import { useEffect, useRef } from 'react'

type NavProps = {
    children: any
}


const Nav = ({ children }: NavProps) => {
    const navItems = useRef<HTMLElement | any>()


    useEffect(() => {
        let nav = navItems.current.childNodes
        for (let i = 0;i < nav.length;i++) {
            nav[i].classList.remove('border-b-[2px]')

            if (nav[i].href === window.location.href) {
                nav[i].classList.add('border-b-[2px]')
            }
        }

    }, [])


    const setActive = (e: any) => {
        let tabs = e.target.parentElement.childNodes;
        for (let i = 0;i < tabs.length;i++) {
            tabs[i].classList.remove('border-b-[2px]')
        }
        e.target.classList.add('border-b-[2px]');
    }
    return (
        <nav ref={navItems} className="flex border-b " onClick={setActive}>
            {children}
        </nav>
    )
}
export default Nav