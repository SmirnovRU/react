import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAHqGqAeXSDNxlYOGW06VdvNeAZSOwjcXA",
  authDomain: "chat-3c68e.firebaseapp.com",
  databaseURL:
    "https://chat-3c68e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chat-3c68e",
  storageBucket: "chat-3c68e.appspot.com",
  messagingSenderId: "598345920547",
  appId: "1:598345920547:web:0f90aced7f65b626e94196",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebase.database();
