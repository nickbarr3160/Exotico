import React, { useState } from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import Link from 'next/link';
import { SidebarData } from './SidebarData';


function NavBar() {
    
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
        <div className="NavBar">
            <Link href="/" className='menu-bars'>
                <FaIcons.FaBars onClick={showSidebar}/>
            </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items'>
                <li className='navbar-toggle'>
                    <Link href="/" className='menu-bars'>
                        <AiIcons.AiOutlineClose />
                    </Link>
                </li>
                {SidebarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link href={item.path}>
                                
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
        </>
    )
}

export default NavBar;