import { deleteNote } from "./NoteDataProvider.js";
import { NoteList } from "./NoteList.js";
import { NoteEditForm } from "./NoteEditForm.js";

export const note = (taco) => {
    return `
    <div class="noteCard">
    <h3>Suspect: ${taco.suspect}</h3>
    <p>Date: ${new Date (taco.dateOfNote).toLocaleDateString('en-US')}</p>
    <p>Note : ${taco.noteText}</p>
    <button id="deleteNote--${taco.id}">Delete</button>
    <button id="edit--${taco.id}">Edit</button>
    </div>
        `
}

// const eventHub = document.querySelector(".noteListContainer")
// eventHub.addEventListener("click", (eventObject) => {

//     const noteId = +eventObject.target.id.split("--")[1]
//     NoteEditForm(noteId);
// })
const eventHub = document.querySelector(".content-container")

eventHub.addEventListener("click", removeEvent => {
  if (removeEvent.target.id.startsWith("deleteNote")) {
    
    const idToDelete = removeEvent.target.id.split("--")[1]
    // ---------- Write your code here -------------//
    // Call the deleteNote function and pass in the appropriate id
    
    console.log(idToDelete)
    deleteNote (idToDelete)
    .then(NoteList)
    // Then call NoteList to refresh the list of notes

  }
});
 //this notecard is same as the note.js
// below is the edit  function

eventHub.addEventListener("click", (eventObject) => {
  const noteId =+ eventObject.target.id.split("--")[1]
    console.log(noteId)
    // 
    NoteEditForm(noteId)
})

/*Tommy's addevent variation with querySelector = body with if specification

const eventHub = document.querySelector("body")
eventHub.addEventListener("click", (eventObject) => {
    if(eventObject.target.id.startsWith("edit--")){
    const noteId = +eventObject.target.id.split("--")[1]
    NoteEditForm(noteId);
    }
}) */
