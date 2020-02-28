import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDbUi2wJVdyavNif6sFD3ZghxE-ArdUHSY",
    authDomain: "react-ecommerce-2020.firebaseapp.com",
    databaseURL: "https://react-ecommerce-2020.firebaseio.com",
    projectId: "react-ecommerce-2020",
    storageBucket: "react-ecommerce-2020.appspot.com",
    messagingSenderId: "379308143357",
    appId: "1:379308143357:web:8b18d9849f5de314ce0494",
    measurementId: "G-15FSLRT66T"
  };

  

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    console.log(snapshot);

    if(!snapshot.exists){
      const { displayName, email} = userAuth;
      const createdAt = new Date();
      
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }catch(error){
        console.log(`user not set ${error.message}`)
      }
      
    }
    return userRef;
  }
  const provider = new firebase.auth.GoogleAuthProvider();
  
  provider.setCustomParameters({
    'prompt': 'select_account'
  });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);
 
  export default firebase;