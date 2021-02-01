import {saveJournalEntry} from "./JournalDataProvider.js"
import { EntryListComponent } from "./JournalEntryList.js"


document.querySelector("#formEntryBtn").addEventListener("click", () => {
  showForm()
})

const formHTML = document.querySelector("#formEntry")


const showForm =() => {
  formHTML.innerHTML = `<form action="">
                    <fieldset class="mb-3">
                        <label for="journalDate">Date of entry</label>
                        <input type="date" class="form-control" id="dateEntered">
                    </fieldset>

                    <fieldset class="mb-3">
                        <label for="concepts">Concepts Covered</label>
                        <input type="text" class="form-control form-control-sm" aria-label=".form-control-sm example" id="conceptEntered">
                    </fieldset>

                    <fieldset class="mb-3">
                        <label for="journalEntry" id='entryLabel'>Journal Entry</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </fieldset>

                    <fieldset class="mb-3">
                        <label for="mood" class="form-control">Mood for the day</label>
                        <select class="form-select" aria-label="Default select example" id="moodEntered">
                            <option selected>Select mood</option>
                            <option value="Happy">Happy</option>
                            <option value="Sad">Sad</option>
                            <option value="Motivated">Motivated</option>
                            <option value="Drained">Drained</option>
                            <option value="Content">Content</option>
                        </select>
                    </fieldset>

                    <fieldset class="mb-3">
                        <button id="recordEntryBtn">Record Journal Entry</button>
                    </fieldset>
                </form>`
}

document.querySelector("main").addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "recordEntryBtn") {
        let newDate = document.getElementById("dateEntered").value;
        let newConcept = document.getElementById("conceptEntered").value;
        let newEntry = document.getElementById("exampleFormControlTextarea1")
          .value;
        let newMood = document.getElementById("moodEntered").value;

        const newJournalEntry = {
          date: newDate,
          concept: newConcept,
          entry: newEntry,
          mood: newMood,
        };
        // debugger
        saveJournalEntry(newJournalEntry)
    }
  
});