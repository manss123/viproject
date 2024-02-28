import { async } from "@firebase/util"
import { ref } from "vue"
import { auth, db } from '../firebase/config'
import { signInWithRedirect, getAuth, signOut, GoogleAuthProvider, onAuthStateChanged, getRedirectResult } from 'firebase/auth'
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'
import { useRouter } from "vue-router"

const AuthenComposable = () => {
    const currentUser  = ref(null)
    const error = ref(null)
    const router = useRouter()
    const provider = new GoogleAuthProvider();
    const signInWithGoogle = async () => {
        try {
            const result = await signInWithRedirect(auth, provider)
            currentUser.value = result.user

            await new Promise((resolve) => {
                const unsubscribe = auth.onAuthStateChanged((_user) => {
                    if (_user) {
                        unsubscribe()
                        resolve()
                    }
                })
            })

            // signInWithRedirect(auth, provider)
            // .then((userCredential)=> {
            //     const user = userCredential.user
            //     console.log(userCredential)
            // })
        } catch (err) {
            error.value = err.message
        }
    }

    // const signOut = async () => {
    //     try {
    //         await auth.signOut().then(() =>{
    //             router.push('/')
    //         })
    //     } catch (err) {
    //         error.value = err.message
    //     }
    // }

    onAuthStateChanged(auth, (_user) => {
        // console.log(_user)
        if(_user){
            currentUser.value = _user
            checkProfileExist(_user)
        }
    })

    // onAuthStateChanged(auth, (_user) => {
    //     if(_user)
    //     {
    //         currentUser.value = _user
    //     }
    //     else
    //     {
    //         currentUser.value = null
    //     }
    // })

    // const checkUserAuthen = async () => {
    //     onAuthStateChanged(auth, (_user) => {
    //         console.log(_user)
    //         if(_user)
    //         {
    //             checkProfileExist(_user)
    //         }
    //     })
    // }

    const checkProfileExist = async (_user) => {
        // console.log(_user)
            // router.push('/home')
            // const user = auth.currentUser
            const ref = await getDoc(doc(db, "users", _user.email))
            // console.log(user)
            if(_user.email == 'asawi2516@gmail.com' 
            // || _user.email == 'virtualinfluencer.mfu@gmail.com'
            )
            {
                router.push('/teacherEmoResult')
            }
            else
            {
                if (_user) {
                
                    if (ref.exists()) {
                        const lastAccessDate = ref.data().lastAccessDate;
                        const currentDate = new Date().toLocaleDateString();
                        const currentRoundString =  String(ref.data().Round)
    
                        if(ref.data().AdditionalData == false)
                        {
                            router.push('/recommend')
                        }
                        else
                        {
                            const emotionalDataRef = await getDoc(doc(db, "users", _user.email, currentRoundString, 'Emotional Data'))
                            // new Date
                            if (lastAccessDate !== currentDate) {
                                let currentRoundInt = parseInt(currentRoundString)
                                currentRoundInt++
                                // Add Round and update time
                                updateDoc(doc(db, "users", _user.email), {
                                    lastAccessDate: currentDate,
                                    Round: currentRoundInt
                                }).then(()=>{
                                    // Create new round data
                                    setDoc(doc(db, "users", _user.email, currentRoundInt.toString(), 'Emotional Data'), {
                                        EmotionalAssessment: false,
                                        PostEmotionalAssessment: false,
                                        Agreement: null,
                                        // DepressionScore: null,
                                        // AnxietyScore: null,
                                        // StressScore: null,
                                        AccessDate: null,
                                    }).then(()=>{
                                        router.push('/emotionalAssess')
                                    })
                                })
                            }
                            // Same day
                            else
                            {
                                // check if assessed
                                // not assessed => go to assessed
                                if(!emotionalDataRef.data().EmotionalAssessment)
                                {
                                    router.push('/emotionalAssess')
                                }
                                // assessed => go to result
                                else
                                {
                                    router.push('/emotionalResult')
                                    console.log('pushing')
                                }
                            }
                        }
    
                    } else {
                        // Create first-time data and go to addData
                        const userRef = doc(db, "users", _user.email);
                        setDoc(userRef, {
                            Email: _user.email,
                            Name: _user.displayName,
                            Nickname: null,
                            PictureURL: _user.photoURL,
                            Uid: _user.uid,
                            AdditionalData: false,
                            Group: 'Group2',
                            Gender: null,
                            Age: null,
                            StudyYear: null,
                            Faculty: null,
                            AvartarID: null,
                            Round: 1,
                            lastAccessDate: new Date().toLocaleDateString(),
    
    
                        }).then(()=>{
                            setDoc(doc(db, "users", _user.email, '1', 'Emotional Data'), {
                                EmotionalAssessment: false,
                                Agreement: null,
                                // DepressionScore: null,
                                // AnxietyScore: null,
                                // StressScore: null,
                                AccessDate: null,
                            }).then(()=>{
                                router.push('/additionData')
                            })
                        })
    
                        
                    }
                }
            }
    }


    // const getUserData = async (email) => {
    //     onAuthStateChanged(auth, async (_user) => {

    //     })
    // }

    return { currentUser, error, signInWithGoogle}
}

export default AuthenComposable