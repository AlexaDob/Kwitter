//ADD YOUR FIREBASE LINKS
//var firebaseConfig = {
    //apiKey: "AIzaSyAh8hG31Ff3UCMewzcFHn5PPiS40p3e5pI",
    //authDomain: "hello-rrnb.firebaseapp.com",
    //databaseURL: "https://hello-rrnb.firebaseio.com",
    //projectId: "hello-rrnb",
    //storageBucket: "hello-rrnb.appspot.com",
    //messagingSenderId: "347055621164",
    //appId: "1:347055621164:web:d2d5a8811223aa6719fd89",
    //measurementId: "G-J6V7D1BZRV"
  //};
  // Initialize Firebase
  //firebase.initializeApp(firebaseConfig);

  var firebaseConfig = {
    apiKey: "AIzaSyBEYkjzZqFxz2IZ8FHUgANr7B0eVc32Xtw",
    authDomain: "kwitter-fbe45.firebaseapp.com",
    databaseURL: "https://kwitter-fbe45-default-rtdb.firebaseio.com",
    projectId: "kwitter-fbe45",
    storageBucket: "kwitter-fbe45.appspot.com",
    messagingSenderId: "962239798025",
    appId: "1:962239798025:web:c34ce56e1767f9c2f711d8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  
  
    username = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + username + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });});}
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "log-in_page.html";
  }