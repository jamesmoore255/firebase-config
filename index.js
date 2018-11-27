/**
 * Basic firebase init for Polymer
 */
(function() {
  'use strict';
  const firebase = window.firebase;
  if (typeof firebase === 'undefined') {
    throw new Error('hosting/init-error: Firebase SDK not detected.');
  }
  // Initialize Firebase
  firebase.initializeApp({
    apiKey: '******************',
    authDomain: 'james-moore-destinations.firebaseapp.com',
    projectId: 'james-moore-destinations',
    storageBucket: 'james-moore-destinations.appspot.com',
  });
  // set data property on dom-bind
  let autobind = document.querySelector('dom-bind');
  if (autobind) {
    firebase.auth().onAuthStateChanged((user) => {
      autobind.user = user;
      autobind.signedIn = !(!user);
    });
  }
  // Enable firestore persistence
  setTimeout(() => {
    const firestore = firebase.firestore();
    firestore.settings({
      timestampsInSnapshots: true,
    });
  }, 200);
})();
