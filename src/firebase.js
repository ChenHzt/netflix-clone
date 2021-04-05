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
  console.log('firebase rocks!');
  if (!snapshot.exists) {
    const { email } = user;
    try {
      // const newProfile = {
      //   name: 'your profile',
      //   imageUrl: 'https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png',
      //   // continueWatching: [],
      //   // watchList: []
      // }
      // const profileId = await firestore.collection("profiles").add(newProfile);
      // firestore.doc()
      await userRef.set({
        email,
        // profiles: [firestore.doc(`profiles/${profileId.id}`)],
        ...additionalData
      });
      const defauldProfileDocId = await userRef.collection('profiles')
      .add({name: 'your profile',
            imageUrl: 'https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png'});
      // await userRef.collection(`profiles/${defauldProfileDocId}`).collection('watchList');
      // await userRef.collection(`profiles/${defauldProfileDocId}`).collection('continueWatching');
      

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
    // const temp = []
    const snapshot = await userDocRef.collection('profiles').get();
    const profiles = snapshot.docs.map(doc => doc.data());
    console.log(snapshot);
    // const userProfiles = await Promise.all(temp.map(async (profile) => (await profile.get()).data())) ;
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

