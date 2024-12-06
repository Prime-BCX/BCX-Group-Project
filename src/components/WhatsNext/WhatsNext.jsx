import React from "react";
import VideoCreator from "../VideoCreator/VideoCreator";
import './WhatsNext.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';



function WhatsNext() {
    const history = useHistory();

    const goToPhaseOne = () => {
        history.push("/InstagramView");
    }

    const goToPhaseTwo = () => {
        history.push(`/StepStarterVideo/${id}`);
    }

    return (
        <div className="className=" video-launcher-container>
            <VideoCreator />
            <div className="bottom">
                <h2 className="style">WHAT'S NEXT?</h2>





                <ButtonToGo label="Repeat Phase One" path={`/StepStarterVideo/${id}`}   />
                <ButtonToGo label="Repeat Phase Two" path={`/StepStarterVideo/${id}`}   />

                {/* <button
                    className="btn"
                    onClick={ }>Repeat Phase One
                </button>

                <button onClick={ }>Restart Phase Two

                </button> */}

                <button>
                I COMPLETED BCX
                </button>

            </div>

        </div >


    )

}

export default WhatsNext;