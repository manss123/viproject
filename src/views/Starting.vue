<template>
    <div class="row text-center flex flex-center q-mt-md q-mx-lg">
        <div class="col-12">
            <!-- <div class="row q-my-lg">
                <div class="col-12">
                    <div class="text text-h4 text-bold">
                        คุณอยากคุยปรึกษากับ "ยูอิ" มั้ย?
                    </div>
                </div>
            </div> -->
            <div class="row q-my-lg q-px-xl flex flex-center">
                <!-- <div class="col-12 col-md-6">
                    <div class="text text-h4 text">
                        <q-img
                        :src="require('@/assets/TP AI material YUI.png')"
                        spinner-color="white"
                        :fit="'contain'"
                        :ratio="17/15"
                        />
                    </div>
                </div> -->
                <div class="col-12 col-md-12">
                    <div class="row q-py-lg">
                        <div class="col-12">
                            <div class="row">
                                <div class="col-12">
                                    <div class="text text-h4 q-pa-lg text-center">
                                        พบกันแล้วว!! 
                                        หยุดพัก เอนกายให้สบายปล่อยใจให้โล่ง 
                                        หาที่เงียบสงบ 
                                        ค่อยๆพูดคุยกับยูอินะ  <br>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="row">
                                <div class="col-12 col-md-4 q-pa-md">
                                    <q-card class="q-pa-lg" style="background-color: #FFCAC2;">
                                        <div class="row flex flex-center">
                                            <div class="col-12 col-md-12">
                                                <div class="text text-h5 q-pa-lg text-center">
                                                    เริ่มจาก <u>ใส่หูฟังและไมค์</u>  <br>
                                                    เพื่อป้องกันเสียงสะท้อน <br>
                                                    และเป็นส่วนตัวมากขึ้น <br>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-12">
                                                <q-img
                                                :src="require('@/assets/headphone.png')"
                                                spinner-color="white"
                                                :fit="'contain'"
                                                :ratio="2"
                                                />
                                            </div>
                                        </div>
                                    </q-card>
                                </div>
                                <div class="col-12 col-md-4 q-pa-md">
                                    <q-card class="q-pa-lg" style="background-color: #EACD82; height: 100%;">
                                        <div class="row flex flex-center">
                                            <div class="col-12 col-md-12">
                                                <div class="text text-h5 q-pa-lg text-center text-bold">
                                                    กติกาในการโต้ตอบกับยูอิ
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-12 q-mb-md">
                                                <div class="row flex flex-center">
                                                    <!-- <div class="col-12 col-md-4">
                                                        <q-img
                                                        :src="require('@/assets/listening.png')"
                                                        spinner-color="white"
                                                        :fit="'contain'"
                                                        :ratio="2"
                                                        class="q-my-md"
                                                        />
                                                    </div> -->
                                                    <div class="col-12 q-my-lg">
                                                        
                                                        <span class="text text-h5 text-left">
                                                            ถ้าเห็นข้อความ "ฟังก่อนนะคะ" <br>
                                                            <u>ฟังยูอิพูดให้จบก่อน</u> ยังไม่ต้องตอบยูอินะ
                                                        </span>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-12 q-mb-md">
                                                <div class="row flex flex-center">
                                                    <!-- <div class="col-12 col-md-4">
                                                        <q-img
                                                        :src="require('@/assets/speaking.png')"
                                                        spinner-color="white"
                                                        :fit="'contain'"
                                                        :ratio="2"
                                                        class="q-my-md"
                                                        />
                                                    </div> -->
                                                    <div class="col-12 q-my-lg">
                                                        <span class="text text-h5 text-left">
                                                            ถ้าเห็นข้อความ "พูดได้เลยค่ะ" <br>
                                                            <u>พูดตอบยูอิได้เลย</u> 
                                                            ยูอิฟังอยู่จ้า
                                                        </span>
                                                    </div>
                                                    
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </q-card>
                                </div>
                                <div class="col-12 col-md-4 q-pa-md">
                                    <q-card class="q-pa-lg bg-mainlight">
                                        <div class="row flex flex-center">
                                            <div class="col-12 col-md-12">
                                                <div class="text text-h5 q-pa-lg text-center">
                                                    หากเจอหน้าจอดาวน์โหลด <br>
                                                    <u>อดทนรอ</u>นิดนึงนะ <br>
                                                    ยูอิกำลังเตรียมตัวมาแล้วววว
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-12">
                                                <q-img
                                                :src="require('@/assets/clicking.png')"
                                                spinner-color="white"
                                                :fit="'contain'"
                                                :ratio="2"
                                                />
                                            </div>
                                        </div>
                                    </q-card>
                                </div>
                            </div>
                            <div class="row q-my-md">
                                <div class="col-12">
                                    <q-btn @click="handleAgreement" class="text text-h6 text-white" style="background-color: #63A568;">
                                        เริ่มได้เลยยย
                                    </q-btn>
                                </div>
                            </div>
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
            const currentDate = new Date().toLocaleDateString();
            updateDocData(`users/${currentUser.value}/${currentRound.value}/Emotional Data`, 
            {
                StartTime: currentDate
            }
            ).then(()=>{
                router.push('/consulting')
            })
        }

        return { handleAgreement }
    }
}
</script>

<style lang="scss" scoped>

</style>