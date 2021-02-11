/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournalEntries, getEntries } from "./JournalDataProvider.js";
import { JournalEntryComponent } from "./JournalEntry.js"
// DOM reference to where all entries will be rendered
getEntries()
const entryLog = document.querySelector("#entryLog")

const eventHandler = (event) => {
  if (event.type == "journalStateChanged") {
    EntryListComponent()
  }
}

export const EntryListComponent = (entryArray) => {
  if (entryArray){
    let entryString = ""
    for (const entry of entryArray) {
      entryString += JournalEntryComponent(entry)
    }
    entryLog.innerHTML = entryString
  } else {
    getEntries().then(() => {
      const entries = useJournalEntries();
      for (const entry of entries) {
        entryLog.innerHTML += JournalEntryComponent(entry);
      }
    });
  } 
}