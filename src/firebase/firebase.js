import firebase from 'firebase/app';//   importing firebase utitility and use firebase instance
import 'firebase/firestore';//for database and enables to access firestore function
import 'firebase/auth';//for authentication and enables to access auth function

const config = {
    apiKey: "AIzaSyDkkuZeAeDiaXOjIxFJ_OsEA52TiwVt_LY",
    authDomain: "reactproj123.firebaseapp.com",
    databaseURL: "https://reactproj123.firebaseio.com",
    projectId: "reactproj123",
    storageBucket: "reactproj123.appspot.com",
    messagingSenderId: "624863257135",
    appId: "1:624863257135:web:d829c65483084d25251cda",
    measurementId: "G-V5HQN5H1DH"
  };//base configuration key generated while setting up DB from firebase site

firebase.initializeApp(config);

export const firebaseuserprofile = async (user,additionalData) =>{
  console.log(user);

  if(!user) return;

  const usercheck=firestore.doc(`/user/${user.uid}`);
  //gets unique uid for every user doc from user collection
  const check=await usercheck.get();

          if(!check.exists){
            const {displayName,email}=user;
            const date= new Date();
          //to check if entered data is true or false if false then if is executed to create a new entry

          try{
           await usercheck.set({displayName,email,date,...additionalData});
            //console.log(displayName);
              }
              catch(error){
                    console.log('error message',error.message);
                      }
                        }
    return usercheck;
}//checking if user exists or not if not then added to DB (only for sign in with google)

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt:'select_account'})//triggers popup when use signin with google

export const signinwithgoogle = () => auth.signInWithPopup(provider);

export default firebase;//enalbes to use firebase library
