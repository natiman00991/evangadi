var token = "6606436800:AAH8QBGnt-cK0ypUrUlB0OWB9vvPCOcRMvU";
var SheetID = "1lbD5YEpH7NMWzJSm0wbesP3fPfrCta6V_HwheAVfnWc";

function doPost(e) {
  var stringJson = e.postData.getDataAsString();
  var updates = JSON.parse(stringJson);

  if (updates.message.text) {
    // The `sendTextWithImage` function is called with the chat ID, text, and image URL
    sendTextWithImage(
      updates.message.chat.id,
      CariBarangDariIDSheet(updates.message.text),
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Faa%2FLalibela%252C_san_giorgio%252C_esterno_24.jpg%2F1200px-Lalibela%252C_san_giorgio%252C_esterno_24.jpg&tbnid=xr_M0FJpXUYEQM&vet=12ahUKEwjM0NTEuLOAAxU1pycCHfIUCpMQMygAegUIARDwAQ..i&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FLalibela&docid=GkMwLumgluBULM&w=1200&h=1040&q=lalibela&ved=2ahUKEwjM0NTEuLOAAxU1pycCHfIUCpMQMygAegUIARDwAQ" // Replace this URL with the actual image URL
    );
  }
  if(updates.message.text){
      sendText(updates.message.chat.id,CariBarangDariIDSheet(updates.message.text)); 
    }
}

function AmbilSheet1() {
  var rangeName = 'Sheet1!A2:F';
  var rows = Sheets.Spreadsheets.Values.get(SheetID, rangeName).values;
  return rows;
}

function CariBarangDariIDSheet(IDbarang) {
  var dataBarang = AmbilSheet1();
  for (var row = 0; row < dataBarang.length; row++) {
    if (dataBarang[row][0] == IDbarang) {
      return "ID : " + dataBarang[row][0] + "\n" +
             "-----------------------------------------------------------------------------------------------------" + "\n" +
             "NAME : " + dataBarang[row][1] + "\n" +
             "-----------------------------------------------------------------------------------------------------" + "\n" +
             "AGE  : " + dataBarang[row][2] + "\n" +
             "-----------------------------------------------------------------------------------------------------" + "\n" +
             "AMHARIC  : " + dataBarang[row][3] + "\n" +
             "-----------------------------------------------------------------------------------------------------" + "\n" +
             "ENGLISH  : " + dataBarang[row][4] + "\n" +
             "-----------------------------------------------------------------------------------------------------" + "\n" +
             "maths  : " + dataBarang[row][5] + "\n" +
             "                           " + "\n" +
             "============================ " + "\n" +
             "👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦ያበሩስ👨‍👩‍👧👨‍👩‍👧👨‍👩‍👧👨‍👩‍👧👨‍👩‍👧" + "\n" +
             "❤️❤️❤️❤️መማር ያስከብራል❤️❤️"+ "\n" +
             "🌎🌎🌎🌎ሀገርን ያኮራል🌍🌍🌍"+ "\n" +
             "🏫🏫🏫🏫ት/ት ቤት🏫🏫🏫🏫"+ "\n" +
             "============================";
    }
  }
  return "ENTER YOUR SCHOOL ID " + "\n" + "PLEASE!!!";
}

function sendText(chatid, text, replymarkup) {
  var data = {
    method: "post",
    payload: {
      method: "sendMessage",
      chat_id: String(chatid),
      text: text,
      parse_mode: "HTML",
      reply_markup: JSON.stringify(replymarkup)
    }
  };
  UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/', data);
}

// New function to send text and image
function sendTextWithImage(chatid, text, image) {
  var data = {
    method: "post",
    payload: {
      method: "sendMessage",
      chat_id: String(chatid),
      text: text,
      parse_mode: "HTML"
    }
  };

  // Check if an image URL is provided
  if (image) {
    data.payload.method = "sendPhoto";
    data.payload.photo = image;
  }

  UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/', data);
}
