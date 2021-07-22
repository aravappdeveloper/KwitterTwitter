
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
