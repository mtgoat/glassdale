import { CriminalList } from "../criminals/criminalsList.js"
import {getOfficers, UseOfficers} from "./officersDataProvider.js"


const contentTarget = document.querySelector(".filters__officer")

export const OfficerSelect = () => {
    // Get all convictions from application state
    // it needs something about here
    getOfficers ()
    .then(() => {
         const officers = UseOfficers()
    render(officers)
    })
}

const render = officersCollection => {
    /*
        Use interpolation here to invoke the map() method on
        the convictionsCollection to generate the option elements.
        Look back at the example provided above.
    */
    contentTarget.innerHTML = `
        <select class="dropdown" id="officerSelect">
            <option value="0">Please select an officer...</option>
            ${
                officersCollection.map(offcierObject => {
                    const officerName = offcierObject.name
                    return `<option>${officerName}</option>`
                })
            }
        </select>
    `
}

const eventHub = document.querySelector("body")
eventHub.addEventListener("change", (eventObject) => {
    
    if(eventObject.target.id === "officerSelect"){
        //const taco1 = false
        //console.log("You selected something from the crime dropdown")
        //console.log("This is the crime that was selected: ", eventObject.target.value)
        //console.log("This is the crime that was selected: ", taco1)
        // Your code goes here!
          /*
        - When we select a crime, we need to filter the criminals in CriminalList.
        - Start by importing the CriminalList component at the top of this file.
        - Then call CriminalList, and pass in information about the crime that was chosen
        */
        CriminalList("officer", eventObject.target.value)
       
    //    let crimSelectArray = CrimialList.filter(currentCrims => {   
    //     return currentCrims.conviction = eventObject.target.value
    //    } )
    //    crimSelectACrrray ()
    }
})
