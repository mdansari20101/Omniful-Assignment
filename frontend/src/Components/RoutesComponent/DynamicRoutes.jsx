import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from './Home';
import Invalid from './Invalid';

const DynamicRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/:id" element={<Home/>} />
                <Route path ="*" element={<Invalid/>}/>
            </Routes>
        </div>
    );
};

export default DynamicRoutes;