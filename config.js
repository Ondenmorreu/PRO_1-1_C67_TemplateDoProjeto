import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBebJQuSQmeDet3u4G70V7WOm5O_wH-M-g",
    authDomain: "projeto67-git-3b3d4.firebaseapp.com",
    databaseURL: "https://projeto67-git-3b3d4-default-rtdb.firebaseio.com",
    projectId: "projeto67-git-3b3d4",
    storageBucket: "projeto67-git-3b3d4.appspot.com",
    messagingSenderId: "493500167042",
    appId: "1:493500167042:web:d229d7c0f1e5f2f410d59b"
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();