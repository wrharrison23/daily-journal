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

export const EntryListComponent = () => {
    getEntries().then(() => {
      const entries = useJournalEntries();
      for (const entry of entries) {
        entryLog.innerHTML += JournalEntryComponent(entry);
      }
    }
      
    )
    
}