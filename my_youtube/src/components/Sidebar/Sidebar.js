import React from 'react'
import SidebarRow from '../SidebarRow/SidebarRow'
import './Sidebar.css'
import {AiFillHome} from '@react-icons/all-files/ai/AiFillHome'
import {FaHotjar} from '@react-icons/all-files/fa/FaHotjar'
import {MdSubscriptions} from '@react-icons/all-files/md/MdSubscriptions'
import {FaHistory} from '@react-icons/all-files/fa/FaHistory'
import {MdVideoLibrary} from '@react-icons/all-files/md/MdVideoLibrary'
import {MdPermMedia} from '@react-icons/all-files/md/MdPermMedia'
import {MdWatchLater} from '@react-icons/all-files/md/MdWatchLater'
import {AiTwotoneLike} from '@react-icons/all-files/ai/AiTwotoneLike'
export default function Sidebar() {
  return (
    <div className='sidebar'>
        <SidebarRow selected Icon={AiFillHome} title='Home'/>
        <SidebarRow Icon={FaHotjar} title='Trending'/>
        <SidebarRow Icon={MdSubscriptions} title='Subscriptions'/>
        <br/>
        <SidebarRow Icon={MdVideoLibrary} title='Library'/>
        <SidebarRow Icon={FaHistory} title='History'/>
        <SidebarRow Icon={MdPermMedia} title='Your Videos'/>
        <SidebarRow Icon={MdWatchLater} title='Watch Later'/>
        <SidebarRow Icon={AiTwotoneLike} title='Liked vodeos'/>
    
    </div>
  )
}
