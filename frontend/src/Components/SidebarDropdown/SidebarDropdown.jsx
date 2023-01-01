import React, { useContext, useState } from 'react';
import {useParams } from 'react-router-dom';
import items from "../../../src/data/settingdata.json";
import { RouteContext } from '../Context/Context';
import DropdownItem from './DropdownItem';
// import "./Dropdown.css";
const SidebarDropdown = () => {
    const {id} = useParams();
    const {state,setState} = useContext(RouteContext);
    const [hide,sethide] = useState(false);
    setState(id);
    console.log(state);
    console.log(id);
    console.log(items);
    // console.log(JSON.parse(data));
    return (
        <div className='mainsliderdiv'>
        <div className={!hide?'sidebar':'hide'}>
            <h1 className='title'>{state}</h1>
            <div>
                {
                    items.map((item, index)=><DropdownItem key={index} item={item} />)
                }
            </div>
            
        </div>
            <button className='hideunhide' style={hide?{left:"-2px"}:{right:"0"}} onClick={()=>sethide(!hide)}>{!hide?`<<`:`>>`}</button>
        </div>
    );
};

export default SidebarDropdown;