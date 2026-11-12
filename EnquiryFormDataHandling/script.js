function doPost(e) {
  try {

    const sheet = SpreadsheetApp
      .getActiveSpreadsheet()
      .getSheetByName("Sheet1");

    // Create header if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "SN",
        "Name",
        "Number",
        "Email",
        "Course",
        "Message",
        "Date/Time"
      ]);
    }

    // Auto Increment SN
    const sn = sheet.getLastRow(); // Header is row 1, first record = 1

    const name = e.parameter.name;
    const phone = e.parameter.phone;
    const email = e.parameter.email;
    const course = e.parameter.course;
    const message = e.parameter.message;

    sheet.appendRow([
      sn,
      name,
      phone,
      email,
      course,
      message,
      new Date()
    ]);

    MailApp.sendEmail(
      "skillanic00@gmail.com",
      "New Enquiry",
      `Name: ${name}
      Phone: ${phone}
      Email: ${email}
      Course: ${course}
      Message: ${message}`
          );

    return ContentService
      .createTextOutput(JSON.stringify({
        success: true
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {

    Logger.log(err);

    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: err.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}