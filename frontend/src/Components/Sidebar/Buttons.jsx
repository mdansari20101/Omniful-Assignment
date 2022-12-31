import React from 'react';
import styles from "./Sidebar.module.css";
const Buttons = (props) => {
    const {id,icons,state,setstate} = props;
    return (
        <button className={styles.rembuttonprop} style={{backgroundColor:id==state?"blue":"white",color:id==state?"white":"#404040"}} onClick={()=>setstate(id)}>{icons}</button>
    );
};

export default Buttons;