import React, { useState } from 'react';

function ToggleSwitch() {
    const [isOn, setIsOn] = useState(false);


    const toggleSwitch = () => {
        setIsOn(prevState => !prevState);
    };
    return (
        <div>
            <p>{isOn ? 'On' : 'Off'}</p>
            <button onClick={toggleSwitch}>Toggle</button>
        </div>
    );
}
export default ToggleSwitch;