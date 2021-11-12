import {note} from "./NoteCard.js"
import {useNotes, getNotes} from "./NoteDataProvider.js"
import { NoteForm } from "./NoteForm.js"
// Handle browser-generated click event in component
const contentTarget = document.querySelector(".content-container")

export const NoteList = () => {
    getNotes ()
    .then (() => {
        let notesArray = useNotes ()

        let notesHTML = ""

        notesArray.forEach((singleObj) => {
            notesHTML+= note(singleObj)
        });
        
        contentTarget.innerHTML = `
        <h2>Notes</h2>
        ${notesHTML}`
    })
}
//----------- nav bar.Note-----------//
const navBarNote = document.querySelector("#notes-nav-link")

navBarNote.addEventListener("click", () => {
    // invoke the function that prints the criminals
       NoteList ()
})
