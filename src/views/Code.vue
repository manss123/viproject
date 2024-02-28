<template>
    <div class="row text-center flex flex-center q-mt-md gt-md-q-mx-lg">
        <div class="col-12">
            <div class="row q-my-lg q-px-xl flex flex-center">
                <div class="col-12">
                    <div class="text text-h4 q-pa-lg text-center">
                        ขอให้ท่านทำการบันทึก หรือ ถ่ายภาพ code นี้ไว้ <br>
                        เพื่อเป็นหลักฐานในการนำมารับค่าตอบแทนจำนวน 300 บาท <br>
                        โดยให้ท่านทำการติดต่อผู้ช่วยวิจัยด้วย Line หรือ email ที่ให้มานี้...
                    </div>
                </div>
                <div class="col-12 col-md-6 q-pa-md">
                    <q-card class="q-pa-lg" style="background-color: #F8CBC3;">
                        <div class="row q-my-md">
                            <div class="col-12 col-md-12">
                                <div class="text text-h1 q-pa-lg text-center text-bold" style="color: #CF636E;">
                                    Your Code
                                </div>
                            </div>
                        </div>
                        <div class="row flex flex-center">
                            <div class="col-12 col-md-12">
                                <q-card-section class="bg-white">
                                    <div v-if="userCode" class="text text-h4 q-pa-lg text-center">
                                        {{userCode}}
                                    </div>
                                </q-card-section>
                            </div>
                        </div>
                        <div class="row q-my-md">
                            <div class="col-12 col-md-12">
                                <div class="text text-h4 q-pa-lg text-center">
                                    บันทึกรหัสที่ท่านได้รับ
                                </div>
                            </div>
                        </div>
                    </q-card>
                </div>
                <div class="col-12 col-md-6 q-pa-md">
                    <div class="row q-py-lg">
                        <div class="col-12">
                            <q-card class="bg-mainlight q-pa-lg">
                                <div class="row flex flex-center">
                                    
                                    <div class="col-12 col-md-12">
                                        <q-img
                                        :src="require('@/assets/QRContact.png')"
                                        spinner-color="white"
                                        :fit="'contain'"
                                        :ratio="3/1"
                                        />
                                    </div>
                                </div>
                                <div class="row q-my-md">
                                    <div class="col-12">
                                        <div class="text text-h4 text-center">
                                            ID Line: jae-aey <br>
                                            Email: sumalee.bur@mfu.ac.th <br>
                                        </div>
                                    </div>
                                </div>
                            </q-card>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <q-btn @click="HandleLogOut" class="text text-h6 text-black q-mx-md" style="background-color: #FFB1A5;">
                        ออกจากระบบ
                    </q-btn>
                    <q-btn @click="HandleScore" class="text text-h6 text-white q-mx-md" style="background-color: #63A568;">
                        ดูผลอารมณ์
                    </q-btn>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth"
import { ref, onMounted, watchEffect } from 'vue'
import { doc, getDoc } from '@firebase/firestore'
import { db } from '../firebase/config'
import getUser from "@/composables/getUser"
import FirestoreHandle from '../composables/FirestoreHandle'
import AuthenComposable from '../composables/AuthenComposable'
import { useRouter } from "vue-router"

    export default {
        setup() {
            const { currentUser, getDocData, DocResult, updateDocData } = FirestoreHandle()

            const userCode = ref(null);
            const router = useRouter()

            onMounted(() => {
                
            })

            watchEffect(()=>{
                if(currentUser)
                {
                    const userPath = `users/${currentUser.value}`
                    getDocData(userPath).then(()=>{
                        userCode.value = DocResult.value.userCode

                        if(!userCode.value)
                        {
                            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                            let code = '';
                            for (let i = 0; i < 6; i++) {
                                const randomIndex = Math.floor(Math.random() * characters.length);
                                code += characters.charAt(randomIndex);
                            }

                            userCode.value = code

                            const data = {userCode: userCode.value}
                            
                            updateDocData(userPath, data)
                        }
                        else
                        {
                            userCode.value = DocResult.value.userCode
                        }
                    })
                }
            })

            const HandleLogOut = () => {
                router.push('/end')
            }

            const HandleScore = () => {
                router.push('/emotioncompare')
            }

            return {userCode, HandleLogOut, HandleScore}
        },
        data() {
            return {
                
            }
        },
        methods: {
            // Logout(){
            //     const auth = getAuth();
            //     signOut(auth).then(() => {
            //     // Sign-out successful.
            //     this.ToHomePage();
            //     })
            // },

            ToHomePage(){
                this.$router.push({name:"home"})
            },
        },
    }
</script>

<style lang="stylus" scoped>

</style>