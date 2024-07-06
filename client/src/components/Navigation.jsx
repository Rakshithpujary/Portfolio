import React from "react";
import '../css/Nagivation.css';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {

    const navigate=useNavigate();

    return(
        <div className="Navigation-main-div">
            <div className="Navigation-sub-left-div">

            </div>
            <div className="Navigation-sub-right-div">
                <button className="Navigation-button" onClick={() => navigate('/')}>home</button>
                <button className="Navigation-button" onClick={() => navigate('/about')}>about</button>
                <button className="Navigation-button" onClick={() => navigate('/project')}>project</button>
            </div>
        </div>
    );
}

export default Navigation;