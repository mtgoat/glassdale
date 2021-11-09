import { deleteNote } from "./NoteDataProvider.js";
import { NoteList } from "./NoteList.js";
export const note = (taco) => {
    return `
    <div class="col-sm-3 border border-dark m-3 list-group-item">
    <h3>Suspect: ${taco.suspect}</h3>
    <p>Date: ${taco.dateOfNote}</p>
    <p>Note : ${taco.noteText}</p>
    <button id="deleteNote--${taco.id}">Delete</button>
    <button id="edit--${taco.id}">Edit</button>
    </div>
        `
}

const eventHub = document.querySelector(".noteListContainer")
eventHub.addEventListener("click", (eventObject) => {

    const noteId = +eventObject.target.id.split("--")[1]
    NoteEditForm(noteId);
})
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
