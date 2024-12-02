import ButtonToGo from '../ButtonToGo/ButtonToGo';
import image from '../images/MissedDayImage.jpeg';

function MissedDayView() {
    return (
        <div className="container">

            <h2> What Happened? </h2>
            <p> Let's check in.  Did you complete today's steps but forget to submit your photo, or is it time to reset and rebuild?
            </p>

            <img src={image} alt="../Images/MissedDayImage.jpeg" />

            <ButtonToGo label="I FORGOT TO CHECK IN" path="../Checklist___________" />
            <ButtonToGo label="TIME TO RESET" path="../ShowingIntegrity" />

        </div>
    )
}

export default MissedDayView;