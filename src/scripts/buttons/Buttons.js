
export const darkModeButtonFunc = () =>{

const darkModeButton = document.querySelector("#dark-mode")

darkModeButton.addEventListener("click", function(){
    // our logic for activating dark mode goes here-- this code only runs AFTER the button is clicked

    //select the entire body tag
    const bodyElement = document.querySelector ("body")

    //add a class
    bodyElement.classList.toggle("dark-background")
    
  })
}
  //this is a botton to show what questions to ask when an instructor comes around 
let askElement = document.querySelector("#ask-this")

askElement.innerHTML = `<ul><li>How to clear a result from the click event?</li><li>undefined - needs to take "NoteForm()" off contentTarget.innerHTML on NoteList.js </li></ul>
`

export const askButtonFunc = () => {
  const askButton = document.querySelector("#ask-mode")

  askButton.addEventListener("click", function () {
    askElement.classList.toggle("hidden")
  })
}

//<li style="display:blocked">NoteEditForm line 19 input type is text if the type is date, the date does not insert automatically</li>