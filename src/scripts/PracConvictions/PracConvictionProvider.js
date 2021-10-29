const people = [
    { id: 1, name: "Caitlin Stein" },
    { id: 2, name: "Ryan Tanay" },
    { id: 3, name: "Leah Hoefling" },
    { id: 4, name: "Emily Lemmon" },
    { id: 5, name: "Bryan Nilson" },
    { id: 6, name: "Jenna Solis" },
    { id: 7, name: "Meg Ducharme" },
    { id: 8, name: "Madi Peper" },
    { id: 9, name: "Kristen Norris" }
]
export const fullNames = people.map(
    personObject => {
        const valueToBeInNewArray = personObject.name
        return valueToBeInNewArray
    }
)

console.log(fullNames)
// ['Caitlin Stein', 'Ryan Tanay', 'Leah Hoefling', 'Emily Lemmon', 'Bryan Nilson', 'Jenna Solis', 'Meg Ducharme', 'Madi Peper', 'Kristen Norris']

const contentTarget = document.querySelector(".names")

contentTarget.innerHTML = `
    <select>
        ${
            people.map(personObject => {
                const fullName = personObject.name
                return `<option>${fullName}</option>`
            })
        }
    </select>
`
// This won't throw an error, but it will fire any time there's a change event anywhere in the main container
const eventHub = document.querySelector("body")
eventHub.addEventListener("change", (eventObject) => {
    console.log("You clicked somewhere in the body element")

    // To be more specific, we need to know specifically what we clicked on
    console.log("Here is the element you clicked on: ", eventObject.target)

    if(eventObject.target.id === "crimeSelect"){
        console.log("You selected something from the crime dropdown")
        console.log("This is the crime that was selected: ", eventObject.target.value)
        // Your code goes here!
    }
})
