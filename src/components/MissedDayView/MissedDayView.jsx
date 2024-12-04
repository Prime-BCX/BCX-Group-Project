import ButtonToGo from '../ButtonToGo/ButtonToGo';

function MissedDayView() {
    return (
        <div className="container">

            <h2> What Happened? </h2>
            <p> Let's check in.  Did you complete today's steps but forget to submit your photo, or is it time to reset and rebuild?
            </p>

            {/* <img src="../Images/MissedDayImage.jpeg" alt="An illustration of a missed day" /> */}

            <ButtonToGo label="I FORGOT TO CHECK IN" path="../ChecklistPage" />
            <ButtonToGo label="TIME TO RESET" path="../ShowingIntegrity" />

        </div>
    )
}

export default MissedDayView;