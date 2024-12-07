import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './ChecklistList.css';
import axios from 'axios';


function ChecklistList({day = 1})  {
    const [checkListDisabled, setCheckListDisabled] = useState([false, true, true, true, true, true, true]);

    const step = Math.floor(day / 10) + 1;
    const enabledHabits = useState([]);
    //the checklistdisabled array must be initialized in this clunky way because step 5 has 2 associated checkboxes
    useEffect(() => {
        switch (step) {
          case 1:
            setCheckListDisabled([false, true, true, true, true, true, true])
            break;
          case 2:
            setCheckListDisabled([false, false, true, true, true, true, true])
            break;
          case 3:
            setCheckListDisabled([false, false, false, true, true, true, true])
            break;
          case 4:
            setCheckListDisabled([false, false, false, false, true, true, true])
            break;
          case 5:
            setCheckListDisabled([false, false, false, false, false, false, true])
            break;
          default:
            setCheckListDisabled([false, false, false, false, false, false, false])
        }
      }, [step]); // Dependency on `step`
    

    const handleCheck = (id) =>  {
      switch(id){
        case 0: if(!checkListDisabled[0]){
          axios
        }
      }
    }


    return (
        <div className = "list-container">
            <label className='custom-checkbox' onClick={handleCheck(0)}> 
                <input type="checkbox" disabled={checkListDisabled[0]} />
                <span className="checkmark"></span>
                <span className='checklist-text' disabled={checkListDisabled[0]}>Drink 1 Gallon of Water</span>
            </label>
            <label className='custom-checkbox' onClick={handleCheck(1)}> 
                <input type="checkbox" disabled={checkListDisabled[1]} />
                <span className="checkmark" ></span>
                <span className='checklist-text' disabled={checkListDisabled[1]}>15 Minutes of PD</span>
            </label>
            <label className='custom-checkbox' onClick={handleCheck(2)}> 
                <input type="checkbox" disabled={checkListDisabled[2]} />
                <span className="checkmark"></span>
                <span className='checklist-text'>10K Steps</span>
            </label>
            <label className='custom-checkbox' onClick={handleCheck(3)}> 
                <input type="checkbox" disabled={checkListDisabled[3]} />
                <span className="checkmark"></span>
                <span className='checklist-text'>5 Minutes of Meditation</span>
            </label>
            <label className='custom-checkbox' onClick={handleCheck(4)}> 
                <input type="checkbox" disabled={checkListDisabled[4]} />
                <span className="checkmark"></span>
                <span className='checklist-text'>Follow a Meal Plan</span>
            </label>
            <label className='custom-checkbox' onClick={handleCheck(5)}> 
                <input type="checkbox" disabled={checkListDisabled[5]} />
                <span className="checkmark"></span>
                <span className='checklist-text'>No Alcohol & No Treats</span>
            </label>
            <label className='custom-checkbox' onClick={handleCheck(6)}> 
                <input type="checkbox" disabled={checkListDisabled[6]} />
                <span className="checkmark"></span>
                <span className='checklist-text'>Unplug & Done</span>
            </label>
        </div>
    )
}

export default ChecklistList;