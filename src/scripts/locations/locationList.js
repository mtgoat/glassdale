import { location } from "./locations.js";
import { useLocations, getLocations } from "./locationDataProvider.js";

const contentTarget = document.querySelector(".content-container")

export const LocationList = () => {
    getLocations ()
    .then (() => {
        let locationArray = useLocations ();

        let locationHTML = " ";

        locationArray.forEach((singleLocationObj) => {
            locationHTML += location(singleLocationObj)
        });
        contentTarget.innerHTML = `<h2>List of Facilities</h2><div class="locFlex">${locationHTML}</div>`
    })
}

//----------- nav bar.criminals-----------//
const navBarLocations = document.querySelector("#facilitiesnav-link")

navBarLocations.addEventListener("click", () => {
    LocationList()
})