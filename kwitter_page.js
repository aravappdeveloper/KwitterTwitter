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
room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:username,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}