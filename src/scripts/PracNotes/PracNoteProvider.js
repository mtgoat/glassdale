let PracNotes = []

export const usePracNotes = () => {
    return PracNotes.slice()
}

export const getPracNotes = () => {
    return fetch('http://localhost:8088/notes')
        .then(response => response.json())
        .then(parsedNotes => {
            PracNotes = parsedNotes
        })

}

export const savePracNotes = (note) => {
    return fetch('http://localhost:8088/notes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })
}
