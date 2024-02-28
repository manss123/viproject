<template>
    <div class="row text-center flex flex-center q-mt-xl q-mx-lg">
        <div class="col-12">
            <div class="row q-mb-lg">
                <div class="col-12">
                    <div class="text-h4 text-center text-bold text">
                        ได้รับคำแนะนำแล้ว อารมณ์คุณเป็นยังไงบ้าง บอกหน่อยได้มั้ย? 
                    </div>
                </div>
            </div>

            <div class="row q-ma-xl">
                <div class="col-12">
                    <q-card class="bg-mainlight2">
                        <q-card-section class="text text-h6 text-center">
                            ไม่ต้องคิดนาน ตอบตามที่รู้สึกได้เลย ไม่มีถูกผิดหรอกนะ <br>
                            <br>
                            ถ้ารู้สึกว่าไม่ใช่ เลือกเลข 0 <br>
                            ถ้ารู้สึกแบบนี้บ้างในบางครั้ง เลือกเลข 1 <br>
                            ถ้ารู้สึกว่าเกิดขึ้นบ่อยกับตัวเอง เลือกเลข 2 <br>
                            ถ้ารู้สึกว่าเกิดขึ้นบ่อยมาก ตรงกับตัวเองที่สุด เลือกเลข 3 <br>
                        </q-card-section>
                    </q-card>
                </div>
            </div>

            <div class="row q-ma-xl">
                <div class="col-12">
                    <q-card class="bg-mainlight">
                        <q-card-section class="text text-h6 text-left" v-for="(item, index) in questionnaireSet" :key="index">
                            {{item.question}}
                            <q-item>
                                <q-item-section side>
                                    <q-icon name="sentiment_very_satisfied"  size="lg" color="secondary" />
                                </q-item-section>

                                <q-item-section>
                                    <q-slider v-model="item.rating" marker-labels :min="0" :max="3"/>
                                </q-item-section>

                                

                                <q-item-section side>
                                    <q-icon name="sentiment_dissatisfied" size="lg" color="secondary" />
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
import { onMounted, ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import FirestoreHandle from '../composables/FirestoreHandle'
import AuthenComposable from '../composables/AuthenComposable'

export default {
    setup () {
        const questionnaireSet = [
            {
                id: 1,
                question: '1. ฉันรู้สึกว่ายากที่จะผ่อนคลายอารมณ์',
                rating: 0
            },
            {
                id: 2,
                question: '2. ฉันทราบว่าฉันมีอาการปากแห้ง',
                rating: 0
            },
            {
                id: 3,
                question: '3. ฉันรู้สึกไม่ดีขึ้นเลย',
                rating: 0
            },
            {
                id: 4,
                question: '4. ฉันมีอาการหายใจลําบาก (เช่น มีอาการหายใจเร็วขึ้นผิดปกติ มีอาการหายใจไม่ออกแม้ว่าจะไม่ได้ออกแรง)',
                rating: 0
            },
            {
                id: 5,
                question: '5.  ฉันรู้สึกทำกิจกรรมด้วยตนเองได้ค่อนข้างลำบาก',
                rating: 0
            },
            {
                id: 6,
                question: '6. ฉันเริ่มมีปฏิกิริยาตอบสนองต่อสิ่งต่างๆ มากเกินไป',
                rating: 0
            },
            {
                id: 7,
                question: '7. ฉันมีอาการสั่น (เช่น ที่มือทั้งสองข้าง)',
                rating: 0
            },
            {
                id: 8,
                question: '8. ฉันรู้สึกว่าฉันวิตกกังวลมาก',
                rating: 0
            },
            {
                id: 9,
                question: '9. ฉันรู้สึกกังวลกับเหตุการณ์ที่อาจทำให้ฉันรู้สึกตื่นกลัวและกระทำสิ่งใดโดยมิได้คิด',
                rating: 0
            },
            {
                id: 10,
                question: '10. ฉันรู้สึกว่าฉันไม่มีเป้าหมาย',
                rating: 0
            },
            {
                id: 11,
                question: '11.ฉันเริ่มรู้สึกว่าฉันมีอาการกระวนกระวายใจ',
                rating: 0
            },
            {
                id: 12,
                question: '12. ฉันรู้สึกไม่ผ่อนคลาย',
                rating: 0
            },
            {
                id: 13,
                question: '13. ฉันรู้สึกจิตใจเหงาหงอยและเศร้าซึม',
                rating: 0
            },
            {
                id: 14,
                question: '14. ฉันทนไม่ได้กับภาวะใดก็ตามที่ทำให้ฉันไม่สามารถทำอะไรต่อจากที่ฉันกําลังกระทำอยู่',
                rating: 0
            },
            {
                id: 15,
                question: '15. ฉันรู้สึกว่าฉันมีอาการคล้ายกับอาการหวั่นวิตก',
                rating: 0
            },
            {
                id: 16,
                question: '16. ฉันไม่รู้สึกกระตือรือร้นต่อสิ่งใด',
                rating: 0
            },
            {
                id: 17,
                question: '17. ฉันรู้สึกเป็นคนไม่มีคุณค่า',
                rating: 0
            },
            {
                id: 18,
                question: '18. ฉันรู้สึกว่าฉันค่อนข้างมีอารมณ์ฉุนเฉียวง่าย',
                rating: 0
            },
            {
                id: 19,
                question: '19. ฉันรับรู้ถึงการทำงานของหัวใจของฉันในตอนที่ฉันไม่ได้ออกแรง (เช่น รู้สึกถึงการเต้นของหัวใจเพิ่มขึ้น การหยุดเต้นของหัวใจ)',
                rating: 0
            },
            {
                id: 20,
                question: '20. ฉันรู้สึกกลัวโดยไม่มีเหตุผลใด ๆ',
                rating: 0
            },
            {
                id: 21,
                question: '21. ฉันรู้สึกว่าชีวิตไม่มีความหมาย',
                rating: 0
            },
        ]

        const { setDocData, updateDocData, getDocData, getRoundData, DocResult, currentUser } = FirestoreHandle()

        const currentRound = ref(null)

        const router = useRouter()

        watchEffect(()=>{
            if(currentUser.value)
            {
                getRoundData(currentUser.value).then(()=>{
                    currentRound.value = DocResult.value
                })
            }

        })

        const handleSubmitData = () => {
            const depressionIds = [3, 5, 10, 13, 16, 17, 21]
            const depressionScore = questionnaireSet
            .filter(question => depressionIds.includes(question.id))
            .reduce((sum, question) => sum + question.rating, 0)

            const anxietyIds = [2, 4, 7, 9, 15, 19, 20]
            const anxietyScore = questionnaireSet
            .filter(question => anxietyIds.includes(question.id))
            .reduce((sum, question) => sum + question.rating, 0)

            const stressIds = [1, 6, 8, 11, 12, 14, 18]
            const stressScore = questionnaireSet
            .filter(question => stressIds.includes(question.id))
            .reduce((sum, question) => sum + question.rating, 0)

            const data = {
                PostEmotionalAssessment: true,
                PostAccessDate: new Date().toLocaleDateString(),
                PostOverallScore: {
                    DepressionScore: depressionScore,
                    AnxietyScore: anxietyScore,
                    StressScore: stressScore
                },
                PostItems: {
                    Depression: questionnaireSet.filter(question => depressionIds.includes(question.id)),
                    Anxiety: questionnaireSet.filter(question => anxietyIds.includes(question.id)),
                    Stress: questionnaireSet.filter(question => stressIds.includes(question.id)),
                }
            }
            // console.log(data)
            updateDocData(`/users/${currentUser.value}/${String(currentRound.value)}/Emotional Data`, data).then(()=>{
                router.push('/comment')
            })
        }

        return {questionnaireSet, handleSubmitData}
    }
}
</script>

<style lang="scss" scoped>

</style>