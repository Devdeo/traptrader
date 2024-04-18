import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

import { getStorage, ref, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDp5dbXIs5qg5aHfeUs-8xm4yj7kFe5voI",
  authDomain: "xpost-2c3c4.firebaseapp.com",
  projectId: "xpost-2c3c4",
  storageBucket: "xpost-2c3c4.appspot.com",
  messagingSenderId: "82427383413",
  appId: "1:82427383413:web:8f04d51a440068c499323c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const currentDate = new Date();

    // Format the date as needed
    const formattedDate = currentDate.toDateString();
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
        plan: 'free',
        date: formattedDate
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const currentDate = new Date();

    // Format the date as needed
    const formattedDate = currentDate.toDateString();
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
      plan: 'free',
      date: formattedDate,
      odid:'',
      payid: '',
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const storage = getStorage(app);

const getFileDownloadURL = async (fileName) => {
  try {
    const fileRef = ref(storage, fileName);
    const downloadURL = await getDownloadURL(fileRef);
    console.log("Download URL:", downloadURL);
    return downloadURL;
  } catch (error) {
    console.error("Error getting file download URL:", error);
    return null;
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};



export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
  getFileDownloadURL,
};