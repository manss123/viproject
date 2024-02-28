<template>
    <div class="row text-center flex flex-center q-mt-xl q-mx-lg">
        <div class="col-12">
            <div class="row q-mb-lg">
                <div class="col-12">
                    <div class="text-h4 text-center text-bold text">
                        คุณคิดยังไงกับโปรแกรมเทคโนโลยี “มนุษย์เสมือน”?
                    </div>
                </div>
            </div>

            <div class="row q-ma-xl">
                <div class="col-12">
                    <q-card class="bg-mainlight2">
                        <q-card-section class="text text-h6 text-center">
                            แบบสอบถามความคิดเห็นนี้แบ่งออกเป็นสองส่วน คือ แบบสอบถามความคิดเห็น 5 ระดับ และ <br>
                            คําถามปลายเปิด เกี่ยวกับข้อคิดเห็นหรือข้อเสนอแนะเกี่ยวกับการใช้โปรแกรม <br>
                            <br>
                            โดยมีเกณฑ์ ดังนี้...<br>
                            5 คือ เห็นด้วยอย่างยิ่ง หมายถึง ท่านเห็นด้วยกับข้อความนั้นทั้งหมด <br>
                            4 คือ เห็นด้วยมาก หมายถึง ท่านเห็นด้วยกับข้อความนั้นเป็นส่วนใหญ่ <br>
                            3 คือ เห็นด้วยปานกลาง หมายถึง ท่านเห็นด้วยกับข้อความนั้นเป็นบางส่วน <br>
                            2 คือ ไม่เห็นด้วย หมายถึง ท่านไม่เห็นด้วยกับข้อความนั้นเป็นส่วนใหญ่ <br>
                            1 คือ ไม่เห็นด้วยอย่างยิ่ง หมายถึง ท่านไม่เห็นด้วยกับข้อความนั้นทั้งหมด

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
                                    <q-icon name="sentiment_dissatisfied" size="lg" color="secondary" />
                                </q-item-section>

                                <q-item-section>
                                    <q-slider v-model="item.rating" marker-labels :min="1" :max="5"/>
                                </q-item-section>

                                

                                <q-item-section side>
                                    <q-icon name="sentiment_very_satisfied"  size="lg" color="secondary" />
                                </q-item-section>
                            </q-item>
                        </q-card-section>
                    </q-card>
                </div>
            </div>

            <div class="row q-ma-xl">
                <div class="col-12">
                    <q-card class="bg-mainlight2">
                        <q-card-section class="text text-h6 text-center">
                            <div class="text text-h6 text-center q-py-lg">
                                ส่วนที่ 2 คําถามปลายเปิด เกี่ยวกับข้อคิดเห็นหรือข้อเสนอแนะเกี่ยวกับการใช้โปรแกรม
                            </div>
                            <q-input
                            v-model="commentText"
                            filled
                            class="bg-white"
                            label="พิมพ์แสดงความคิดเห็นของคุณที่มีต่อสมุษย์เสมือนได้ที่นี่ได้เลยจ้าาา~"
                            type="textarea"
                            />
                        </q-card-section>
                    </q-card>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <q-btn size="xl" class="bg-maindark text-white" @click="handleSubmitData" :disable="!commentText">
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
                question: '1. เทคโนโลยีที่ใช้สอดคล้องกับความต้องการในการใช้งาน',
                rating: 0
            },
            {
                id: 2,
                question: '2. เทคโนโลยีที่ใช้ตอบโจทย์สถานการณ์และบริบทที่หลากหลาย',
                rating: 0
            },
            {
                id: 3,
                question: '3.  กิจกรรมการใช้งานในระบบมีความเหมาะสมและน่าสนใจ',
                rating: 0
            },
            {
                id: 4,
                question: '4. โปรแกรมนี้ช่วยให้ผู้ใช้งานสนใจ สนุก ใช้งานง่าย',
                rating: 0
            },
            {
                id: 5,
                question: '5.  ผู้ใช้งานรู้สึกผ่อนคลายเมื่อได้ใช้โปรแกรม',
                rating: 0
            },
            {
                id: 6,
                question: '6. โปรแกรมนี้มีการตอบสนองได้อย่างมีประสิทธิภาพ',
                rating: 0
            },
            {
                id: 7,
                question: '7. โปรแกรมนี้มีการแสดงผลที่เหมาะสมบนอุปกรณ์ที่ใช้งาน',
                rating: 0
            },
            {
                id: 8,
                question: '8. โปรแกรมที่ใช้มีความปลอดภัยด้านการรักษาความลับของข้อมูล',
                rating: 0
            },
            {
                id: 9,
                question: '9. โปรแกรมนี้ตอบโจทย์ผู้ใช้งานให้สามารถนำไปประยุกต์ใช้ได้',
                rating: 0
            },
            {
                id: 10,
                question: '10. ผู้ใช้งานสามารถมีส่วนร่วมในกิจกรรมในโปรแกรมได้เป็นอย่างดี',
                rating: 0
            },
            {
                id: 11,
                question: '11.ผู้ใช้งานเห็นประโยชน์ของโปรแกรมนี้',
                rating: 0
            },
            {
                id: 12,
                question: '12. ผู้ใช้งานจะนึกถึงโปรแกรมนี้อีกเมื่อเจอกับความเครียด/วิตกกังวล/เศร้า',
                rating: 0
            },
            {
                id: 13,
                question: '13. ผู้ใช้งานจะมีการบอกต่อผู้อื่นให้มาใช้งานโปรแกรมนี้',
                rating: 0
            },
        ]

        const { setDocData, updateDocData, getDocData, getRoundData, DocResult, currentUser } = FirestoreHandle()

        const currentRound = ref(null)

        const router = useRouter()

        const commentText = ref()

        watchEffect(()=>{
            if(currentUser.value)
            {
                getRoundData(currentUser.value).then(()=>{
                    currentRound.value = DocResult.value
                })
            }

        })

        const handleSubmitData = () => {
            const data = {
                CommentItems: questionnaireSet,
                Comment: commentText.value
            }
            // console.log(data)
            updateDocData(`/users/${currentUser.value}/${String(currentRound.value)}/Emotional Data`, data).then(()=>{
                router.push('/code')
            })
        }

        return {questionnaireSet, handleSubmitData, commentText}
    }
}
</script>

<style lang="scss" scoped>

</style>