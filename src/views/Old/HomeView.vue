<template>
        <q-page class="column justify-center">
          <div class="row">
            <div class="col-12 col-md-6">

            </div>
            <div class="column col-12 col-md-6 items-center justify-evenly">
                <div class="row text-center">
                        <p class="text-h1 text-weight-bolder" style="font-family: Yesteryear">Welcome to <br> Virtual influencer</p>
                </div>
                <div class="row text-center">
                        <p class="text-h2" style="color: #545454;">ร่วมกิจกรรมทำแบบประเมิน <br> ระดับอารมณ์ของตนเอง</p>
                </div>
                <div class="row text-center" style="margin-top: 5vh;">
                        <div class="col-12 items-center">
                            <q-btn @click="OnSignIn()" color="red" icon="mail" size="lg" label="Google Login" />
                        </div>
                </div>
            </div>
          </div>
      </q-page>
</template>

<script>
import { auth } from '../firebase/config'
import { GoogleAuthProvider, signInWithRedirect, getRedirectResult, onAuthStateChanged, signInWithCredential } from "firebase/auth";
import { db } from "../firebase/config";
import { doc,  getDoc, setDoc } from "firebase/firestore"; 

  

export default {
  name: 'HomeView',
  data(){
    return {
      userEmail: null,
      userName: null,
      userImageURL: null,
    }
  },
  setup() {
    return {

    }
  },
  props: {
    
  },
  computed: {
    
  },
  mounted() {

  },
  methods:{

    
        


    async OnSignIn(){
      let provider = new GoogleAuthProvider();
      // const credential = GoogleAuthProvider.credential(googleUser.getAuthResponse().id_token);
      // const result = await signInWithCredential(auth, credential);
      signInWithRedirect(auth, provider)
    },


    GetRedirect(){
      getRedirectResult(auth).then((result)=>{
          if(result){
          const user = result.user;
            this.CheckUserExists(user.email, user.displayName, user.photoURL, user.uid);
          }else{
           onAuthStateChanged(auth, (user)=>{
            this.CheckUserExists(user.email, user.displayName, user.photoURL, user.uid);
           })
          }
      })
    },

    CheckUserExists(email, displayName, photoURL, uid){
      //console.log("CheckUserExits")
      const userRef = doc(db, "users", email);
      getDoc(userRef).then(docSnap=>{
        if(docSnap.exists()){
            if(docSnap.data().AdditionalData==false){
              this.$router.push({name: "AdditionData"});
            }else{
              if(docSnap.data().EmotionalAssessment == false)
              {
                this.$router.push({name: "EmotionalAssessment"});
              }
              else{
                if(docSnap.data().Agreement == null || docSnap.data().Agreement == true)
                {
                  if(docSnap.data().FullName == null || docSnap.data().Telephone == null)
                  {
                    this.$router.push({name: "Agree"});
                  }
                  else{
                    this.$router.push({name: "ConsultationAgreement"});
                  }
                }
                else
                {
                  this.$router.push({name: "End"});
                }
              }
            }

            // this.$router.push({name: "SelectActivity"});
        }
        else{
          //console.log("No douments");
          this.CreateUserFirstTime(email, displayName, photoURL, uid);
        }
      })
    },

    CreateUserFirstTime(email, displayName, photoURL, uid){
      const userRef = doc(db, "users", email);
      setDoc(userRef, {
        Email: email,
        Name: displayName,
        PictureURL: photoURL,
        Uid: uid,
        AdditionalData: false,
        Agreement: null,
        EmotionalAssessment: false,
        Group: 'Group1',
        Gender: null,
        Age: null,
        StudyYear: null,
        Faculty: null,
        DepressionScore: null,
        AnxietyScore: null,
        StressScore: null,
      })
      this.$router.push("AdditionData")
    }
  },
  mounted(){
    this.GetRedirect();
  }
}
</script>

<style scoped>
.homeDiv
{
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
@media screen and (max-width: 425px) {
  .text-h1
  {
    font-size: 60px;
  }
  .text-h2
  {
    font-size: 40px;
  }
  .text-h3
  {
    font-size: 35px;
  }
}
</style>