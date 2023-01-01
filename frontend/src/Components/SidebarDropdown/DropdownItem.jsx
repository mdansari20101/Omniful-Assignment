import React, { useState } from 'react';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import "./Dropdown.css";
const DropdownItem = ({item}) => {
    const [open, setOpen] = useState(true);

    
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
                        <div className='childItem' key={index}>
                            <div>
                                <LocalShippingOutlinedIcon style={{height:"22px",width:"22px",marginBottom:"-5px"}}/>
                            </div>
                            <p>{child.title}</p>
                            
                        </div>
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