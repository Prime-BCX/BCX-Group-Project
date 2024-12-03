// This view promotes the use of Instagram to share the user's progress.
import ButtonToGo from '../ButtonToGo/ButtonToGo';
import "./InstagramView.css"
// Declare label and path variables directly inline as props.
// In this file - see line 16 <ButtonToGo...
// import image from './images/BCX_and_Instagram.jpeg';



function InstagramView() {
    return (
        <div className="container">
            <h3>  Easily share your
                progress to
                Instagram Stories
                straight from
                the BCX 100 app!
            </h3>

            {/* <img src={image} alt="BCX and Instagram" /> */}

            <div className="button-container">
                <ButtonToGo label="START PHASE ONE" path="../PhaseOnePage" />
            </div>
        </div>

    )
}

export default InstagramView;