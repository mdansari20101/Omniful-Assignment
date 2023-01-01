import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import {RouteContext} from "../Context/Context";
const Home = () => {
    const {id} = useParams();
    const {state,setState} = useContext(RouteContext);
    setState(id);
    console.log(state);
    console.log(id);
    return (
        <div>
            <h1>{id}</h1>
        </div>
    );
};

export default Home;