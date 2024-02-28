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
                            <q-card class="bg-mainlight q-pa-lg">
                                <div class="row flex flex-center">
                                    <div class="col-12 col-md-12">
                                        <div class="text text-h4 q-pa-lg text-center">
                                            ขอบคุณที่เข้าใช้บริการ <br>
                                            หวังว่าจะเป็นประโยชน์กับคุณนะคะ <br>
                                            ขอให้คุณพยายามรักษาใจคุณต่อนะคะ <br>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-12">
                                        <q-img
                                        :src="require('@/assets/Thank.png')"
                                        spinner-color="white"
                                        :fit="'contain'"
                                        :ratio="2/1"
                                        />
                                    </div>
                                </div>
                                <div class="row q-my-md">
                                    <div class="col-12">
                                        <q-btn @click="Logout" class="text text-h6 text-white" style="background-color: #63A568;">
                                            ออกจากระบบ
                                        </q-btn>
                                    </div>
                                </div>
                            </q-card>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth"
import { ref } from 'vue'
import { useRouter } from "vue-router"
import { doc, getDoc } from '@firebase/firestore'
import { db } from '../firebase/config'
import getUser from "@/composables/getUser"

    export default {
        setup()
        {
            const { LogUserOut } = getUser()
            const router = useRouter()

            const Logout = async () => {
               await LogUserOut().then(()=>{
                router.push('/')
               })
            }

            return { Logout }
        },
        // data() {
        //     return {
                
        //     }
        // },
        // methods: {
        //     // Logout(){
        //     //     const auth = getAuth();
        //     //     signOut(auth).then(() => {
        //     //     // Sign-out successful.
        //     //     this.ToHomePage();
        //     //     })
        //     // },

        //     // ToHomePage(){
        //     //     this.$router.push({name:"home"})
        //     // },
        // },
    }
</script>

<style lang="stylus" scoped>

</style>