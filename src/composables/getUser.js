import { ref } from 'vue'
import { auth } from '../firebase/config'
import { onAuthStateChanged, signOut } from 'firebase/auth'

const currentUser = ref(null)

const getUser = () => {

    const LogUserOut = async () => {
        signOut(auth).catch((error)=>{
            console.log(error)
        })
    }

    onAuthStateChanged(auth, (_user) => {
        if(_user)
        {
            currentUser.value = _user
        }
    })

    return { currentUser, LogUserOut }
}

export default getUser