var firebaseConfig = {
      apiKey: "AIzaSyC7CtIIo2oI-S4PWMAI3zIepY7lqQKrsJQ",
      authDomain: "medichat-49c49.firebaseapp.com",
      databaseURL: "https://medichat-49c49-default-rtdb.firebaseio.com",
      projectId: "medichat-49c49",
      storageBucket: "medichat-49c49.appspot.com",
      messagingSenderId: "905003616452",
      appId: "1:905003616452:web:8a8de0a05af5020adbe191",
      measurementId: "G-J8205T3JBD"
    };
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding roomname"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room name- "+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name){
      console.log(name); 
      localStorage.setItem("room_name", name); 
      window.location = "kwitter_page.html"; 
}