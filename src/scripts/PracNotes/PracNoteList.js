import {PracNote} from "./PracNoteCard.js"
import {getPracNotes, usePracNotes} from "./PracNoteProvider.js"

const contentTarget = document.querySelector(".print-list")

export const PracNoteList = () => {
    getPracNotes ()
    .then (() => {
        let allThePracNotes = usePracNotes ();

        let PracNoteHTML = " ";

        allThePracNotes.forEach((singlePracNote) => {
            PracNoteHTML += PracNote(singlePracNote);
        });

        contentTarget.innerHTML = `<h2>Notes</h2>
        ${PracNoteHTML}`

    })
}

//----------- nav bar.PracNote-----------//
const navBarPracNote = document.querySelector("#notes-nav-link")

navBarPracNote.addEventListener("click", () => {
    // invoke the function that prints the criminals
       PracNoteList ()
})