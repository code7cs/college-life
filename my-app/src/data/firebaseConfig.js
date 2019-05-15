const firebase = require('firebase');
var config = {
    apiKey: "AIzaSyCA5mYbPcQOpr7eXZXTBUfvF9ffd0NU928",
    authDomain: "collegelife-5c22a.firebaseapp.com",
    databaseURL: "https://collegelife-5c22a.firebaseio.com",
    projectId: "collegelife-5c22a",
    storageBucket: "collegelife-5c22a.appspot.com",
    messagingSenderId: "849777680702",
    appId: "1:849777680702:web:82fc3c7f2896ae88"
}
firebase.initializeApp(config);
module.exports = firebase;