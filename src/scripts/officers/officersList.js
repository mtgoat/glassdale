import { Officer } from "./officers.js";
import { getOfficers, UseOfficers, } from "./officersDataProvider.js";

const contentTarget = document.querySelector(".content-container")

export const OfficerList = (taco) => {
    let officerListContainer = document.querySelector(".officer-list")
    getOfficers ()
    .then (() => {

        let officersArray = UseOfficers ();

        let officerHTML = "";

        officersArray.forEach((singleOfficerObj) => {
            
            officerHTML += Officer(singleOfficerObj);
        });

        contentTarget.innerHTML = `<h2>List of Officers</h2><div class="offiFlex">${officerHTML}</div>`
    })
}

//----------- nav bar.officers-----------//

const navBarOfficers = document.querySelector("#officers-nav-link")

navBarOfficers.addEventListener("click", () => {
   OfficerList() 
})