import { Officer } from "./officers.js";
import { getOfficers, UseOfficers, } from "./officersDataProvider.js";



export const OfficerList = (taco) => {
   const officerListContainer = document.querySelector(".content-container")
    getOfficers ()
    .then (() => {

        let officersArray = UseOfficers ();

        let officerHTML = "";

        officersArray.forEach((singleOfficerObj) => {
            
            officerHTML += Officer(singleOfficerObj);
        });

        officerListContainer.innerHTML = `<h2>List of Officers</h2><div class="offiFlex">${officerHTML}</div>`
    })
}

//----------- nav bar.officers-----------//

const navBarOfficers = document.querySelector("#officers-nav-link")

navBarOfficers.addEventListener("click", () => {
   OfficerList() 
})