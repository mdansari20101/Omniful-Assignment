import React, { useContext, useState } from 'react';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import {RouteContext} from "../Context/Context";
import "./Dropdown.css";
import { Link } from 'react-router-dom';
const DropdownItem = ({item}) => {
    const [open, setOpen] = useState(true);
    const {state,setdropdowntext} = useContext(RouteContext);
    
    if(item.childrens){
        return (
            <div>
                <div className='mainTitle'>
                    <div className='titleIcon'>
                        <div>
                        <LocalShippingOutlinedIcon style={{height:"22px",width:"22px",marginBottom:"-5px"}}/>
                        </div>
                        <p>
                        {item.title}  
                        </p>  
                    </div>
                    <div onClick={() => setOpen(!open)}>
                    {open ?<ArrowDropDownOutlinedIcon/>:<ArrowDropUpOutlinedIcon/>}
                    </div>
                </div>
                <div className={open?'child':'hide'}>
                    
                    { 
                    item.childrens.map((child, index) =>{
                        return(
                        <Link to={`/${state}/${child.title}`}>
                            <div className='childItem' key={index} onClick={()=>setdropdowntext(child.title)}>
                                <div>
                                    <LocalShippingOutlinedIcon style={{height:"22px",width:"22px",marginBottom:"-4px"}}/>
                                </div>
                                <p>{child.title}</p>
                                
                            </div>
                        </Link>
                        )
                    }) }
                </div>
                 {/* <div className={open?'child':'hide'}>
                    { item.childrens.map((child, index) => <DropdownItem key={index} item={child} />) }
                </div> */}
            </div>
        )
    }else{
        return (
            <div className='mainTitle'>
                <LocalShippingOutlinedIcon/>
                {item.title}  
            </div>
        )
    }
};

export default DropdownItem;