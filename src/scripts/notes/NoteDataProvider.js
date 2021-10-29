let notes = []

export const useNotes = () => {
    return notes.slice()
}


export const getNotes = () => {
    return fetch('http://localhost:8088/notes')
        .then(response => response.json())
        .then(parsedNotes => {
            notes = parsedNotes
        })

}

export const saveNotes = (note) => {
    return fetch('http://localhost:8088/notes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })
    
}

export const deleteNote = (noteId) => {
    return fetch(`http://localhost:8088/notes/${noteId}`, {
        method: "DELETE"
    })
}


