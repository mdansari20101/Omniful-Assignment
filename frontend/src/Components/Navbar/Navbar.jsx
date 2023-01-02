import React from 'react';
import flag from '../../utils/flag.png';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import './Navbar.css';
const Navbar = () => {
    return (
        <>
        <div className='quicklinks'>
            <div><LinkOutlinedIcon/></div>
            <p>Quick Links</p>
            <div><KeyboardArrowDownOutlinedIcon/></div>
        </div>
        <div className='rightnavbar'>
            <div>
                <img src={flag} alt="flag"/>
            </div>
            <div><NotificationsOutlinedIcon/></div>
            <div><HelpOutlineOutlinedIcon/></div>
        </div>
        </>
    );
};

export default Navbar;