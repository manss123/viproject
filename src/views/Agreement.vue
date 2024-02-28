<template>
    <div class="row text-center flex flex-center q-mt-md q-mx-lg">
        <div class="col-12">
            <div class="row q-my-lg">
                <div class="col-12">
                    <div class="text text-h4 text-bold">
                        คุณอยากคุยปรึกษากับ "ยูอิ" มั้ย?
                    </div>
                </div>
            </div>
            <div class="row q-my-lg q-px-xl flex flex-center">
                <div class="col-12 col-md-6">
                    <div class="text text-h4 text">
                        <q-img
                        :src="require('@/assets/TP AI material YUI.png')"
                        spinner-color="white"
                        :fit="'contain'"
                        :ratio="17/15"
                        />
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="row q-py-lg">
                        <div class="col-12">
                            <q-card class="bg-mainlight">
                                <div class="text text-h6 q-pa-lg text-justify">
                                    ถ้าคุณรู้สึกเครียด/กังวล/เศร้า และยินดีเป็นอาสาสมัคร พูดคุย ขอรับการปรึกษากับ"ยูอิ"ได้ 
                                    "ยูอิ"สามารถช่วยบรรเทาความเครียด/ความกังวล/ความเศร้าของคุณ
                                    โดยใช้เวลาประมาณ 10-15 นาที 
                                    ซึ่งคุณสามารถหยุดคุยเมื่อไรก็ได้ตามที่คุณสะดวกและสามารถเข้ามากี่ครั้งก็ได้ <br>
                                    <br>
                                    ในการคุยกัน "ยูอิ" จะไม่รู้ว่าตัวตนคุณเป็นใคร เราจะคุยกันผ่านตัวตนที่คุณเลือกไว้ ระบบของยูอิจะบันทึกเฉพาะข้อมูลที่คุณอนุญาตเพื่อใช้เป็นฐานข้อมูลการใช้งานเท่านั้น จะไม่มีใครรู้ข้อมูลของคุณ นอกจากทีมวิจีย ซึ่งมีระบบรักษาความลับ และเมื่อคุยเสร็จ คุณช่วยบอก "ยูอิ" ด้วยนะคะว่ารู้สึกอย่างไร 
                                    ซึ่ง "ยูอิ" หวังว่าการคุยกันของเราจะเป็นประโยชน์ต่อคุณ <br>
                                    <br>
                                    หลังจากที่พูดคุยกันเสร็จขอให้คุณประเมินความรู้สึกอีกครั้งและให้ความคิดเห็นเกี่ยวกับการใช้งานยูอิ คุณจะได้รับ code เพื่อนำมาติดต่อกับผู้ช่วยวิจัยในการรับค่าตอบแทนในการเป็นอาสาสมัคร <br>
                                    <br>
                                    หากท่านมีข้อสงสัยเกี่ยวกับการวิจัยหรือความปลอดภัยระหว่างเข้าร่วมวิจัย 
                                    ท่านสามารถติดต่อ ผศ.ดร.อัศวินี ตันกุริมาน สำนักวิชาพยาบาลศาสตร์ หัวหน้าโครงการวิจัย ที่เบอร์ 081-8854009 หรือ Email: asawinee.ton@mfu.ac.th <br>
                                    <br>
                                    คุณสามารถเข้าไปอ่านรายละเอียดได้เพิ่มเติมใน
                                    <a href="https://docs.google.com/document/d/1j_F-uFDnT3x_egY5deexfhzfVKrTGWem/edit?usp=sharing&ouid=105782068985083766210&rtpof=true&sd=true">
                                    File
                                     </a> นี้<br>
                                    <br>
                                    ถ้าคุณสนใจในการเป็นอาสาสมัครครั้งนี้ กดปุ่ม "อยากคุยด้วย" ได้เลยค่ะ
                                </div>
                            </q-card>
                        </div>
                    </div>
                    <div class="row q-py-md">
                        <div class="col-12 col-md-6 q-my-lg">
                            <q-btn @click="handleEnd" to="/emotionalResult" class="text text-h6" style="background-color: #FFB1A5;">
                                เอาไว้ทีหลัง
                            </q-btn>
                        </div>
                        <div class="col-12 col-md-6 q-my-lg">
                            <q-btn @click="handleAgreement" class="text text-h6 text-white" style="background-color: #63A568;">
                                อยากคุยด้วย
                            </q-btn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, ref, watchEffect, watch } from 'vue'
import { useRouter } from 'vue-router'
import FirestoreHandle from '../composables/FirestoreHandle'
import AuthenComposable from '../composables/AuthenComposable'

export default {
    setup () {
        const { updateDocData, currentUser, getRoundData, DocResult } = FirestoreHandle()
        // const { currentUser } = AuthenComposable()
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
        
        const handleAgreement = () => {
            updateDocData(`users/${currentUser.value}/${currentRound.value}/Emotional Data`, {Agreement: true}).then(()=>{
                router.push('/starting')
            })
        }

        const handleEnd = () => {
            router.push('/end')
        }

        return { handleAgreement, handleEnd }
    }
}
</script>

<style lang="scss" scoped>

</style>