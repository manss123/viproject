<template>
    <div>
        <q-page>
            <div class="column justify-center items-center">
                <div class="col-12">

                    <div class="col-12 text-center q-my-xl">
                        <p class="text-h2 text-weight-medium">
                            ปรึกษากันและกัน
                        </p>
                    </div>

                    <div class="row justify-center q-ma-md text-center">
                        <div class="column col-10">
                            <q-card class="my-card q-ma-lg" style="background-color: rgba(255, 255, 255, 0.2);">
                                <q-card-section class="q-py-xl">
                                    <div class="row justify-evenly items-center q-py-lg">
                                        <div class="column col-12">
                                            <p class="text-h4 text-weight-medium"> ท่านต้องการขอรับการปรึกษาและยินดีให้ใช้ข้อมูลในการปรึกษา <br/>
                                            เพื่อเป็นส่วนหนึ่งในการพัฒนาโปรแกรมมนุษย์เสมือน <br/>
                                            เพื่อช่วยเหลือผู้ที่มีความเครียด ความวิตกกังวล และภาวะเศร้า หรือไม่  </p>
                                        </div>
                                        <div class="column col-12 q-my-lg">
                                            <p class="text-h4"> โดยข้อมูลส่วนบุคคลของท่านจะถูกเก็บเป็นความลับ <br/> 
                                                มีเพียงผู้ที่ทําการปรึกษาท่านเท่านั้นที่จะทราบถึงตัวตนของท่าน <br/>
                                            ข้อมูลของท่านจะถูกนําเสนอเฉพาะเนื้อหาการสนทนา <br/>
                                            ที่จะไม่มีการระบุข้อมูลที่บ่งชี้ถึงตัวตนของท่าน <br/> และข้อมูลนั้นจะนําไปใช้เพื่อการพัฒนา <br/>
                                            โปรแกรมให้การช่วยเหลือผู้ที่มีปัญหาสุขภาพจิตเท่านั้น </p>
                                        </div>
                                    </div>
                                </q-card-section>
                            </q-card>
                        </div>
                    </div>

                    <div class="row justify-evenly text-center">
                        <div class="row justify-center">
                            <q-btn class="items-center" outline @click="UpdateAgreement(false)" color="primary" size="xl" label="ไม่ยินยอม" />
                        </div>
                        <div class="row justify-center">
                            <q-btn class="items-center" @click="UpdateAgreement(true)" color="primary" size="xl" label="ยินยอม" />
                        </div>
                    </div>

                </div>
            </div>
        </q-page>
    </div>
</template>

<script>
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth"
import { ref } from 'vue'
import { doc, getDoc, updateDoc } from '@firebase/firestore'
import { db } from '../firebase/config'
import getUser from "@/composables/getUser"

    export default {
        setup() {
            const { user } = getUser()
            return { user }
        },
        data() {
            return {
                user: null,
            }
        },
        methods: {
            UpdateAgreement(status){
                const userRef = doc(db, "users", this.user.email);
                    if(status == false)
                    {
                        updateDoc(userRef, {
                            Agreement: status,
                        })
                        this.$router.push({name: "End"})
                    }
                    else
                    {
                        updateDoc(userRef, {
                            Agreement: status,
                        })
                        this.$router.push({name: "Agree"})
                    }
                
            },

        },
    }
</script>

<style lang="scss" scoped>
@media screen and (max-width: 425px) {
//     .text-h2
//   {
//     font-size: 35px;
//   }
  .text-h4
  {
    font-size: 25px;
  }
}
@media screen and (min-width: 426px) and (max-width: 880px) {
  .text-h4
  {
    font-size: 30px;
  }
}
</style>