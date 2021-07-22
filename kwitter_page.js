// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCNJlhFPHeHYtQqvMccitD2cSfVqILumkI",
    authDomain: "kwitter-july2021.firebaseapp.com",
    databaseURL: "https://kwitter-july2021-default-rtdb.firebaseio.com",
    projectId: "kwitter-july2021",
    storageBucket: "kwitter-july2021.appspot.com",
    messagingSenderId: "625198059097",
    appId: "1:625198059097:web:c56e626e44e141855aab48"
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
