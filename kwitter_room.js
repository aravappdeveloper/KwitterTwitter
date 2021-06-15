
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBayLyC7muSuWt4KlyOyHO3TH1tRtVZhJU",
    authDomain: "kwitter-twitter.firebaseapp.com",
    databaseURL: "https://kwitter-twitter-default-rtdb.firebaseio.com",
    projectId: "kwitter-twitter",
    storageBucket: "kwitter-twitter.appspot.com",
    messagingSenderId: "972454400627",
    appId: "1:972454400627:web:e23466be4ee5dce193d006"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  username = localStorage.getItem("username");

document.getElementById("username").innerHTML = "Welcome " + username + "!";

function addRoom(){
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

username = localStorage.getItem("username");
document.getElementById("username").innerHTML = "Welcome, " + username + "!";

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { 
  document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { 
    childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("username");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
