import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAHj5nlNvTLeDUqbqudhbTojAHUubj7D_Q",
  authDomain: "netflix-clone-1cd5a.firebaseapp.com",
  projectId: "netflix-clone-1cd5a",
  storageBucket: "netflix-clone-1cd5a.appspot.com",
  messagingSenderId: "831444820015",
  appId: "1:831444820015:web:d30f7a135c1bfc674c66da",
  measurementId: "G-6RR0R0V0KD"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email } = user;
    try {

      await userRef.set({
        email,
        ...additionalData
      });
      const defauldProfileDocId = await userRef.collection('profiles')
      .add({name: 'your profile',
            imageUrl: 'https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png'});

    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocRef = firestore.doc(`users/${uid}`);
    const userDocument = await userDocRef.get();
    const snapshot = await userDocRef.collection('profiles').get();
    const profiles = snapshot.docs.map(doc => {return {...doc.data(),id:doc.id}});
    return {
      uid,
      ...userDocument.data(),
      profiles: profiles,
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = async () => {
  await auth.signInWithPopup(provider);
  // const userFullName = user.displayName;
  
  // console.log(user);
};

export const getCurrentUserData = async () =>{
  const user = auth.currentUser;
  if(!user) return null;
  const userData = await getUserDocument(user.uid);
  // console.log(userData);
  return userData;
}

