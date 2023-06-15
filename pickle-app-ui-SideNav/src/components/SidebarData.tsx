import React from 'react'
import * as FaIcons from 'react-icons/fa' 

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <FaIcons.FaHome />
    },
    {
        title: 'Players',
        path: '/players',
        icon: <FaIcons.FaUsers />
    },
    {
        title: 'Create Player',
        path: '/createplayer',
        icon: <FaIcons.FaTasks />
    },
    {
        title: 'Create Matches',
        path: '/create-matches',
        icon: <FaIcons.FaRocketchat />
    },
    {
        title: 'Create Tournament',
        path: '/analytics',
        icon: <FaIcons.FaRegChartBar />
    }
]

