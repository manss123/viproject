import { ref } from "vue"
import { auth, db } from '../firebase/config'
import { signInWithRedirect, getAuth, signOut, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc, setDoc, updateDoc, getDocs, collection, query } from 'firebase/firestore'
import { useRouter } from "vue-router"

const FirestoreHandle = () => {
    const DocResult = ref(null)
    const currentUser = ref(null)

    const getDocData = async (path) => {
        const docDataRef = doc(db, path)
        const result = await getDoc(docDataRef)

        if(result.exists)
        {
            DocResult.value = result.data()
            return result.data()
        }
        else
        {
            DocResult.value = null
        }
    }

    const getAllStudentList = async () => {
        const ref = collection(db, "users")
        const snapshot = await getDocs(ref)
        const docList = snapshot.docs
        const emailList = []

        docList.forEach(docSnap => {
            emailList.push(docSnap.id)
        })

        return emailList
    }

    const getEmotionalData = async (phaseData) => {
        const emails = await getAllStudentList();
        const dataList = []
        for(const email of emails)
        {
            const data = await getDocData(`users/${email}/1/Emotional Data`)
            try {
                if(data[phaseData])
                {
                    dataList.push(data[phaseData])
                }
            } catch (error) {
                
            }
        }
        return dataList
    }

    const getEmotionalDataSingle = async (email, phaseData) => {
            const data = await getDocData(`users/${email}/1/Emotional Data`)
            try {
                if(data[phaseData])
                {
                    // console.log(data[phaseData])
                    return data[phaseData]
                }
            } catch (error) {
                return null
            }
        
    }

    const getAllDataToTable = async () => {
        const dataTable = []
        const emails = await getAllStudentList();
        let userNum = 1
        
        for(const email of emails)
        {
            const userDataSnap = await getDocData(`users/${email}`)
            const preEmotionData = await getEmotionalDataSingle(email, "OverallScore")
            const postEmotionData = await getEmotionalDataSingle(email, "PostOverallScore")
            const postCommentData = await getEmotionalDataSingle(email, "CommentItems")
            const postComment = await getEmotionalDataSingle(email, "Comment")
            const postSatisfaction = await getEmotionalDataSingle(email, "PostSatisfactionScore")

            try {

                    // console.log(userDataSnap.Email)
                    let userDataObject = {}
                    userDataObject.No = userNum
                    userDataObject.Name = userDataSnap.Nickname
                    userDataObject.Gender = userDataSnap.Gender
                    userDataObject.Age = userDataSnap.Age
                    userDataObject.StudyYear = userDataSnap.StudyYear
                    userDataObject.School = userDataSnap.Faculty
                    userDataObject.userCode = userDataSnap.userCode
                    
                    if(postComment)
                    {
                        userDataObject.Comment = postComment
                    }

                    if(postSatisfaction)
                    {
                        userDataObject.PostSatisfaction = postSatisfaction.SatisfyScore
                    }

                    if(preEmotionData)
                    {
                        userDataObject.PreDepressScore = preEmotionData.DepressionScore
                        userDataObject.PreAnxietyScore = preEmotionData.AnxietyScore
                        userDataObject.PreStressScore = preEmotionData.StressScore
                    }
                    else
                    {
                        userDataObject.PreDepressScore = null
                        userDataObject.PreAnxietyScore = null
                        userDataObject.PreStressScore = null
                    }

                    if(postEmotionData)
                    {
                        userDataObject.PostDepressScore = postEmotionData.DepressionScore
                        userDataObject.PostAnxietyScore = postEmotionData.AnxietyScore
                        userDataObject.PostStressScore = postEmotionData.StressScore
                    }
                    else
                    {
                        userDataObject.PostDepressScore = null
                        userDataObject.PostAnxietyScore = null
                        userDataObject.PostStressScore = null
                    }

                    if(postCommentData)
                    {
                        userDataObject.AICommentQ1 = postCommentData[0].rating
                        userDataObject.AICommentQ2 = postCommentData[1].rating
                        userDataObject.AICommentQ3 = postCommentData[2].rating
                        userDataObject.AICommentQ4 = postCommentData[3].rating
                        userDataObject.AICommentQ5 = postCommentData[4].rating
                        userDataObject.AICommentQ6 = postCommentData[5].rating
                        userDataObject.AICommentQ7 = postCommentData[6].rating
                        userDataObject.AICommentQ8 = postCommentData[7].rating
                        userDataObject.AICommentQ9 = postCommentData[8].rating
                        userDataObject.AICommentQ10 = postCommentData[9].rating
                        userDataObject.AICommentQ11 = postCommentData[10].rating
                        userDataObject.AICommentQ12 = postCommentData[11].rating
                        userDataObject.AICommentQ13 = postCommentData[12].rating
                    }

                    dataTable.push(userDataObject)
                    userNum++
            } catch (error) {
                console.log(error)
            }
        }
        // console.log(dataTable)
        return dataTable
    }

    const getRoundData = async (email) => {
        const docDataRef = doc(db, 'users', email)
        const result = await getDoc(docDataRef)

        if(result.exists)
        {
            DocResult.value = result.data().Round
        }
        
        return result.data().Round
    }

    const updateDocData = async (path, data) => {
        const userRef = doc(db, path)
        await updateDoc(userRef, data)
    }

    const setDocData = async (path, data) => {
        const userRef = doc(db, path)
        await setDocDoc(userRef, data)
    }

    onAuthStateChanged(auth, async (_user) => {
        if(_user){
            currentUser.value = _user.email
        }
    })

    return {updateDocData, setDocData, getDocData, DocResult, getRoundData, currentUser, getEmotionalData, getAllDataToTable}
}

export default FirestoreHandle