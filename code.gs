function doPost(e) {
  // 檢查請求類型是否為 POST
  // if (e.parameter.method !== "POST") {
  //   return ContentService.createTextOutput("Error: Only POST method is allowed").setMimeType(ContentService.MimeType.TEXT);
  // }
  // 處理 POST 請求中的資料
  var username = e.parameter.username;
  var password = e.parameter.password;


    // 打開 Google Sheets
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = sheet.getDataRange().getValues(); // 獲取所有數據
   // 檢查用戶名和密碼
    for (let i = 1; i < data.length; i++) { // 從 1 開始，跳過標題行
        const row = data[i];
        const storedUsername = row[0]; // 第一列為用戶名
        const storedPassword = row[1]; // 第二列為密碼
        if (username === storedUsername && password === storedPassword) {
      // 登入成功
      return ContentService.createTextOutput("Login successful!");
    }
    }

    
  // 登入失敗
  return ContentService.createTextOutput("Login failed!");

}
