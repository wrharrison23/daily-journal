
let journalEntries = []



export const getEntries = () => {
  return fetch("http://localhost:3000/entries") // Fetch from the API
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
     
const dispatchStateChangeEvent = () => {
    eventHub.dispatchEvent(new CustomEvent("journalStateChanged"));
};

export const saveJournalEntry = (newJournalEntry) => {
    // Use `fetch` with the POST method to add your entry to your API
    fetch("http://localhost:3000/entries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJournalEntry),
    })
      .then(getEntries()) // <-- Get all journal entries
      .then(dispatchStateChangeEvent());  // <-- Broadcast the state change event
}