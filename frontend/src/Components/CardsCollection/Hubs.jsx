import React from 'react';
import hubdata from "../../data/hubsdata.json";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import WifiCalling3OutlinedIcon from '@mui/icons-material/WifiCalling3Outlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import "./Hubs.css";
const Hubs = () => {
    console.log("hubdata",hubdata);
    return (
        <>
        <div className='dropdowntext'>
            <h1>Hubs</h1>
        </div>
         <div className='navbar'>
            <h3 style={{borderBottom:"2px solid blue",color:"blue"}}>Allhubs</h3>
         </div>
         <div className='hubscards'>
            {
                hubdata.map((item,index)=>{
                    return(
                        <div className='hubcard'>
                            <div className='city'>
                                <div>
                                    <h3>{item.city}</h3>
                                    <p>{item.status?"Active":"Inactive"}</p>
                                </div>
                                <div><MoreVertOutlinedIcon/></div>
                            </div>
                            <div className='location'>
                                <div><LocationOnOutlinedIcon/></div>
                                <div>
                                    <h4>{item.location}</h4>
                                    <h5>{item.sublocation}</h5>
                                </div>
                            </div>
                            <div className='calender'>
                                <div><CalendarMonthOutlinedIcon/></div>
                                <div>
                                    <div className='calender_icon'>
                                        <h4>{item.open}</h4>
                                        <div><KeyboardArrowDownOutlinedIcon/></div>
                                    </div>
                                    <h6>{item.time}</h6>
                                </div>
                            </div>
                            <div className='callemail'>
                                <div><WifiCalling3OutlinedIcon/></div>
                                <div>
                                    <h4>{item.mobile}</h4>
                                    <h5>{item.email}</h5>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
         </div>
         </>
    );
};

export default Hubs;