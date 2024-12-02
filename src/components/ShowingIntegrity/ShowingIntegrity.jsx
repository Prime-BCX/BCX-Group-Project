import ButtonToGo from '../ButtonToGo/ButtonToGo';

function ShowingIntegrity() {
    return (

        <div className="container">
            <h2> You Are Showing Integrity </h2>
            <p> Starting over takes strength. You're showing integrity and taking ownership of your journey - this is what real progress looks like. Keep going with purpose.
            </p>

            {/* <img src="../../Images/MissedDayImage.jpeg" alt="Faded Random Day Image" /> */}

            <ButtonToGo label="OOPS! I DID FINISH" path="../ChecklistComponents__" />
            <ButtonToGo label="START OVER" path="../ChecklistComponents__" />

        </div>
    )
}
export default ShowingIntegrity;