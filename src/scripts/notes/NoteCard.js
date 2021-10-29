
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

