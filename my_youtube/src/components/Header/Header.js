import React from 'react'
import {AiOutlineMenu} from 'react-icons/fa'
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
            </div>
            {/* right side */}
            <div className='header__right'>

            </div>
        </div>
    )
}

export default Header;
