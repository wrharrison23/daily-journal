/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "01/12/2021",
        concept: "DOM",
        entry: "Printing to the DOM.",
        mood: "Ok"
    },
    {
        id: "2",
        date: "01/13/2021",
        concept: "JS HTML functions",
        entry: "Practiced ",
        mood: "Ok",
    },
    {
        id: "3",
        date: "01/14/2021",
        concept: "DOM",
        entry: "Building functions to print to DOM",
        mood: "Ok",
    }
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}
