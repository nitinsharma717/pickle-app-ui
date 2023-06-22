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
        path: '/create-player',
        icon: <FaIcons.FaUserPlus />
    },
    {
        title: 'Create Matches',
        path: '/create-matches',
        icon: <FaIcons.FaRocketchat />
    },
    {
        title: 'Create Tournament',
        path: '/tournament',
        icon: <FaIcons.FaRegChartBar />
    }
]

