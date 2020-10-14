import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB8rOl2zwJ4a0GSlqImnDU77EoyC4XwVIo",
  authDomain: "ecommerce-db-d35ba.firebaseapp.com",
  databaseURL: "https://ecommerce-db-d35ba.firebaseio.com",
  projectId: "ecommerce-db-d35ba",
  storageBucket: "ecommerce-db-d35ba.appspot.com",
  messagingSenderId: "566297145762",
  appId: "1:566297145762:web:277357c00534adfb9ec2fb",
  measurementId: "G-K741Q3ETK0"
};

  export const createUserProfileDocument = async ( userAuth, additionalData ) => {
    if (!userAuth) return;
     
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };
  


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore(); 

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

  

