//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDhXtxP0jJ28LOgTKca5oshrYVeEf-33DQ",
      authDomain: "kwitter-cce65.firebaseapp.com",
      projectId: "kwitter-cce65",
      storageBucket: "kwitter-cce65.appspot.com",
      messagingSenderId: "517648874084",
      appId: "1:517648874084:web:c602b3913317117566fd71"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send() {
      msg = document.getElementById("msg").value;
       firebase.database().ref(room_name).push({ name:user_name, message:msg, like:0 }); 
       document.getElementById("msg").value = "";
}
//End code
      } });  }); }
getData();
