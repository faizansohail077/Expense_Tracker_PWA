import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBP4aY6GMYsuP9tPuGJ2olnwrURDMzgOK4",
    authDomain: "expense-tracker-pwa-42fb2.firebaseapp.com",
    databaseURL: "https://expense-tracker-pwa-42fb2.firebaseio.com",
    projectId: "expense-tracker-pwa-42fb2",
    storageBucket: "expense-tracker-pwa-42fb2.appspot.com",
    messagingSenderId: "161676017527",
    appId: "1:161676017527:web:33a760cc6da2ac0fa0ab72",
    measurementId: "G-414YGZE5VW"
}
firebase.initializeApp(config)

export default firebase