import React, { useContext } from 'react';
import "./CardsCollection.css";
import {RouteContext} from "../Context/Context";
import { Route, Routes } from 'react-router-dom';
import Cards from './Cards';
import Hubs from './Hubs';
const CardsCollection = () => {
    const {state,dropdowntext} = useContext(RouteContext);
    console.log(state);
    return (
        <div className='mainCardcollection'>
            <Routes>
                <Route path='/:id/Hubs' element={<Hubs/>}/>
                <Route path='/:id/:text' element={<Cards/>}/>
                
            </Routes>
        </div>
    );
};

export default CardsCollection;