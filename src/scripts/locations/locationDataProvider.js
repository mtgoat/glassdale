let locations = []

export const useLocations = () => {
    return locations.slice()
}

export const getLocations = () => {
    return fetch ("https://criminals.glassdale.us/facilities")
    .then(response => response.json())
    .then(cleanTaco => {
        locations = cleanTaco
    })
}