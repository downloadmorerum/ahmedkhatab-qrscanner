import { firebase } from "@firebase/app";
import "@firebase/firestore";
var config = {
    apiKey: "AIzaSyA3FohM7pRZqtTIxGnEglWuBRlqqCBbzhA",
    authDomain: "ticketapp-f343e.firebaseapp.com",
    databaseURL: "https://ticketapp-f343e.firebaseio.com",
    projectId: "ticketapp-f343e",
    storageBucket: "ticketapp-f343e.appspot.com",
    messagingSenderId: "271636107684"
  };
  const firebaseApp = firebase.initializeApp(config);
  export const firestore = firebaseApp.firestore();
