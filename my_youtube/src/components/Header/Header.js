import React from 'react'
import {AiOutlineMenu} from '@react-icons/all-files/ai/AiOutlineMenu'
import {AiOutlineSearch} from '@react-icons/all-files/ai/AiOutlineSearch'
import {AiFillVideoCamera} from '@react-icons/all-files/ai/AiFillVideoCamera'
import {IoIosNotifications} from '@react-icons/all-files/io/IoIosNotifications'
import {BiUserCircle} from '@react-icons/all-files/bi/BiUserCircle'
import ytlogo from "../../assets/youtube.svg";
function Header() {
    return (
        <div className="header">
            {/*left side */}
            <div className="header__left">
                <AiOutlineMenu/>
                <img src={ytlogo} alt="" className='header__logo'/>
            </div>
            {/* center */}
            <div className="header__center">
                <input type="text"/>
                <AiOutlineSearch className="header__searchbutton"/>
            </div>
            {/* right side */}
            <div className='header__right'>
                <AiFillVideoCamera className="header__icon"/>
                <IoIosNotifications className="header__icon"/>
                <BiUserCircle className="header__icon"/>
            </div>
        </div>
    )
}

export default Header;
