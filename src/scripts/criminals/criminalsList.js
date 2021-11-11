import { criminal } from "./criminals.js";
import { useCriminals, getCriminals } from "./criminalsDataProvider.js";


const criminalListContainer = document.querySelector(".content-container");
export const CriminalList = (dropdownSelector, chosenFilter) => {
    
    criminalListContainer.innerHTML = `<h2>List of People with Convictions</h2>`

    getCriminals ()
    .then (() => {
        let criminalsArray = useCriminals ();

        if (dropdownSelector === "crime"){
            criminalsArray = criminalsArray.filter(singleCriminalInLoop => {
                // write the condition here to filter for criminals whose crime matches the convictionFilter value
                return singleCriminalInLoop.conviction === chosenFilter
                }) 
              } else if (dropdownSelector === "officer" ) {
                criminalsArray = criminalsArray.filter(singleOfficerInLoop => {
                  // write the condition here to filter for criminals whose crime matches the convictionFilter value
                  return singleOfficerInLoop.arrestingOfficer === chosenFilter
                  }) 
              }
        criminalsArray.forEach((singleCriminal) => {
            criminalListContainer.innerHTML += criminal(singleCriminal);
          });
        });
      };
        // let criminalHTML = " ";

        // criminalsArray.forEach((singleCrimialObj) => {
        //     criminalHTML += criminal(singleCrimialObj);
        // });

        // contentTarget.innerHTML = `<h2>List of Persons with Criminal Convictions</h2><div class="crimFlex">
        // ${criminalHTML}</div>`

    //})
//}

//----------- nav bar.criminals-----------//
const navBarCriminals = document.querySelector("#criminals-nav-link")

navBarCriminals.addEventListener("click", () => {
    // invoke the function that prints the criminals
       CriminalList ()
})