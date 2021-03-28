chrome.storage.sync.get("Conference_id", function (obj) {  
    console.log("Passed successfully: Username "+obj.Conference_id)
    studentUsername = obj.username; 
});