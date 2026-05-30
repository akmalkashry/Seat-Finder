// Ensure on Google Sheet, click Extensions>Apps Script

function doGet() {
  var template = HtmlService.createTemplateFromFile('index');
  
  return template.evaluate()
      .setTitle('Seat Finder')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
      .addMetaTag('viewport', 'width=device-width, initial-scale=1'); // <-- ADD THIS LINE
}

// Keep your existing getSheetData function here below
function getSheetData() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("[Tab Name]");
  var data = sheet.getDataRange().getValues();
  var headers = data[0];
  var rows = data.slice(1);
  return { headers: headers, rows: rows };
}
