const firebaseConfig = {
    apiKey: "AIzaSyA1xeb5nfkACdv5ZeJbelJvA65IADXpSCI",
    authDomain: "loginex-da8cb.firebaseapp.com",
    databaseURL:"https://loginex-da8cb-default-rtdb.firebaseio.com/",
    projectId: "loginex-da8cb",
    storageBucket: "loginex-da8cb.appspot.com",
    messagingSenderId: "879847993737",
    appId: "1:879847993737:web:f3d8afe009136bc82b3158"
  };

  //intialize firebase 
  firebase.initializeApp(firebaseConfig);

  //create reference database
  var LoginExplorerDB = firebase.database().ref('loginEX');

  document.getElementById('loginEX').addEventListener('submit',loginformEx);

  function loginformEx(e){
    e.preventDefault();

    var uname=getInputVal('ex-username')
    var email = getInputVal('ex-email');
    var password = getInputVal('ex-password');
    console.log(uname,email,password);
    saveDetails(uname,email,password);

  }
  
  function getInputVal(id){
    return document.getElementById(id).value;
  }

  function saveDetails(uname,email,password) {
    var newLoginEX = LoginExplorerDB.push();
    newLoginEX.set({
         uname :uname,
         email: email,
         password: password,
    })

  }
