function myFunction() {
  // JSON取得&パース
  var url = "Slack API URL"
  var response = UrlFetchApp.fetch(url);
  
  if (response == null) {
    return;
  }
  var responseContent = response.getContentText("UTF-8");
  var parseJSON = JSON.parse(responseContent);
  var arrayChannels = parseJSON.channels;

  var sheetApp = SpreadsheetApp.getActive();
  var sheet = sheetApp.getActiveSheet();

  // 見出し行より下を削除
  if (sheet.getLastRow() > 1) {
    sheet.deleteRows(2, sheet.getLastRow()-1);
  }
  
  // パースした結果を書き出し
  for (i in arrayChannels) {
    sheet.appendRow([arrayChannels[i].name, arrayChannels[i].purpose.value, arrayChannels[i].num_members, new Date(arrayChannels[i].created * 1000)]);
    sheet.getRange(i+2, 1, 1, 4).clearFormat();
  }
}
