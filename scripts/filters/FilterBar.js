import { useJournalEntries, useMoods } from "../JournalDataProvider.js";
import { JournalEntryComponent } from "../JournalEntry.js";
import { EntryListComponent } from "../JournalEntryList.js";

const eventHub = document.querySelector(".filters");
eventHub.addEventListener("change", e => {
    if (e.target.name === "moodFilter") {
      let entries = useJournalEntries()
      let filteredEntries =
      entries.filter((entry) =>  entry.moodId === e.target.value
      
      );
      EntryListComponent(filteredEntries)
    }
}
)

