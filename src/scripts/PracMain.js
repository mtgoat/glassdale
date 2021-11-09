// import { PracNoteForm } from "./PracNotes/PracNoteForm.js";
// import {PracNoteList} from "./PracNotes/PracNoteList.js"
import { fullNames } from "./PracConvictions/PracConvictionProvider.js";
// PracNoteForm()
// PracNoteList()

fullNames ()

-dark button----------------------------//
const darkModeButton = document.querySelector("#dark-mode")

darkModeButton.addEventListener("click", function(){
    // our logic for activating dark mode goes here-- this code only runs AFTER the button is clicked

    //select the entire body tag
    const bodyElement = document.querySelector ("body")

    //add a class
    bodyElement.classList.toggle("dark-background")
  })

  
