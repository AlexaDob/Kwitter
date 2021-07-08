//YOUR FIRE BASE LINKS
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
  
  
  
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");
  
  function send()
  {
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
  name1:user_name,
  message:msg,
  like:0
  });
  
  document.getElementById("msg").value = "";
  }
  
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
  //Start code
       console.log(firebase_message_id);
         console.log(message_data);
         name1 = message_data['name1'];
         message = message_data['message'];
       like = message_data['like'];
       name_with_tag = "<h4> "+ name1 +"<img class='user_tick' src='tick.png'></h4>";
       message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
  like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
       span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
  
      row = name_with_tag + message_with_tag +like_button + span_with_tag;       
      document.getElementById("output").innerHTML += row;
  //End code
    } });  }); }
  getData();
  
  function updateLike(message_id)
  {
  console.log("clicked on like button - " + message_id);
  button_id = message_id;
  likes = document.getElementById(button_id).value;
  updated_likes = Number(likes) + 1;
  console.log(updated_likes);
  
  firebase.database().ref(room_name).child(message_id).update({
      like : updated_likes  
   });
  
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("log-in_page.html");
  }