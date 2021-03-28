alert("Extension activée !");
//On va utiliser ajax hein ! envoyer une requête
var xhr = new XMLHttpRequest;
xhr.open("GET","https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/meet",true);
xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xhr.send("prenom=Boubacar&nom=TRAORE");

//reponses
// var text = xhr.responseText; 
// //var xml = xhr.responseXML; 
// var target= document.getElementById("main");
// // target.innerHTML=text;
// //responses parse avec json

var json = JSON.parse(xhr.responseText); 
var xml = xhr.responseXML; 
var target= document.getElementById("main");
target.innerHTML=json.last_name;