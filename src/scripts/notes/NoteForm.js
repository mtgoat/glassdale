import {deleteNote, saveNotes } from "./NoteDataProvider.js"
import { NoteList } from "./NoteList.js"
import { NoteEditForm } from "./NoteEditForm.js"

const contentTarget = document.querySelector(".noteListContainer")

export const NoteForm = () => {
    contentTarget.innerHTML = 
    //Put some input fields and prompts here
    `
    <legend>Note Entry Box</legend>
    <label for="noteDate">Date of Note</label>
    <input type="date" name="noteDate" id="noteDate"/>
    <label for="noteEntry">Note Entry</label>
    <textarea name="noteEntry" id="noteEntry" placeholder="Notes goes here"></textarea>
    <label for="noteSuspect">Suspect Name</label>
    <input type="text" name="noteSuspect" id="noteSuspect"/>
   
<button id="saveNote">Save Note</button>
    `
}
// the avobe is a form where new data will be entered. 

//below is a function to send the new data to the JSON servedr
//const Andy = () => {
const navBarNote = document.querySelector("#notes-nav-link")
const saveContentTarget = document.querySelector(".noteListContainer")

saveContentTarget.addEventListener("click", clickEvent => {
    
         if (clickEvent.target.id === "saveNote") {
            //let entrySuspect = 
            //let entryText = document.querySelector("#noteEntry").value 
            console.log("you clicked")
    
             // Make a new object representation of a note
             const newNote = { 
                  // Key/value pairs here
                  dateOfNote: document.querySelector("#noteDate").value,
                  noteText:document.querySelector("#noteEntry").value,
                  suspect: document.querySelector("#noteSuspect").value
                 
     }
    console.log(newNote)
    //below clears the input field after the save button is pushed
        document.querySelector("#noteDate").value = ""
        document.querySelector("#noteEntry").value = ""
        document.querySelector("#noteSuspect").value = ""
    // Change API state and application state
    saveNotes(newNote)
    .then(NoteList) 
    
    
    
    // Refresh your list of notes once you've saved your new one
         }
     })
    
//}

//window.onload this waits until everything on the page is loaded

//below is the addEventListener to delete the entry - future topic - using click two event, add confirmation 

