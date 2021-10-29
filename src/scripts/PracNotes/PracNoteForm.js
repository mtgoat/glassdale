import { savePracNotes } from "./PracNoteProvider.js"
import { PracNoteList } from "./PracNoteList.js"

const contentTarget = document.querySelector(".note-list")

export const PracNoteForm = () => {
    contentTarget.innerHTML = `
    <input type="text" id="note-text" placeholder="Notes goes here">
    <input type="date" id="date-text">
    <input type="text" id="suspect-text" placeholder="suspect goes here">
    <button id="saveNote">Save Note</button>
    `
}

// Handle browser-generated click event in component
let contentTargetSaveNote = document.querySelector("body")
contentTargetSaveNote.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        // Make a new object representation of a note
        const newPractNote = {
            // Key/value pairs here
            noteText: document.querySelector("#note-text").value,
            dateOfNote: document.querySelector("#date-text").value,
            suspect: document.querySelector("#suspect-text").value
        }
        //below clears the input field after the save button is pushed
        document.querySelector("#note-text").value = ""
        document.querySelector("#date-text").value = ""
        document.querySelector("#suspect-text").value = ""
        // Change API state and application state
        savePracNotes(newPractNote)
        .then(PracNoteList) // Refresh your list of notes once you've saved your new one
    }
})