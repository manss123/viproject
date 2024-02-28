<template>
    <div class="row flex flex-center q-mt-xl q-mx-lg">
        <div class="col-12">
            <div class="row">
                <div class="col-12">
                    <div class="text-h4 text-center text-bold text">
                        ความเปลี่ยนแปลงอารมณ์ของคุณ
                    </div>
                    <div class="text-h6 text-center text q-my-md">
                        อารมณ์ของคุณก่อนและหลังปรึกษากับเราเป็นยังไงบ้างนะ?
                    </div>
                </div>
            </div>

            <div class="row q-my-lg q-px-sm">

                <div class="col-12 col-md-4 q-px-sm q-py-lg">
                    <q-card style="background-color: #DBA390;">
                        <div class="row q-px-lg flex flex-center text-center">
                            <div class="col-12 col-md-4 q-mt-xl q-mb-lg">
                                <q-img
                                :src="require('@/assets/Emotions/depress.png')"
                                spinner-color="white"
                                style="height: 15vh; max-width: 150px"
                                />
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="text text-h4 text-bold q-my-md">
                                    ภาวะ
                                </div>
                                <div class="text text-h4 text-bold q-my-md">
                                    ความเศร้า
                                </div>
                            </div>
                        </div>
                        <div class="row q-px-lg flex flex-center text-center">
                            <div class="col-10 q-my-sm">
                                <q-card-section style="background-color: #ecf4db8c;">
                                    <div class="text text-h6 text-bold q-my-md">
                                        :: ก่อนปรึกษา ::
                                    </div>
                                    <div class="text text-h4 q-my-md" v-if="depressScore >= 0 && depressScore <= 9">
                                        ปกติ
                                    </div>
                                    <div class="text text-h4 q-my-md" v-else-if="depressScore >= 10 && depressScore <= 13">
                                        เล็กน้อย
                                    </div>
                                    <div class="text text-h4 q-my-md" v-else-if="depressScore >= 14 && depressScore <= 20">
                                        ปานกลาง
                                    </div>
                                    <div class="text text-h4 q-my-md" v-else-if="depressScore >= 21 && depressScore <= 27">
                                        รุนแรง
                                    </div>
                                    <div class="text text-h4 q-my-md" v-else-if="depressScore >= 28">
                                        รุนแรงมาก
                                    </div>
                                </q-card-section>
                            </div>
                        </div>
                        <div class="row q-px-lg flex flex-center">
                            <div class="col-10 q-my-lg text-center">
                                <q-card-section style="background-color: #fff;">
                                    <div class="text text-h6 text-bold q-my-md">
                                        :: หลังปรึกษา ::
                                    </div>
                                    <div class="text text-h4 q-my-md" v-if="postDepressScore >= 0 && postDepressScore <= 9">
                                        ปกติ
                                    </div>
                                    <div class="text text-h4 q-my-md" v-else-if="postDepressScore >= 10 && postDepressScore <= 13">
                                        เล็กน้อย
                                    </div>
                                    <div class="text text-h4 q-my-md" v-else-if="postDepressScore >= 14 && postDepressScore <= 20">
                                        ปานกลาง
                                    </div>
                                    <div class="text text-h4 q-my-md" v-else-if="postDepressScore >= 21 && postDepressScore <= 27">
                                        รุนแรง
                                    </div>
                                    <div class="text text-h4 q-my-md" v-else-if="postDepressScore >= 28">
                                        รุนแรงมาก
                                    </div>
                                </q-card-section>
                            </div>
                        </div>
                    </q-card>
                </div>

                <div class="col-12 col-md-4 q-px-md q-py-lg">
                    <q-card class="bg-green">
                        <div class="row q-px-lg flex flex-center text-center">
                            <div class="col-12 col-md-4 q-mt-xl q-mb-lg">
                                <q-img
                                :src="require('@/assets/Emotions/anxiety.png')"
                                spinner-color="white"
                                style="height: 15vh; max-width: 150px"
                                />
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="text text-h4 text-bold q-my-md">
                                    ภาวะความ
                                </div>
                                <div class="text text-h4 text-bold q-my-md">
                                    วิตกกังวล
                                </div>
                            </div>
                        </div>
                        <div class="row q-px-lg flex flex-center text-center">
                            <div class="col-10 q-my-sm">
                                <q-card-section style="background-color: #ecf4db8c;">
                                    <div class="text text-h6 text-bold q-my-md">
                                        :: ก่อนปรึกษา ::
                                    </div>
                                    <div class="text text-h4 q-my-md" v-if="anxietyScore >= 0 && anxietyScore <= 9">
                                        ปกติ
                                    </div>
                                    <div class="text text-h4 q-my-md" v-else-if="anxietyScore >= 10 && anxietyScore <= 13">
                                        เล็กน้อย
                                    </div>
                                    <div class="text text-h4 q-my-md" v-else-if="anxietyScore >= 14 && anxietyScore <= 20">
                                        ปานกลาง
                                    </div>
                                    <div class="text text-h4 q-my-md" v-else-if="anxietyScore >= 21 && anxietyScore <= 27">
                                        รุนแรง
                                    </div>
                                    <div class="text text-h4 q-my-md" v-else-if="anxietyScore >= 28">
                                        รุนแรงมาก
                                    </div>
                                </q-card-section>
                            </div>
                        </div>
                        <div class="row q-px-lg flex flex-center">
                            <div class="col-10 q-my-lg text-center">
                                <q-card-section style="background-color: #fff;">
                                    <div class="text text-h6 text-bold q-my-md">
                                        :: หลังปรึกษา ::
                                    </div>
                                    <div class="text text-h4 q-my-md" v-if="postAnxietyScore >= 0 && postAnxietyScore <= 9">
                                        ปกติ
                                    </div>
                                    <div class="text text-h4 q-my-md" v-else-if="postAnxietyScore >= 10 && postAnxietyScore <= 13">
                                        เล็กน้อย
                                    </div>
                                    <div class="text text-h4 q-my-md" v-else-if="postAnxietyScore >= 14 && postAnxietyScore <= 20">
                                        ปานกลาง
                                    </div>
                                    <div class="text text-h4 q-my-md" v-else-if="postAnxietyScore >= 21 && postAnxietyScore <= 27">
                                        รุนแรง
                                    </div>
                                    <div class="text text-h4 q-my-md" v-else-if="postAnxietyScore >= 28">
                                        รุนแรงมาก
                                    </div>
                                </q-card-section>
                            </div>
                        </div>
                    </q-card>
                </div>

                <div class="col-12 col-md-4 q-px-sm q-py-lg">
                    <q-card class="bg-blue">
                        <div class="row q-px-lg flex flex-center text-center">
                            <div class="col-12 col-md-4 q-mt-xl q-mb-lg">
                                <q-img
                                :src="require('@/assets/Emotions/stress.png')"
                                spinner-color="white"
                                style="height: 15vh; max-width: 150px"
                                />
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="text text-h4 text-bold q-my-md">
                                    ภาวะ
                                </div>
                                <div class="text text-h4 text-bold q-my-md">
                                    ความเครียด
                                </div>
                            </div>
                        </div>
                        <div class="row q-px-lg flex flex-center text-center">
                            <div class="col-10 q-my-sm">
                                <q-card-section style="background-color: #ecf4db8c;">
                                    <div class="text text-h6 text-bold q-my-md">
                                        :: ก่อนปรึกษา ::
                                    </div>

                                    <div class="text text-h4 q-my-md" v-if="stressScore >= 0 && stressScore <= 9">
                                        ปกติ
                                    </div>
                                    <div class="text text-h4 q-my-md" v-else-if="stressScore >= 10 && stressScore <= 13">
                                        เล็กน้อย
                                    </div>
                                    <div class="text text-h4 q-my-md" v-else-if="stressScore >= 14 && stressScore <= 20">
                                        ปานกลาง
                                    </div>
                                    <div class="text text-h4 q-my-md" v-else-if="stressScore >= 21 && stressScore <= 27">
                                        รุนแรง
                                    </div>
                                    <div class="text text-h4 q-my-md" v-else-if="stressScore >= 28">
                                        รุนแรงมาก
                                    </div>

                                </q-card-section>
                            </div>
                        </div>
                        <div class="row q-px-lg flex flex-center">
                            <div class="col-10 q-my-lg text-center">
                                <q-card-section style="background-color: #fff;">
                                    <div class="text text-h6 text-bold q-my-md">
                                        :: หลังปรึกษา ::
                                    </div>

                                    <div class="text text-h4 q-my-md" v-if="postStressScore >= 0 && postStressScore <= 9">
                                        ปกติ
                                    </div>
                                    <div class="text text-h4 q-my-md" v-else-if="postStressScore >= 10 && postStressScore <= 13">
                                        เล็กน้อย
                                    </div>
                                    <div class="text text-h4 q-my-md" v-else-if="postStressScore >= 14 && postStressScore <= 20">
                                        ปานกลาง
                                    </div>
                                    <div class="text text-h4 q-my-md" v-else-if="postStressScore >= 21 && postStressScore <= 27">
                                        รุนแรง
                                    </div>
                                    <div class="text text-h4 q-my-md" v-else-if="postStressScore >= 28">
                                        รุนแรงมาก
                                    </div>
                                </q-card-section>
                            </div>
                        </div>
                    </q-card>
                </div>
                <div class="col-12 text-center">
                    <q-btn @click="HandleLogOut" class="text text-h6 text-black q-mx-md q-my-md" style="background-color: #FFB1A5;">
                        ออกจากระบบ
                    </q-btn>
                    <q-btn @click="HandleResult" class="text text-h6 text-white q-mx-md q-my-md" style="background-color: #63A568;">
                        ไปฮีลใจด้านอื่นต่อ
                    </q-btn>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import FirestoreHandle from '../composables/FirestoreHandle'
