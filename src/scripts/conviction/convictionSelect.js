/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { getConvictions, useConvictions } from "./ConvictionProvider.js"
// import { CriminalList } from "../criminals/criminalsList.js"
import {CriminalList} from "../criminals/criminalsList.js"

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__crime")

export const ConvictionSelect = () => {
    // Get all convictions from application state
    // it needs something about here
    getConvictions ()
    .then(() => {
         const convictions = useConvictions()
    render(convictions)
    })
}

const render = convictionsCollection => {
    /*
        Use interpolation here to invoke the map() method on
        the convictionsCollection to generate the option elements.
        Look back at the example provided above.
    */
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${
                convictionsCollection.map(crimeObject => {
                    const crimeName = crimeObject.name
                    return `<option>${crimeName}</option>`
                })
            }
        </select>
    `
}

const eventHub = document.querySelector("body")
eventHub.addEventListener("change", (eventObject) => {
    
    if(eventObject.target.id === "crimeSelect"){
        console.log("You selected something from the crime dropdown")
        console.log("This is the crime that was selected: ", eventObject.target.value)
        
        // Your code goes here!
          /*
        - When we select a crime, we need to filter the criminals in CriminalList.
        - Start by importing the CriminalList component at the top of this file.
        - Then call CriminalList, and pass in information about the crime that was chosen
        */
        CriminalList("crime", eventObject.target.value)
       
    //    let crimSelectArray = CrimialList.filter(currentCrims => {   
    //     return currentCrims.conviction = eventObject.target.value
    //    } )
    //    crimSelectACrrray ()
    }
})

