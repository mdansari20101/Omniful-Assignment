import React from "react";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import PolicyOutlinedIcon from '@mui/icons-material/PolicyOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import styles from "./Sidebar.module.css";
import Buttons from "./Buttons";
import logo from "../../utils/logo.jpg";
const Sidebar = () => {
    
    const buttons = [
    {
        id :0,
        icon: <HomeOutlinedIcon/>,
        link: "home"
    },
    {
        id :1,
        icon: <MonetizationOnOutlinedIcon/>
    },
    {
        id :2,
        icon: <InsightsOutlinedIcon/>
    },
    {
        id :3,
        icon: <DeleteOutlineOutlinedIcon/>
    },
    {
        id :4,
        icon: <PolicyOutlinedIcon/>
    },
    {
        id :5,
        icon: <ContactSupportOutlinedIcon/>
    },
    {
        id :6,
        icon: <PeopleOutlineOutlinedIcon/>
    },
    {
        id :7,
        icon: <SettingsOutlinedIcon/>,
        link:"setting"
    },
    {
        id :8,
        icon: <CategoryOutlinedIcon/>
    },
    {
        id :9,
        icon: <LogoutOutlinedIcon/>
    },
    {
        id :10,
        icon: <AccountBalanceWalletOutlinedIcon/>
    },
    {
        id :11,
        icon: <TurnedInNotOutlinedIcon/>
    }
   

    ]
  return (
    <div className={styles.sidebar}>
        <div className={styles.logodiv}>
            <img className={styles.logoimg} src={logo} alt="not found"/>
        </div>
        {
        buttons.map((ele)=>{
            return <Buttons key={ele.id} icons={ele.icon} link={ele.link}/>
        })
        }
    </div>
  );
};

export default Sidebar;
