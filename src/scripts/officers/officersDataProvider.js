let officers = []

export const UseOfficers = () => {
    return officers.slice()
}

export const getOfficers = () => {
    return fetch("https://criminals.glassdale.us/officers")// returns dirty money
    .then(response => response.json())//cleans dirty money
    .then(taco => {
        officers = taco
            })


}