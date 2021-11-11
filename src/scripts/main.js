import { CriminalList} from "./criminals/criminalsList.js"
import { ConvictionSelect } from "./conviction/convictionSelect.js"
import { LocationList} from "./locations/locationList.js"
//import { NoteEditForm} from "./notes/NoteEditForm.js"
import { NoteForm } from "./notes/NoteForm.js"
import { NoteList } from "./notes/NoteList.js"
import { OfficerList } from "./officers/officersList.js"
import { OfficerSelect } from "./officers/officersSelect.js"
import { darkModeButtonFunc, askButtonFunc } from "./buttons/Buttons.js"


//functions are called in an alphabetic order
askButtonFunc()
darkModeButtonFunc()

CriminalList()

ConvictionSelect()
LocationList()

NoteForm ()
NoteList ()
//NoteEditForm ()

OfficerList()
OfficerSelect ()

