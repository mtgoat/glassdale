import {deleteNote, saveNotes } from "./NoteDataProvider.js"
import { NoteList } from "./NoteList.js"

const contentTarget = document.querySelector(".noteSaveFormContainer")

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

//below is a function to send the new data to the JSON server
//const Andy = () => {
  
    contentTarget.addEventListener("click", clickEvent => {
         if (clickEvent.target.id === "saveNote") {
            //let entrySuspect = 
            //let entryText = document.querySelector("#noteEntry").value 
           //  console.dir(entryDate)
    
             // Make a new object representation of a note
             const newNote = { 
                  // Key/value pairs here
                  dateOfNote: document.querySelector("#noteDate").value,
                  noteText:document.querySelector("#noteEntry").value,
                  suspect: document.querySelector("#noteSuspect").value
                 
     }
    //console.log(newNote)
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
const eventHub = document.querySelector(".content-container")

eventHub.addEventListener("click", removeEvent => {
  if (removeEvent.target.id.startsWith("deleteNote")) {
    
    const idToDelete = removeEvent.target.id.split("--")[1]
    // ---------- Write your code here -------------//
    // Call the deleteNote function and pass in the appropriate id
    
    //console.log(idToDelete)
    deleteNote (idToDelete)
    .then(NoteList)
    // Then call NoteList to refresh the list of notes

  }
});

// below is the edit addenent function
const eventHub = document.querySelector(".note-list")
eventHub.addEventListener("click", (eventObject) => {

    const noteId = +eventObject.target.id.split("--")[1]
    NoteEditForm(noteId);
})
