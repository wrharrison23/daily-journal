/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <div class="entry-date">
            ${entry.date}</div>
            <div class="entry-concept">
            ${entry.concept}</div>
            <div class="entry-text">
            ${entry.entry}</div>
            <div class="entry-mood">
            ${entry.mood}</div>
        </section>
    `
}