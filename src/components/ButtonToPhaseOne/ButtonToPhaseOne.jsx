// This button can be reused to move between views

import React from 'react';
import { useHistory } from 'react-router-dom'; //this is being used because React 5.3.4 is in use
// import { useNavigate } from 'react-router-dom'; React 6.0 is required for this
import './ButtonToPhaseOne.css'; 

function ButtonToPhaseOne() {
    const history = useHistory();

    return (
        <div>
            <button
                onClick={() => history.push('/PhaseOnePage')} // Navigate to PhaseOnePage
            > START PHASE ONE
            </button>
        </div>
    );
}

export default ButtonToPhaseOne;