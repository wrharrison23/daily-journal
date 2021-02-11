import {getMoods, saveJournalEntry, useMoods} from "./JournalDataProvider.js"
import { EntryListComponent } from "./JournalEntryList.js"


document.querySelector("#formEntryBtn").addEventListener("click", () => {
  showForm()
})

const formHTML = document.querySelector("#formEntry")


const showForm =() => {
    getMoods().then(() => {
        let moods = useMoods()
        formHTML.innerHTML = `<div>
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
                            ${moods.map((mood) => {
                            return `<option value="${mood.id}">${mood.label}</option>`}).join("")}
                        </select>
                    </fieldset>

                    <fieldset class="mb-3">
                        <button id="recordEntryBtn">Record Journal Entry</button>
                    </fieldset>
                </div>`;

    })   
}

document.querySelector("main").addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "recordEntryBtn") {
        let newDate = document.getElementById("dateEntered")
        let newConcept = document.getElementById("conceptEntered")
        let newEntry = document.getElementById("exampleFormControlTextarea1")  
        let newMood = document.getElementById("moodEntered")

        const newJournalEntry = {
          date: newDate.value,
          concept: newConcept.value,
          entry: newEntry.value,
          moodId: newMood.value,
        };
        // debugger
        saveJournalEntry(newJournalEntry)
    }
  
});



