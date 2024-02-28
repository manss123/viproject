<template>
    <div class="row text-center flex flex-center q-mt-xl q-mx-sm">
        <div class="col-12">
            <div class="row q-my-lg">
                <div class="col-12">
                    <div class="text text-h4 text-bold">
                        สัปดาห์ที่แล้ว อารมณ์ของคุณเป็นแบบนี้เอง...
                    </div>
                </div>
            </div>
            <div class="row q-my-md">
                <div class="col-12">
                    <div class="text text-h6">
                        เลือกปรับอารมณ์ตัวเองได้เลยจ้าาา~
                    </div>
                </div>
            </div>

            <div class="row q-my-lg q-px-sm">
                <div class="col-12 col-md-4 q-px-sm">
                    <q-card class="bg-cream">
                        <div class="row q-px-lg flex flex-center">
                            <div class="col-12 col-md-6 q-mt-xl q-mb-lg">
                                <q-img
                                :src="require('@/assets/Emotions/depress.png')"
                                spinner-color="white"
                                style="height: 25vh; max-width: 350px"
                                />
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="text text-h4 q-my-md">
                                    เธอมีความ
                                </div>
                                <div class="text text-h3 text-bold q-my-md">
                                    เศร้า
                                </div>
                                <div class="text text-h4 q-my-md">
                                    ในระดับ
                                </div>
                            </div>
                        </div>
                        <div class="row q-px-lg flex flex-center">
                            <div class="col-10 q-my-sm">
                                <q-card-section style="background-color: #ecf4db8c;">
                                    <div class="text text-h3 text-bold q-my-md" v-if="depressScore >= 0 && depressScore <= 9">
                                        ปกติ
                                    </div>
                                    <div class="text text-h3 text-bold q-my-md" v-else-if="depressScore >= 10 && depressScore <= 13">
                                        เล็กน้อย
                                    </div>
                                    <div class="text text-h3 text-bold q-my-md" v-else-if="depressScore >= 14 && depressScore <= 20">
                                        ปานกลาง
                                    </div>
                                    <div class="text text-h3 text-bold q-my-md" v-else-if="depressScore >= 21 && depressScore <= 27">
                                        รุนแรง
                                    </div>
                                    <div class="text text-h3 text-bold q-my-md" v-else-if="depressScore >= 28">
                                        รุนแรงมาก
                                    </div>
                            </q-card-section>
                            </div>
                        </div>
                        <div class="row q-px-lg flex flex-center">
                            <div class="col-12 q-my-lg">
                                <q-card-section style="background-color: #fff;">
                                    <div class="text text-h6">
                                        อยากปรับความเศร้าจัง
                                    </div>
                                    <!-- <q-btn class="text text-h6 text-white" style="background-color: #785A51;" label="กดเพื่อไปต่อเลยยย"></q-btn> -->
                                    <div class="text text-h3 text-bold q-my-md">
                                        <q-btn class="text text-h6 text-white" style="background-color: #785A51;" label="กดเพื่อไปต่อเลยยย" @click="routerDepress(depressScore)"></q-btn>
                                    </div>
                                </q-card-section>
                            </div>
                        </div>
                    </q-card>
                </div>
                <div class="col-12 col-md-4 q-px-md">
                    <q-card class="bg-green">
                        <div class="row q-px-lg flex flex-center">
                            <div class="col-12 col-md-6 q-mt-xl q-mb-lg">
                                <q-img
                                :src="require('@/assets/Emotions/anxiety.png')"
                                spinner-color="white"
                                style="height: 25vh; max-width: 350px"
                                />
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="text text-h4 q-my-md">
                                    เธอมีความ
                                </div>
                                <div class="text text-h4 text-bold q-my-md">
                                    วิตกกังวล
                                </div>
                                <div class="text text-h4 q-my-md">
                                    ในระดับ
                                </div>
                            </div>
                        </div>
                        <div class="row q-px-lg flex flex-center">
                            <div class="col-10 q-my-sm">
                                <q-card-section style="background-color: #ecf4db8c;">
                                    <div class="text text-h3 text-bold q-my-md" v-if="anxietyScore >= 0 && anxietyScore <= 9">
                                        ปกติ
                                    </div>
                                    <div class="text text-h3 text-bold q-my-md" v-else-if="anxietyScore >= 10 && anxietyScore <= 13">
                                        เล็กน้อย
                                    </div>
                                    <div class="text text-h3 text-bold q-my-md" v-else-if="anxietyScore >= 14 && anxietyScore <= 20">
                                        ปานกลาง
                                    </div>
                                    <div class="text text-h3 text-bold q-my-md" v-else-if="anxietyScore >= 21 && anxietyScore <= 27">
                                        รุนแรง
                                    </div>
                                    <div class="text text-h3 text-bold q-my-md" v-else-if="anxietyScore >= 28">
                                        รุนแรงมาก
                                    </div>
                            </q-card-section>
                            </div>
                        </div>
                        <div class="row q-px-lg flex flex-center">
                            <div class="col-12 q-my-lg">
                                <q-card-section style="background-color: #fff;">
                                    <div class="text text-h6">
                                        อยากลดความกังวลแล้ว
                                    </div>
                                    <!-- <q-btn @click="goToContent" class="text text-h6 text-white" style="background-color: #129602;" label="กดเพื่อดูวิธีกันเลยยย"></q-btn> -->
                                    <div class="text text-h3 text-bold q-my-md">
                                        <q-btn class="text text-h6 text-white" style="background-color: #129602;" label="กดเพื่อดูวิธีกันเลยยย" @click="routerAnxiety(anxietyScore)"></q-btn>
                                    </div>
                                </q-card-section>
                            </div>
                        </div>
                    </q-card>
                </div>
                <div class="col-12 col-md-4 q-px-sm">
                    <q-card class="bg-blue">
                        <div class="row q-px-lg flex flex-center">
                            <div class="col-12 col-md-6 q-mt-xl q-mb-lg">
                                <q-img
                                :src="require('@/assets/Emotions/stress.png')"
                                spinner-color="white"
                                style="height: 25vh; max-width: 350px"
                                />
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="text text-h4 q-my-md">
                                    เธอมีความ
                                </div>
                                <div class="text text-h3 text-bold q-my-md">
                                    เครียด
                                </div>
                                <div class="text text-h4 q-my-md">
                                    ในระดับ
                                </div>
                            </div>
                        </div>
                        <div class="row q-px-lg flex flex-center">
                            <div class="col-10 q-my-sm">
                                <q-card-section style="background-color: #ecf4db8c;">
                                    <div class="text text-h3 text-bold q-my-md" v-if="stressScore >= 0 && stressScore <= 9">
                                        ปกติ
                                    </div>
                                    <div class="text text-h3 text-bold q-my-md" v-else-if="stressScore >= 10 && stressScore <= 13">
                                        เล็กน้อย
                                    </div>
                                    <div class="text text-h3 text-bold q-my-md" v-else-if="stressScore >= 14 && stressScore <= 20">
                                        ปานกลาง
                                    </div>
                                    <div class="text text-h3 text-bold q-my-md" v-else-if="stressScore >= 21 && stressScore <= 27">
                                        รุนแรง
                                    </div>
                                    <div class="text text-h3 text-bold q-my-md" v-else-if="stressScore >= 28">
                                        รุนแรงมาก
                                    </div>
                            </q-card-section>
                            </div>
                        </div>
                        <div class="row q-px-lg flex flex-center">
                            <div class="col-12 q-my-lg">
                                <q-card-section style="background-color: #fff;">
                                    <div class="text text-h6">
                                        ไม่อยากเครียดแล้ว ทำไงดี?
                                    </div>
                                    <!-- <q-btn class="text text-h6 text-white" style="background-color: #004AAD;" label="กดไปดูวิธีกันนน"></q-btn> -->
                                    <div class="text text-h3 text-bold q-my-md">
                                            <q-btn class="text text-h6 text-white" style="background-color: #004AAD;" label="กดไปดูวิธีกันนน" @click="routerStress(stressScore)"></q-btn>
                                    </div>
                                </q-card-section>
                            </div>
                        </div>
                    </q-card>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import { onMounted, ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import FirestoreHandle from '../composables/FirestoreHandle'
// import AuthenComposable from '../composables/AuthenComposable'

export default {
    setup () {

        const { setDocData, updateDocData, getDocData, getRoundData, DocResult, currentUser } = FirestoreHandle()
        // const { currentUser } = AuthenComposable()

        const currentRound = ref(null)

        const depressScore = ref(null)
        const anxietyScore = ref(null)
        const stressScore = ref(null)

        const router = useRouter()

        watchEffect(()=>{
            if(currentUser.value)
            {
                handleUser();
                // getRoundData(currentUser.value).then(()=>{
                //     currentRound.value = DocResult.value
                //     console.log(currentRound.value)
                // }).then(()=>{
                //     const docData = getDocData(`users/${currentUser.value}/${currentRound.value}/Emotional Data`)
                //     translateData()
                // })
            }
        })

        const handleUser = async () => {
            currentRound.value = await getRoundData(currentUser.value)
            const docData = await getDocData(`users/${currentUser.value}/${currentRound.value}/Emotional Data`)
            translateData(docData)
        }

        const translateData = (docData) => {
            if(docData.OverallScore.DepressionScore)
            {
                depressScore.value = docData.OverallScore.DepressionScore
            }

            if(docData.OverallScore.AnxietyScore)
            {
                anxietyScore.value = docData.OverallScore.AnxietyScore
            }

            if(docData.OverallScore.StressScore)
            {
                stressScore.value = docData.OverallScore.StressScore
            }
        }

        const routerDepress = (score) => {
            if(score >= 0 && score <= 13) router.push('/lowdepression')
            else if (score >= 14 && score <= 20) router.push('/mediumdepression')
            else if (score >= 21) router.push('/highdepression')
        }

        const routerAnxiety = (score) => {
            if(score >= 0 && score <= 13) router.push('/lowanxiety')
            else if (score >= 14 && score <= 20) router.push('/medanxiety')
            else if (score >= 21) router.push('/highanxiety')
        }

        const routerStress = (score) => {
            if(score >= 0 && score <= 13) router.push('/lowstress')
            else if (score >= 14 && score <= 20) router.push('/mediumstress')
            else if (score >= 21) router.push('/highstress')
        }

        return { depressScore, anxietyScore, stressScore, routerDepress, routerAnxiety, routerStress}
    }
}
</script>

<style lang="scss" scoped>
.bg-cream{
    background-color: #DBA390;
}
.bg-green{
    background-color: #63A568 !important; 
}
.bg-blue{
    background-color: #51ABB2 !important;
}
</style>