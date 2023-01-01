import React, { useContext } from 'react';
import {RouteContext} from "../Context/Context";
const Invalid = () => {
    const{state,setState} = useContext(RouteContext);
    setState(null);
    return (
        <div>
           
        </div>
    );
};

export default Invalid;