import AuthenComposable from '../composables/AuthenComposable'

export default {
    setup () {

        const { setDocData, updateDocData, getDocData, getRoundData, DocResult, currentUser } = FirestoreHandle()

        const currentRound = ref(null)

        const depressScore = ref(null)
        const anxietyScore = ref(null)
        const stressScore = ref(null)

        const postDepressScore = ref(null)
        const postAnxietyScore = ref(null)
        const postStressScore = ref(null)

        const router = useRouter()

        watchEffect(()=>{
            if(currentUser.value)
            {
                getRoundData(currentUser.value).then(()=>{
                    currentRound.value = DocResult.value
                }).then(()=>{
                    getDocData(`users/${currentUser.value}/${currentRound.value}/Emotional Data`).then(()=>{
                        translateData(DocResult.value)
                    })
                })
            }

        })

        const translateData = (docData) => {
            
            depressScore.value = docData.OverallScore.DepressionScore
            anxietyScore.value = docData.OverallScore.AnxietyScore
            stressScore.value = docData.OverallScore.StressScore

            postDepressScore.value = docData.PostOverallScore.DepressionScore
            postAnxietyScore.value = docData.PostOverallScore.AnxietyScore
            postStressScore.value = docData.PostOverallScore.StressScore
        }

        const HandleLogOut = () => {
                router.push('/end')
            }

        const HandleResult = () => {
            router.push('/emotionalResult')
        }
        

        return {depressScore, anxietyScore, stressScore, postAnxietyScore, postDepressScore, postStressScore, HandleLogOut, HandleResult}
    }
}
</script>

<style lang="scss" scoped>

</style>