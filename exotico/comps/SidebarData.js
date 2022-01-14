import React, { useState } from 'react';
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";
import * as IoIcons from "react-icons/io";


export const SidebarData = [
    {
        title: 'Exotico',
        path: '/exotico',
        icon: <GiIcons.GiPlantsAndAnimals />,
        cName: 'nav-text'
    },
    {
        title: 'Home',
        path: '/home',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Support',
        path: '/help',
        icon:  <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    }
]