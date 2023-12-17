import React, { useState } from 'react';
// import Switch from '@material-ui/core/Switch';
import './ToggleSwitch.css';

function ToggleSwitch() {
    const [isOn, setIsOn] = useState(false);


    const toggleSwitch = () => {
        setIsOn(prevState => !prevState);
    };
    return (
        <div className="toggle-container">
            <label className="switch">
            <input type="checkbox" onChange={toggleSwitch} checked={isOn} />
            <span className="slider round"></span>

            </label>
            
        </div>
    );
}
export default ToggleSwitch;