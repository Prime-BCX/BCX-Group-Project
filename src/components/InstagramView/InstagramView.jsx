// This view promotes the use of Instagram to share the user's progress.
import ButtonToGo from '../ButtonToGo/ButtonToGo';
import "./InstagramView.css"


import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

function InstagramView() {
  const { id } = useParams();
  const history = useHistory();

  const goToStarterVideo = () => {
    history.push(`/StepStarterVideo/${id}`);
  }
  return (
    <div>
      <h2>
        Easily share your
        progress to
        Instagram Stories
        straight from
        the BCX 100 app!
      </h2>

      <img src='./images/BCX_and_Instagram.jpeg' alt="BCX and Instagram" />

      <button onClick={goToStarterVideo}>START PHASE ONE</button>


    </div>

  )
}

export default InstagramView;