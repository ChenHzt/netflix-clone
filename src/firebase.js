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
      const newProfile = {
        name: 'your profile',
        imageUrl: 'https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png',
        continueWatching: [],
        watchList: []
      }
      const profileId = await firestore.collection("profiles").add(newProfile);
      await userRef.set({
        email,
        profiles: [firestore.doc(`profiles/${profileId.id}`)],
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();

    const userProfiles = await Promise.all(userDocument.data().profiles.map(async (profile) => (await profile.get()).data())) ;
    return {
      uid,
      ...userDocument.data(),
      profiles: userProfiles,
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export const getCurrentUserData = async () =>{
  const user = auth.currentUser;
  if(!user) return null;
  const userData = await getUserDocument(user.uid);
  // console.log(userData);
  return userData;
}

