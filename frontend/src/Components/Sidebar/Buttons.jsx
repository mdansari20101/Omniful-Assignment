import React, { useContext } from 'react';
import styles from "./Sidebar.module.css";
import {Link} from "react-router-dom";
import {RouteContext} from "../Context/Context"
const Buttons = (props) => {
    const {state,setState} = useContext(RouteContext);
    const {icons,link} = props;
    return (
        <Link to={`/${link}`}><button className={styles.rembuttonprop} style={{backgroundColor:state===link?"rgba(84, 104, 250, 0.6)":"white",color:state===link?"white":"#404040"}} onClick={()=>{setState(link)}}>{icons}</button></Link>
    );
};

export default Buttons;