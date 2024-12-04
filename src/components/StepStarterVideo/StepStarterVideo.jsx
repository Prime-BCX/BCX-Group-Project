import React from "react";
import VideoCreater from "../VideoCreater/VideoCreater";



function StepStarterVideo(){

    const handleStartStep1 = () => {

    };

return(
<div className="className="video-launcher-container>
<VideoCreater/>
<div className="bottom">
<button className="btn" onClick={handleStartStep1}>
        START STEP 1
      </button>
      <div className="faq-link-container">
        <a href="/faq" className="faq-link">BCX Challenge FAQ</a>
      </div>
</div>

</div>


)

}

export default StepStarterVideo;