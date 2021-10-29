// dateOfNote
// noteText
// suspect
export const PracNote = (taco) => {
    return `
        <div class="col-sm-3 border border-dark m-3 list-group-item">
        <h3>Suspect: ${taco.suspect}</h3>
        <p>Note Text: ${taco.noteText}</p>
        <p>Date: ${new Date(taco.dateOfNote).toLocaleDateString('en-US')}</p>
        </div>
    `
}