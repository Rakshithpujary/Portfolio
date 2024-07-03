import React from "react";
import '../css/Nagivation.css';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {

    const navigate=useNavigate();

    return(
        <div className="Navigation-main-div">
            <div>

            </div>
            <div>
                <button onClick={() => navigate('/')}>home</button>
                <button onClick={() => navigate('/about')}>about</button>
                <button onClick={() => navigate('/project')}>project</button>
            </div>
        </div>
    );
}

export default Navigation;