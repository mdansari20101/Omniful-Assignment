import React from 'react';
import { Routes,Route } from 'react-router-dom';
import SidebarDropdown from '../SidebarDropdown/SidebarDropdown';
import Invalid from './Invalid';

const DynamicRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/:id/*" element={<SidebarDropdown/>} />
                <Route path ="*" element={<Invalid/>}/>
            </Routes>
        </div>
    );
};

export default DynamicRoutes;