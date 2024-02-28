<template>
    <div class="row text-center flex flex-center q-mt-xl q-mx-lg">
        <div class="col-12">
            <div class="row q-mb-lg">
                <div class="col-12">
                    <div class="text-h4 text-center text-bold text">
                        คำแนะนำที่ยูอิให้ไป คุณรู้สึกอย่างไรบ้าง บอกหน่อยได้มั้ย? 
                    </div>
                </div>
            </div>

            <div class="row q-ma-xl">
                <div class="col-12">
                    <q-card class="bg-mainlight2">
                        <q-card-section class="text text-h6 text-center">
                            ถ้ารู้สึกพอใจน้อยที่สุด เลือกเลข 0 <br>
                            ถ้ารู้สึกพอใจน้อย เลือกเลข 1 <br>
                            ถ้ารู้สึกพอใจปานกลาง เลือกเลข 2 <br>
                            ถ้ารู้สึกพอใจมาก เลือกเลข 3 <br>
                            ถ้ารู้สึกพอใจมากที่สุด เลือกเลข 4  <br>
                        </q-card-section>
                    </q-card>
                </div>
            </div>

            <div class="row q-ma-xl">
                <div class="col-12">
                    <q-card class="bg-mainlight">
                        <q-card-section class="text text-h6 text-left" v-for="(item, index) in questionnaireSet" :key="index">
                            <!-- {{item.question}} -->
                            <q-item>
                                <q-item-section side>
                                    <q-icon name="sentiment_dissatisfied" size="lg" color="secondary" />
                                </q-item-section>

                                <q-item-section>
                                    <q-slider v-model="item.rating" marker-labels :min="0" :max="4"/>
                                </q-item-section>

                                

                                <q-item-section side>
                                    <q-icon name="sentiment_very_satisfied"  size="lg" color="secondary" />
                                </q-item-section>
                            </q-item>
                        </q-card-section>
                    </q-card>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <q-btn size="xl" class="bg-maindark text-white" @click="handleSubmitData">
                        เรียบร้อย
                    </q-btn>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import FirestoreHandle from '../composables/FirestoreHandle'

export default {
    setup () {
        const questionnaireSet = [
            {
                id: 1,
                // question: 'รู้สึกพอใจมากแค่ไหน',
                rating: 0
            },
        ]

        const { setDocData, updateDocData, getDocData, getRoundData, DocResult, currentUser } = FirestoreHandle()

        const currentRound = ref(null)

        const router = useRouter()

        // const $q = useQuasar()

        // const alert = () => {
        //     $q.dialog({
        //         title: 'เดี๋ยว!!',
        //         message: 'ก่อนใช้โปรแกรมเรามาสำรวจอารมณ์ของคุณกันก่อนนะคะ'
        //     }).onOk(() => {
        //         // console.log('OK')
        //     }).onCancel(() => {
        //         // console.log('Cancel')
        //     }).onDismiss(() => {
        //         // console.log('I am triggered on both OK and Cancel')
        //     })
        // }

        // onMounted(()=>{
        //     alert()
        // })

        watchEffect(()=>{
            if(currentUser.value)
            {
                getRoundData(currentUser.value).then(()=>{
                    currentRound.value = DocResult.value
                })
            }

        })

        const handleSubmitData = () => {
            // const depressionIds = [3, 5, 10, 13, 16, 17, 21]
            // const depressionScore = questionnaireSet
            // .filter(question => depressionIds.includes(question.id))
            // .reduce((sum, question) => sum + question.rating, 0)

            // const anxietyIds = [2, 4, 7, 9, 15, 19, 20]
            // const anxietyScore = questionnaireSet
            // .filter(question => anxietyIds.includes(question.id))
            // .reduce((sum, question) => sum + question.rating, 0)

            // const stressIds = [1, 6, 8, 11, 12, 14, 18]
            // const stressScore = questionnaireSet
            // .filter(question => stressIds.includes(question.id))
            // .reduce((sum, question) => sum + question.rating, 0)

            const SatisfyScore = questionnaireSet[0].rating

            const data = {
                PostEmotionalAssessment: true,
                PostAccessDate: new Date().toLocaleDateString(),
                PostSatisfactionScore: {
                    SatisfyScore,
                },
                PostSatisfactionItems: {
                    Satisfaction: questionnaireSet[0]
                }
            }
            // console.log(data)
            updateDocData(`/users/${currentUser.value}/${String(currentRound.value)}/Emotional Data`, data).then(()=>{
                router.push('/end')
            })
        }

        return {questionnaireSet, handleSubmitData}
    }
}
</script>

<style lang="scss" scoped>

</style>