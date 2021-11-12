import {useNotes, updateNote} from "./NoteDataProvider.js"
import { NoteList} from "./NoteList.js"

// We're going to print the edit form where the "add note" form usually goes. We could move it around on the page by changing our content target.
// the same location as the save form goes
const contentTarget = document.querySelector(".noteListContainer")

export const NoteEditForm = (noteId) => {
    //debugger
    // Give this component access to our application's notes state
    const allNotes = useNotes();

    // Find the note that we clicked on by its unique id
    const noteWeWantToEdit = allNotes.find(singleNote=> singleNote.id === noteId)

    // Print the form
    // We'll use the HTML value attribute to pre-populate our form fields with the note's info
    //debugger
    //console.log(noteWeWantToEdit)
    contentTarget.innerHTML = `
        <h2>Edit Note</h2>
        <input type="date" id="edit-note-date" value="${noteWeWantToEdit.dateOfNote}" />
        <input type="text" value="${noteWeWantToEdit.noteText}" id="edit-note-text" />
        <input type="text" value="${noteWeWantToEdit.suspect}" id="edit-note-suspect" />
        <button id="saveNoteChanges-${noteId}">Save Changes</button>
    `
}

//This is addEvent for saving the edit form 
contentTarget.addEventListener("click", (event) => {
    if(event.target.id.startsWith("saveNoteChanges")){

                // Make a new object representation of a note
        const editedNote = {
                        
            id: event.target.id.split("-")[1],// how can you get the note's id? 
            noteText: document.querySelector("#edit-note-text").value, // get value of text from input
            suspect:document.querySelector("#edit-note-suspect").value, // get value of suspect from input,
            dateOfNote: document.querySelector("#edit-note-date").value// get value of date from input
            
        }
        // Send to json-server and refresh the list
        console.log(editedNote)
        updateNote(editedNote).then(NoteList)

    }
})
