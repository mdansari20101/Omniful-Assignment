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
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
    
    const buttons = [
    {
        id :0,
        icon: <HomeOutlinedIcon style={{height:"20px",width:"20px"}}/>,
        link: "Home"
    },
    {
        id :1,
        icon: <MonetizationOnOutlinedIcon style={{height:"20px",width:"20px"}}/>,
        link:'Button2'
    },
    {
        id :2,
        icon: <InsightsOutlinedIcon style={{height:"20px",width:"20px"}}/>,
        link:'Button3'
    },
    {
        id :3,
        icon: <DeleteOutlineOutlinedIcon style={{height:"20px",width:"20px"}}/>,
        link:'Button4'
    },
    {
        id :4,
        icon: <PolicyOutlinedIcon style={{height:"20px",width:"20px"}}/>,
        link:'Button5'
    },
    {
        id :5,
        icon: <ContactSupportOutlinedIcon style={{height:"20px",width:"20px"}}/>,
        link:'Button6'
    },
    {
        id :6,
        icon: <PeopleOutlineOutlinedIcon style={{height:"20px",width:"20px"}}/>,
        link:'Button7'
    },
    {
        id :7,
        icon: <SettingsOutlinedIcon style={{height:"20px",width:"20px"}}/>,
        link:"Settings"
    },
    {
        id :8,
        icon: <CategoryOutlinedIcon style={{height:"20px",width:"20px"}}/>,
        link:'Button9'
    },
    {
        id :9,
        icon: <LogoutOutlinedIcon style={{height:"20px",width:"20px"}}/>,
        link:'Button10'
    },
    {
        id :10,
        icon: <AccountBalanceWalletOutlinedIcon style={{height:"20px",width:"20px"}}/>,
        link:'Button11'
    }
   
    ]
    const navigate = useNavigate();
  return (
    <div className={styles.sidebar}>
       
        <div className={styles.allbuttons}>
        <div className={styles.logodiv}>
            <img className={styles.logoimg} src={logo} alt="not found" onClick={()=>navigate("/Home")}/>
        </div>
        {
        buttons.map((ele)=>{
            return <Buttons key={ele.id} icons={ele.icon} link={ele.link}/>
        })
        }
        </div>
    </div>
  );
};

export default Sidebar;
