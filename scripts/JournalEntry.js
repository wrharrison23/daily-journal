/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <div class="entry-date">
            <strong>Date: </strong>${entry.date}</div>
            <div class="entry-concept">
            <strong>Concept Covered: </strong>${entry.concept}</div>
            <div class="entry-text">
            <strong>Journal Entry: </strong>${entry.entry}</div>
            <div class="entry-mood">
            <strong>Mood: </strong>${entry.mood.label}</div>
            <a href="#" class="btn btn-primary btn-sm" id="deleteEntry-${entry.id}">Delete</a>
        </section>
    `;
}