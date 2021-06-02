var user = localStorage.getItem("username");
function welcomeUser(){
      var welcome_user = "Welcome, " + user + "!";
      document.getElementById("username").innerHTML = welcome_user;
}
welcomeUser();

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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logout(){
      window.location = "index.html";
      localStorage.removeItem("username");
}

var room = document.getElementById("room_name").value;

function addRoom(){
      localStorage.setItem("current_room", room);
}