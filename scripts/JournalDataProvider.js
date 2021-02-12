import { EntryListComponent } from "./JournalEntryList.js";

const eventHub = document.querySelector("main")
let journalEntries = []



export const getEntries = () => {
  return fetch("http://localhost:8088/entries?_expand=mood") // Fetch from the API
    .then((response) => response.json())
    .then((parsedEntries) => {
      journalEntries = parsedEntries;
    });
};

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/

export const useJournalEntries = () => {
        const sortedByDate = journalEntries.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate;
    }

let moodArray = []
    
export const getMoods = () => {
  return fetch("http://localhost:8088/moods")
  .then((r) => r.json())
  .then((parsedMoods) => {
    moodArray = parsedMoods
  })
}

export const useMoods = () => moodArray.slice()

const dispatchStateChangeEvent = () => {
    eventHub.dispatchEvent(new CustomEvent("journalStateChanged"));
};

export const saveJournalEntry = (newJournalEntry) => {
    // Use `fetch` with the POST method to add your entry to your API
    fetch("http://localhost:8088/entries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJournalEntry),
    })
      .then(EntryListComponent()) // <-- Broadcast the state change event
}

export const deleteEntry = (entryId) => {
  return fetch(`http://localhost:8088/entries/${entryId}`, {
    method: "DELETE",
  });
};