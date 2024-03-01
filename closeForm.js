function closeForm() {
  var form = FormApp.openById('FORM_ID');
  form.setAcceptingResponses(false);
}

function createTimeBasedTrigger() {
  ScriptApp.newTrigger('closeForm')
      .timeBased()
      .at(new Date('YYYY-MM-DD HH:MM:SS')) // Set the exact date and time
      .create();
}

// Replace <FORM_ID> with the actual ID of your form.
// Specify date and time to automatically close the form.
// Save the script.
// Run the “createTimeBasedTrigger” function and authorize the script.
